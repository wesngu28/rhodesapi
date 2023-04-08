import fetch from 'node-fetch';
import { getStatistics } from './getStatistics';
import { getCosts } from './getCosts';
import { sleep } from './sleep';
import { operatorInterface } from '../models/operatorModel';
import { HTMLElement, parse } from 'node-html-parser';
import { getRange } from './getRange';

export const getStaticInformation = async (url: string) => {
  // try {
    const operatorHTML = await fetch(url);
    const operator = parse(await operatorHTML.text());
    // await sleep(7500);

    let rarity = operator.querySelectorAll('.rarity-cell > img').length;
    const name = checkForExistence(operator.querySelector('#page-title > h1'));

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
    const [primaryClass, secondaryClass] = classArr[1].includes('/') ? classArr[1].split(' / ') : [classArr[1]];
    const uniqueClasses = [...new Set([classArr[0].replace(/\n/g, '')])];
    if (primaryClass) uniqueClasses.push(primaryClass.replace(/\n/g, ''))
    if (secondaryClass) uniqueClasses.push(secondaryClass.replace(/\n/g, ''))

    const recruitment = operator.querySelectorAll('.tag-title').map(tag => tag.textContent.replace(/\n/g, ''))
    recruitment.pop();
    recruitment.push(classArr[0].replace(/\n/g, ''));

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

    const talent: Array<{name: string, value: string, elite: string, potential: string, moduleName?: string, moduleLevel?: number}> = operator
      .querySelectorAll('.talent-child').map(cell => {
        let eliteImage = cell.querySelector('.elite-level img')
        let potential = cell.querySelector('.potential-level img')
        let loc = potential?.getAttribute("src")?.indexOf(".png")
        return({
          "name": checkForExistence(cell.querySelector('.talent-title')),
          "value": checkForExistence(cell.querySelector('.talent-description')),
          "elite": eliteImage && eliteImage.getAttribute("src")?.includes('2.png') ? "E2" : "E1",
          "potential": potential && loc ? potential!.getAttribute("src")![loc - 1] : "0"
        });
    })

    operator.querySelectorAll('.talent-cell .paragraph--type--module-talent-attributes').forEach(cell => {
      let elitePotImages = cell.querySelectorAll('.module-unlock-phase img')
      let loc = elitePotImages[1]?.getAttribute("src")?.indexOf(".png")
      talent.push({
        "name": checkForExistence(cell.querySelector('.module-talent-name a')),
        "value": checkForExistence(cell.querySelector('.module-talent-row-2')),
        "elite": elitePotImages[0] && elitePotImages[0].getAttribute("src")?.includes('2.png') ? "E2" : "E1",
        "potential": elitePotImages[1] && loc ? elitePotImages[1]!.getAttribute("src")![loc - 1] : "0",
        "moduleName": checkForExistence(cell.querySelector(".module-upgrade-from a"))
      });
    })

    const skillsTabs = operator.querySelectorAll('.skill-cell').map((skill, i) => {
      let name = checkForExistence(skill.querySelector(".skill-title-cell a:last-child"))
      let skillDescription = skill.querySelector('.skill-description > .skill-upgrade-tab-1')?.innerHTML.replace(/<br/g, '')!;
      skillDescription = skillDescription.replace(/<span[^>]*>/gi, "").replace(/<\/span>/gi, "").replaceAll('>', '. ')
      const initialSkillValues = operator.querySelectorAll(`#skill-tab-${1 + i} .skill-upgrade-tab-1 .skill-description-value`).map(skill => checkForExistence(skill))
      const finalSkillValues: string[] = operator.querySelectorAll(`#skill-tab-${1 + i} .skill-description > .skill-upgrade-tab-10 .skill-description-value`).map(skill => checkForExistence(skill))
      let attemptMashDesc = ""
      for(let i = 0; i < initialSkillValues.length; i++) {
        if(initialSkillValues[i] !== finalSkillValues[i]) {
          attemptMashDesc = skillDescription.replace(initialSkillValues[i], `${initialSkillValues[i]}-${finalSkillValues[i]}`)
        }
      }
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
        spCost: Array.from({ length: 10 }, (_, i) => i + 1).map(i => checkForExistence(skill.querySelector(`.sp-cost> .skill-upgrade-tab-${i}`))),
        initialSP: Array.from({ length: 10 }, (_, i) => i + 1).map(i => checkForExistence(skill.querySelector(`.initial-sp> .skill-upgrade-tab-${i}`))),
        skillCharge: checkForExistence(skill.querySelector('.sp-charge-type a')),
        skillActivation: checkForExistence(skill.querySelector('.skill-activation a')),
        duration: Array.from({ length: 10 }, (_, i) => i + 1).map(i => checkForExistence(skill.querySelector(`.skill-duration> .skill-upgrade-tab-${i}`))),
        range: skillRanges[0] ? skillRanges : "Skill does not modify range",
        skillDescription: skillDescription,
        skillProgressDescription: attemptMashDesc
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
            "moduleLevel": i
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
          talentChanges: talent,
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
            availability: checkForExistence(modulos.querySelector(".module-availability")) === "Availability: na" ? "Global" : "CN",
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

    const operatorArt: { [key: string]: string | { link: string, line: string } } = {};
    const imgLinkList = operator.querySelectorAll('.operator-image > a').map(a => a.getAttribute('href')!);
    operatorArt['Base'] = imgLinkList[0];
    imgLinkList.shift()
    if (rarity > 2) {
      imgLinkList.shift()
      operatorArt['E2'] = imgLinkList[0]
    }
    for (let i = 0; i < imgLinkList.length; i++) {
      if (!imgLinkList[i].includes('png')) {
        const test = await fetch('https://gamepress.gg/' + imgLinkList[i]);
        const skin = parse(await test.text());
        const name = checkForExistence(skin.querySelector('#page-title > h1'));
        const line = checkForExistence(skin.querySelector('.skin-series a'));
        operatorArt[name] = { link: 'https://gamepress.gg/' + imgLinkList[i], line: line };
      }
    }
    // const costs = await getCosts(url);
    // const statistics = await getStatistics(url);
    const gamepressname = url.replace('https://gamepress.gg/arknights/operator/', '');
    const availability = checkForExistence(operator.querySelector('.obtain-approach-table'));
    const dict = {
      "_id": gamepressname,
      "name": name,
      "range": cells,
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
      // "statistics": statistics,
      // "costs": costs,
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
      "availability": availability.includes('N/A') ? "CN only" : "Global",
      "url": url,
    }
    return dict;
  // } catch (err: any) {
  //   throw new Error(err.message);
  // }
}

// getStaticInformation("https://gamepress.gg/arknights/operator/schwarz")

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