import { getStatistics } from './getStatistics';
import { getCosts } from './getCosts';
import { HTMLElement, parse } from 'node-html-parser';
import { operatorInterface } from '../models/operatorModel';

const sleep = (ms: number) => { return new Promise(resolve => setTimeout(resolve, ms)); }
export const getStaticInformation = async (url: string, imgArr?: Array<{name: string, originalLink?: string, link: string, line?: string}>) => {
  try {
    const { uploadFile } = await import('@uploadcare/upload-client')
    const operatorHTML = await fetch(url);
    const operator = parse(await operatorHTML.text());
    
    await sleep(2500)

    let rarity = operator.querySelectorAll('.rarity-cell > img').length;
    const operatorName = checkForExistence(operator.querySelector('#page-title > h1'));
    console.log(operatorName);
    const rangeBox = operator.querySelectorAll('.operator-image .range-box');
    const cells = rangeBox.map((currRange, i) => {
      const currCells = currRange.querySelectorAll('.range-cell')
      const range = Array.from(currCells).map(cell => {
        let blocks = Array.from(cell.querySelectorAll('span')).map(block => block.classList.contains('empty-box') ? "attackable" : block.classList.contains('fill-box') ? "unit" : "null")
        return blocks
      })
      return {
        elite: i === 0 ? "Base" : i === 1 ? "E1" : "E2",
        range: range
      }
    });

    const alter = checkForExistence(operator.querySelector('.alter-parent .name'));
    const biography = checkForExistence(operator.querySelector('.profile-description'));

    let descriptionArr = operator.querySelectorAll('.description-box').map(box => {
      box.childNodes.forEach(node => {
        if (node instanceof HTMLElement) {
          if (node.tagName === "PRE") {
            box.removeChild(node)
          }
        }
      })
      return box.textContent.replace(/\n/g, '')
    });

    let artist = checkForExistence(operator.querySelector('.profile-info-table > table > tr > td > a:first-child'));
    const jpva = checkForExistence(operator.querySelector('.profile-info-table > table > tr:nth-child(2) > td > a'));

    const classArr = operator.querySelectorAll('.profession-title').map(clas => clas.textContent);
    const [primaryClass, secondaryClass] = classArr[1] ? classArr[1].includes('/') ? classArr[1].split(' / ') : [classArr[1]] : [];
    const uniqueClasses = classArr[0] ? [...new Set([classArr[0].replace(/\n/g, '')])] : [];
    if (primaryClass) uniqueClasses.push(primaryClass.replace(/\n/g, ''))
    if (secondaryClass) uniqueClasses.push(secondaryClass.replace(/\n/g, ''))

    const recruitment = operator.querySelectorAll('.tag-title').map(tag => tag.textContent.replace(/\n/g, ''))
    recruitment.pop();
    if (classArr[0]) recruitment.push(classArr[0].replace(/\n/g, ''));

    const obtainable = operator.querySelectorAll('.obtain-approach-table span').map(existence => existence.textContent)
    if(obtainable[1] === '(LIMITED)'){
      obtainable[0] = 'Yes';
      obtainable[1] = 'No';
    }

    const potential: Array<{name: string, value: string}> = operator.querySelectorAll('.potential-list').map(cell => {
      return({
        "name": checkForExistence(cell.querySelector('.potential-icon')),
        "value": checkForExistence(cell.querySelector('.potential-title'))
      });
    })

    const trust: Array<{name: string, value: string}> = operator.querySelectorAll('.trust-cell .potential-list').map(cell => {
      return({
        "name": checkForExistence(cell.querySelector('.potential-icon')),
        "value": checkForExistence(cell.querySelector('.potential-title'))
      });
    })

    const talent: Array<{name: string, variation: Array<{description: string, elite: string, potential: string, moduleName?: string, moduleLevel?: number}>}> = []
    operator.querySelectorAll('.talent-child').forEach(cell => {
        let eliteImage = cell.querySelector('.elite-level img')
        let potential = cell.querySelector('.potential-level img')
        let loc = potential?.getAttribute("src")?.indexOf(".png")
        let name = checkForExistence(cell.querySelector('.talent-title'))
        if(!talent.find(talents => talents.hasOwnProperty("name"))) {
          let currentVariation = {
            "description": checkForExistence(cell.querySelector('.talent-description')),
            "elite": eliteImage && eliteImage.getAttribute("src")?.includes('2.png') ? "E2" : "E1",
            "potential": potential && loc ? potential!.getAttribute("src")![loc - 1] : "0"
          }
          talent.push({ name, variation: [currentVariation] })
        } else {
          const skill = talent.find(talents => talents.hasOwnProperty("name"))!;
          skill.variation.push({
            "description": checkForExistence(cell.querySelector('.talent-description')),
            "elite": eliteImage && eliteImage.getAttribute("src")?.includes('2.png') ? "E2" : "E1",
            "potential": potential && loc ? potential!.getAttribute("src")![loc - 1] : "0"
          })
        }
    })

    const skillsTabs = operator.querySelectorAll('.skill-cell').map((skill, i) => {
      let name = checkForExistence(skill.querySelector(".skill-title-cell a:last-child"))
      const rangeBoxes = skill.querySelectorAll('.skill-range-box .range-box');
      const skillRanges = rangeBoxes.map(boxes => {
        const currCells = boxes.querySelectorAll('.range-cell')
        const range = Array.from(currCells).map(cell => {
          let blocks = Array.from(cell.querySelectorAll('span')).map(block => block.classList.contains('empty-box') ? "attackable" : block.classList.contains('fill-box') ? "unit" : "null")
          return blocks
        })
        return range
      })
      return {
        name: name.substring(name.indexOf(' ', name.indexOf(':')) + 1),
        variations: Array.from({ length: 10 }, (_, i) => i + 1).map(i => {
          return {
            level: i < 8 ? i : i === 8 ? "M1" : i === 9 ? "M2" : "M3",
            description: checkForExistence(skill.querySelector(`.skill-description > .skill-upgrade-tab-${i}`)),
            sp_cost: checkForExistence(skill.querySelector(`.sp-cost> .skill-upgrade-tab-${i}`)),
            initial_sp: checkForExistence(skill.querySelector(`.initial-sp> .skill-upgrade-tab-${i}`)),
            duration: checkForExistence(skill.querySelector(`.skill-duration> .skill-upgrade-tab-${i}`)),
            range: skillRanges[i] ? skillRanges[i] : "Skill does not modify range"
          }
        }),
        skill_charge: checkForExistence(skill.querySelector('.sp-charge-type a')),
        skill_activation: checkForExistence(skill.querySelector('.skill-activation a')),
      }

    })

    let modules: [{[key: string]: any}] = [{}];
    for (let i = 1; i <= 3; i++) {
      const modulo = operator.querySelectorAll(`.operator-page-cell > .views-element-container .module-group-lvl-${i}`);
      modulo.forEach(modulos => {
        const moduleName = checkForExistence(modulos.querySelector(".module-title a"));
        const moduleAttribute: { [key: string]: string }  = {};
        const moduleAttributeNames = modulos.querySelectorAll('.module-row-3 > table tr > th').slice(2).map(moduleAttributeName => checkForExistence(moduleAttributeName));
        const moduleAttributeValues = modulos.querySelectorAll('.module-row-3 > table tr > td').map(moduleAttributeValue => checkForExistence(moduleAttributeValue));
        moduleAttributeNames.forEach((moduleAttributeName, i) => moduleAttribute[moduleAttributeName] = moduleAttributeValues[i]);
        let talent = modulos.querySelectorAll('.paragraph--type--module-talent-attributes').map(cell => {
          let elitePotImages = cell.querySelectorAll('.module-unlock-phase img')
          let loc = elitePotImages[1]?.getAttribute("src")?.indexOf(".png")
          return({
            "name": checkForExistence(cell.querySelector('.module-talent-name a')),
            "value": checkForExistence(cell.querySelector('.module-talent-row-2')),
            "elite": elitePotImages[0] && elitePotImages[0].getAttribute("src")?.includes('2.png') ? "E2" : "E1",
            "potential": elitePotImages[1] && loc ? elitePotImages[1]!.getAttribute("src")![loc - 1] : "0",
            "module_level": i
          });
        })
        const unlockCriteria = [...new Set(
          modulos.querySelectorAll('.accordion-custom-content:last-child > table:nth-child(2) > tr')
            .map((criteria, i) => {
              if (i > 0) return checkForExistence(criteria);
            })
            .filter(Boolean)
        )];
        const moduleData = {
          level: i,
          trait: checkForExistence(modulos.querySelector('.module-row-2')).replace('Equip Trait', ''),
          attributes: moduleAttribute,
          talent_changes: talent,
          unlock: unlockCriteria
        };
        const existingModuleIndex = modules.findIndex((moduler) => moduler.name === moduleName);
        if (existingModuleIndex !== -1) {
          modules[existingModuleIndex].levels.push(moduleData);
        } else {
          if (!modules[0].name) modules.pop()
          modules.push({
            name: moduleName,
            trust: checkForExistence(modulos.querySelector(".module-trust")).match(/Trust:\s*(\d+)/)?.[1],
            availability: checkForExistence(modulos.querySelector(".module-availability")).includes("Availability: na") ? "Global" : "CN",
            levels: [moduleData]
          });
        }
      });
    }

    if (!modules) modules = [{"status": "Operator has no modules"}]

    const base = operator.querySelectorAll('.building-buff-cell').map(el => {
      const name = checkForExistence(el.querySelector('.title-cell'));
      const level = el.querySelector('.level-cell img[src]')?.getAttribute('src')?.[41] ? `Elite ${el.querySelector('.level-cell img[src]')!.getAttribute('src')![41]}` : '';
      const effects = checkForExistence(el.querySelector('.build-description-cell'));
      const building = checkForExistence(el.querySelector('.buff-type-cell'));
      return { name, level, effects, building };
    });

    const characterInfo: {[key: string]: string} = {};
    const infoKeys = operator.querySelectorAll('.profile-info-table > table:nth-child(2) th, .profile-info-table > table:nth-child(4) th').map(th => checkForExistence(th).replaceAll(' ', '_').toLowerCase());
    const infoBody = operator.querySelectorAll('.profile-info-table > table:nth-child(2) td, .profile-info-table > table:nth-child(4) td').map(td => checkForExistence(td));
    infoKeys.forEach((key, i) => characterInfo[key] = infoBody[i]);
    if (!characterInfo.hasOwnProperty('height')) characterInfo['Height'] = 'No Known Height';

    const affiliations: string[] = operator.querySelectorAll('.group-name > a')?.map(affiliation => checkForExistence(affiliation));

    const voiceLines: { [key: string]: string } = {};
    const voiceLineConditions = operator.querySelectorAll('.voice-lines-table th').map(th => checkForExistence(th).replaceAll(' ', '_').toLowerCase());
    const voiceLinesContent = operator.querySelectorAll('.voice-lines-table td').map(td => checkForExistence(td));
    voiceLineConditions.forEach((voiceLineConditions, i) => voiceLines[voiceLineConditions] = voiceLinesContent[i]);

    const operatorArt: Array<{name: string, originalLink: string, link: string, line?: string}> = [];

    let imgLinkList = operator.querySelectorAll('.operator-image > a').map(a => a.getAttribute('href')!)
    
    let e0 = operator.querySelector('.tab-link[data-tab="image-tab-1"]')
    let e1 = operator.querySelector('.tab-link[data-tab="image-tab-2"]')
    let e2 = operator.querySelector('.tab-link[data-tab="image-tab-3"]')
    const lbs = [e0, e1, e2].filter(lb => lb)
    
    for (let i = 0; i < lbs.length; i++) {
      if (imgArr && imgArr[i] && imgArr[i].originalLink === imgLinkList[i]) {
        operatorArt.push({ name: `${i === 0 ? "Base" : `E${i}`}`, originalLink: imgLinkList[0], link: imgArr[0].link });
      } else if (imgLinkList && imgLinkList[0]) {
        let file = await uploadFile(imgLinkList[0], {
          publicKey: 'e4e7900bd16b1b5b3363',
          store: 'auto',
          fileName: `${operatorName}${i === 0 ? "Base" : `E${i}`}`
        });
        operatorArt.push({ name: `${i === 0 ? "Base" : `E${i}`}`, originalLink: imgLinkList[0], link: `https://ucarecdn.com/${file.uuid}/` });
      }
    }

    imgLinkList = imgLinkList.slice(lbs.length)

    if (imgLinkList.length > 0) {
      for (let i = 0; i < imgLinkList.length; i++) {
        const [name, line, skinUrl] = await handleRelativeImageLinks(imgLinkList[i])
        if (imgArr && imgArr[i] && imgArr[i].originalLink === imgLinkList[i]) {
          operatorArt.push({ name, originalLink: imgLinkList[i], link: imgArr[i].link, line });
        } else if (imgLinkList && imgLinkList[i]) {
          let file = await uploadFile(skinUrl, {
            publicKey: 'e4e7900bd16b1b5b3363',
            store: 'auto',
            fileName: `${operatorName}${name}`
          });
          operatorArt.push({ name, originalLink: imgLinkList[i], link: `https://ucarecdn.com/${file.uuid}/`, line});
        }
      }
    }    
    const costs = await getCosts(url);
    const statistics = await getStatistics(url);
    const gamepressname = url.replace('https://gamepress.gg/arknights/operator/', '');
    const availability = operator.querySelectorAll('.obtain-approach-table table');
    const releaseDates = {
      cn: checkForExistence(availability[1].querySelectorAll('td')[0]),
      global: checkForExistence(availability[1].querySelectorAll('td')[1])
    }
    return {
      "_id": gamepressname,
      "name": operatorName,
      "rarity": rarity,
      "alter": alter,
      "artist": artist,
      "va": jpva,
      "biography": biography,
      "description": descriptionArr[1] as string,
      "quote": descriptionArr[2] as string,
      "voicelines": voiceLines,
      "lore": characterInfo,
      "affiliation": affiliations,
      "class": uniqueClasses,
      "tags": recruitment,
      "range": cells,
      "statistics": statistics,
      "costs": costs,
      "trait": descriptionArr[0] as string,
      "potential": potential,
      "trust": trust,
      "talents": talent,
      "skills": skillsTabs,
      "module": modules,
      "base": base,
      "headhunting": obtainable[0] as string,
      "recruitable": obtainable[1] as string,
      "art": operatorArt,
      "availability": checkForExistence(availability[0]).includes('N/A') ? "CN only" : "Global",
      "release_dates": releaseDates,
      "url": url,
    } as operatorInterface;
  } catch (err: any) {
    throw new Error(err);
  }
}

function checkForExistence(field: any): string {
  if (!field || !field.textContent) {
    return 'Not provided';
  }
  let cleanedField = field.textContent.replace(/\n/g, '').replace(/&nbsp/g, ' ');
  if (cleanedField === 'Wé[email protected]') {
    cleanedField = 'Wéi@W';
  }
  return cleanedField;
}

async function handleRelativeImageLinks(imgLink: string): Promise<Array<string>> {
    await sleep(1000)
    const test = await fetch('https://gamepress.gg/' + imgLink);
    const skin = parse(await test.text());
    const name = checkForExistence(skin.querySelector('#page-title > h1'));
    const line = checkForExistence(skin.querySelector('.skin-series a'));
    const skinUrl = skin.querySelector('.operator-image a');
    return [name, line, skinUrl?.getAttribute("href")!]
}