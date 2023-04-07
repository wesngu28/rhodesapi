import fetch from 'node-fetch';
import { getStatistics } from './getStatistics';
import { getCosts } from './getCosts';
import { sleep } from './sleep';
import { operatorInterface } from '../models/operatorModel';
import { parse } from 'node-html-parser';

export const getStaticInformation = async (url: string) => {
  try {
    const operatorHTML = await fetch(url);

    const operator = parse(await operatorHTML.text());
    // await sleep(7500);

    let rarity = operator.querySelector('.rarity-cell > img');
    const name = operator.querySelector('#page-title > h1');
    const alter = operator.querySelector('.alter-parent .name');
    const biography = operator.querySelector('.profile-description:first-child');

    const descriptionArr: string[] = [];
    let descriptionBox = operator.querySelectorAll('.description-box')
    descriptionBox.forEach(description => descriptionArr.push(description.textContent.replace(/\n/g, '')))

    let artist = operator.querySelector('.profile-info-table > table > tbody > tr > td > a:first-child');
    const jpva = operator.querySelector('.profile-info-table > table > tbody > tr:nth-child(2) > td > a');

    const classArr = operator.querySelectorAll('.profession-title').map(clas => clas.textContent);
    const [primaryClass, secondaryClass] = classArr[1].includes('/') ? classArr[1].split(' / ') : [classArr[1]];
    const uniqueClasses = [...new Set([classArr[0].replace(/\n/g, ''), primaryClass.replace(/\n/g, ''), secondaryClass.replace(/\n/g, '')])];

    const recruitment = operator.querySelectorAll('.tag-title').map(tag => tag.textContent.replace(/\n/g, ''))
    recruitment.pop();
    recruitment.push(classArr[0].replace(/\n/g, ''));

    const obtainable: string[] = operator.querySelectorAll('.obtain-approach-table span').map(existence => existence.textContent)
    if(obtainable[1] === '(LIMITED)'){
      obtainable[0] = 'Yes';
      obtainable[1] = 'No';
    }

    const potential: Array<{name: string, value: string}> = [];
    operator.querySelectorAll('.potential-list').forEach(cell => {
      potential.push({
        "name": checkForExistence(cell.querySelector('.potential-icon')),
        "value": checkForExistence(cell.querySelector('.potential-title'))
      });
    })

    const trust: Array<{name: string, value: string}> = [];
    operator.querySelectorAll('.trust-cell .potential-list').forEach(cell => {
      trust.push({
        "name": checkForExistence(cell.querySelector('.potential-icon')),
        "value": checkForExistence(cell.querySelector('.potential-title'))
      });
    })

    const talent: Array<{name: string, value: string, elite: string, potential: string, moduleName?: string, moduleLevel?: number}> = [];
    operator.querySelectorAll('.talent-child').forEach(cell => {
      let eliteImage = cell.querySelector('.elite-level img')
      let potential = cell.querySelector('.potential-level img')
      let loc = potential?.getAttribute("src")?.indexOf(".png")
      talent.push({
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
      let skillDescription = checkForExistence(skill.querySelector('.skill-description > .skill-upgrade-tab-1'));
      const initialSkillValues = operator.querySelectorAll(`#skill-tab-${1 + i} .skill-upgrade-tab-1 .skill-description-value`).map(skill => checkForExistence(skill))
      const finalSkillValues: string[] = operator.querySelectorAll(`#skill-tab-${1 + i} .skill-description > .skill-upgrade-tab-10 .skill-description-value`).map(skill => checkForExistence(skill))
      let attemptMashDesc = ""
      for(let i = 0; i < initialSkillValues.length; i++) {
        if(initialSkillValues[i] !== finalSkillValues[i]) {
          attemptMashDesc = skillDescription.replace(initialSkillValues[i], `${initialSkillValues[i]}-${finalSkillValues[i]}`)
        }
      }
      const skiller = {
        name: name.substring(name.indexOf(' ', name.indexOf(':')) + 1),
        SPCost: Array.from({ length: 10 }, (_, i) => i + 1).map(i => checkForExistence(skill.querySelector(`.sp-cost> .skill-upgrade-tab-${i}`))),
        initialSP: Array.from({ length: 10 }, (_, i) => i + 1).map(i => checkForExistence(skill.querySelector(`.initial-sp> .skill-upgrade-tab-${i}`))),
        skillCharge: checkForExistence(skill.querySelector('.sp-charge-type a')),
        skillActivation: checkForExistence(skill.querySelector('.skill-activation a')),
        duration: Array.from({ length: 10 }, (_, i) => i + 1).map(i => checkForExistence(skill.querySelector(`.skill-duration> .skill-upgrade-tab-${i}`))),
        skillDescription: skillDescription,
        skillProgressDescription: attemptMashDesc
      }
      return skiller
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
          trait: checkForExistence(modulos.querySelector('.module-row-2')),
          attributes: moduleAttribute,
          talent_changes: talent,
          unlock: unlockCriteria
        };
        const existingModuleIndex = modules.findIndex((module) => module.name === moduleName);
        if (existingModuleIndex !== -1) {
          modules[existingModuleIndex].levels.push(moduleData);
        } else {
          modules.push({
            name: moduleName,
            trust: checkForExistence(modulos.querySelector(".module-trust")),
            availability: checkForExistence(modulos.querySelector(".module-availability")),
            levels: [moduleData]
          });
        }
      });
    }

    // const base: Array<{name: string, level: string, effects: string, building: string}> = [];
    // const baseSkillNames: string[] = [];
    // $('.building-buff-cell .title-cell').each(function(){
    //   baseSkillNames.push(checkForExistence($(this)));
    // });
    // const baseSkillLevel: string[] = [];
    // $('.building-buff-cell .level-cell img').each(function(){
    //   if($(this).attr('src')) {
    //     baseSkillLevel.push(`Elite ${$(this).attr('src')![41]}`)
    //   }
    // });
    // const baseSkillEffects: string[] = [];
    // $('.building-buff-cell .build-description-cell').each(function(){
    //   baseSkillEffects.push(checkForExistence($(this)));
    // });
    // const baseSkillBuildings: string[] = [];
    // $('.buff-type-cell').each(function(){
    //   baseSkillBuildings.push(checkForExistence($(this)));
    // });

    // for(let i = 0; i < baseSkillNames.length; i++) {
    //   const baseAddition = {
    //     name: baseSkillNames[i],
    //     level: baseSkillLevel[i],
    //     effects: baseSkillEffects[i],
    //     building: baseSkillBuildings[i]
    //   }
    //   base.push(baseAddition);
    // }

    // const characterInfo: { [key: string]: string } = {};
    // const infoKeys: string[] = [];
    // $('.profile-info-table > table:nth-child(2) th').each(function(){
    //   infoKeys.push(checkForExistence($(this)));
    // });
    // $('.profile-info-table > table:nth-child(4) th').each(function(){
    //   infoKeys.push(checkForExistence($(this)));
    // });
    // const infoBody: string[] = [];
    // $('.profile-info-table > table:nth-child(2) td').each(function(){
    //   infoBody.push(checkForExistence($(this)));
    // });
    // $('.profile-info-table > table:nth-child(4) td').each(function(){
    //   infoBody.push(checkForExistence($(this)));
    // });
    // infoKeys.forEach((infoKeys, i) => characterInfo[infoKeys] = infoBody[i]);
    // if (characterInfo.hasOwnProperty('Height') === false) {
    //   characterInfo['Height'] = 'No Known Height';
    // }

    // const affiliations: string[] = [];
    // $('.group-name > a').each(function(){
    //   affiliations.push(checkForExistence($(this)));
    // });

    // let tips = $('.main-title + h2 > p')
    // if(checkForExistence(tips) === '') {
    //   tips = $('.main-title + h2');
    // }

    // const voiceLines: { [key: string]: string } = {};
    // const voiceLineConditions: string[] = [];
    // $('.voice-lines-table th').each(function(){
    //   voiceLineConditions.push(checkForExistence($(this)));
    // })
    // const voiceLinesContent: string[] = [];
    // $('.voice-lines-table td').each(function(){
    //   voiceLinesContent.push(checkForExistence($(this)));
    // })
    // voiceLineConditions.forEach((voiceLineConditions, i) => voiceLines[voiceLineConditions] = voiceLinesContent[i]);

    // const operatorArt: { [key: string] : string } = {};
    // const imgSrcList: string[] = [];
    // $('.operator-image > a > img').each(function(){
    //   imgSrcList.push($(this).attr('src')!)});
    // const imgLinkList: string[] = [];
    // $('.operator-image > a').each(function(){
    //   imgLinkList.push($(this).attr('href')!);
    // });
    // imgLinkList.forEach((imgLinkList, i) => {
    //   operatorArt[imgLinkList] = imgSrcList[i];
    // });
    // const compare = Object.keys(operatorArt);
    // for (let i = 0; i < imgLinkList.length; i++) {
    //   operatorArt[compare[i]] = 'https://gamepress.gg' + operatorArt[compare[i]];
    //   if(rarity > 2 && i === 0) {
    //     delete operatorArt[compare[i]];
    //   }
    //   if(rarity < 2 && i === 0) {
    //     operatorArt['Base'] = operatorArt[compare[i]];
    //     delete operatorArt[compare[i]];
    //   }
    //   if(rarity > 2 && i === 1) {
    //     operatorArt['Base'] = operatorArt[compare[i]];
    //     delete operatorArt[compare[i]];
    //   }
    //   if(compare[i].includes('https') && i === 2) {
    //     operatorArt['E2'] = operatorArt[compare[i]];
    //     delete operatorArt[compare[i]];
    //   }
    //   if (!compare[i].includes('png')) {
    //     const url = 'https://gamepress.gg/' + compare[i];
    //     const test = await fetch(url);
    //     const $ = load(await test.text());
    //     const name = $('#page-title > h1').text();
    //     operatorArt[name] = operatorArt[compare[i]];
    //     delete operatorArt[compare[i]];
    //   }
    // }
    // console.log(operatorArt)

    // const costs = await getCosts(url);
    // const statistics = await getStatistics(url);

    // const gamepressname = url.replace('https://gamepress.gg/arknights/operator/', '');
    const dict = {
      // "_id": gamepressname,
      "name": checkForExistence(name),
      "rarity": Number(checkForExistence(rarity)),
      "alter": checkForExistence(alter),
      "artist": checkForExistence(artist),
      "va": checkForExistence(jpva),
      "biography": checkForExistence(biography),
      "description": descriptionArr[1] as string,
      "quote": descriptionArr[2] as string,
      // "voicelines": voiceLines,
      // "lore": characterInfo,
      // "affiliation": affiliations,
      "class": uniqueClasses,
      "tags": recruitment,
      // "statistics": statistics,
      "trait": descriptionArr[0] as string,
      // "costs": costs,
      "potential": potential,
      "trust": trust,
      "talents": talent,
      "skills": skillsTabs,
      "module": modules,
      // "base": base,
      "headhunting": obtainable[0] as string,
      "recruitable": obtainable[1] as string,
      // "art": operatorArt,
      "availability": '',
      "url": '',
    }
    // const availability = $('.obtain-approach-table').text();
    // if(availability.includes('N/A')){
    //   dict['availability'] = 'CN only';
    // } else {
    //   dict['availability'] = 'Global';
    // }
    dict['url'] = url;
    console.log(dict)
    // return dict;
  } catch (err: any) {
    throw new Error(err.message);
  }
}

getStaticInformation("https://gamepress.gg/arknights/operator/skadi")

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