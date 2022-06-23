import fetch from 'node-fetch';
import { load } from 'cheerio';
import { headlessInformation } from './headlessInformation';
import { sleep } from './sleep';

export const getStaticInformation = async (url: string) => {
  try {
    const operatorHTML = await fetch(url);

    const $ = load(await operatorHTML.text());
    await sleep(7500);
    //Start scraping operator information

    //Rarity
    const rarity = $('.rarity-cell > img').length;
    //Name
    const name = $('#page-title > h1');

    //Alter
    const alter = $('.alter-parent .name');

    //Biography
    const biography = $('.profile-description:first');

    //Description - operator quote, description, and trait
    const description: string[] = [];
    $('.description-box').each(function(){
      description.push(checkForExistence($(this)));
    })

    //Artist Link
    const artist = $('.profile-info-table > table > tbody > tr > td > a:first');

    //Voice Actor (Japanese)
    const jpva = $('.profile-info-table > table > tbody > tr:nth-child(2) > td > a');

    //Classes
    const classes: string[] = [];
    $('.profession-title').each(function(){
      classes.push(checkForExistence($(this)));
    });
    let index = classes[1].indexOf('/');
    if(index !== -1) {
      classes.push(classes[1].substring(index+2, classes[1].length));
      classes[1] = classes[1].substring(0, index-1);
    }
    const uniqueClasses = [...new Set(classes)];
    //Tags/recruitment
    const recruitment: string[] = [];
    $('.tag-title').each(function(){
      recruitment.push(checkForExistence($(this)));
    })
    //one of the tags are already included in classes, pop off
    recruitment.pop();

    //Obtainable, can return 3 length array if operator is limited
    const obtainable: string[] = [];
    $('.obtain-approach-table span').each(function(){
      obtainable.push(checkForExistence($(this)));
    })
    if(obtainable[1] === '(LIMITED)'){
      obtainable[0] = 'Yes';
      obtainable[1] = 'No';
    }
    //Potential
    const potential: Array<{name: string, value: string}>  = [];
    const potentialName: string[] = [];
    $('.potential-cell .potential-icon').each(function(){
      potentialName.push(checkForExistence($(this)));
    })
    const potentialValue: string[] = [];
    $('.potential-cell .potential-title').each(function(){
      potentialValue.push(checkForExistence($(this)));
    })
    for (let i = 0; i < potentialName.length; i++) {
      const pot = {
        name: potentialName[i],
        value: potentialValue[i]
      }
      potential.push(pot);
    }

    //Trust
    const trust: { [key: string]: string } = {};
    const trustName: string[] = [];
    $('.trust-cell .potential-icon').each(function(){
      trustName.push(checkForExistence($(this)));
    })
    const trustValue: string[] = [];
    $('.trust-cell .potential-title').each(function(){
      trustValue.push(checkForExistence($(this)));
    })
    trustName.forEach((trustName, i) => trust[trustName] = trustValue[i]);

    //Talent
    const talent: Array<{name: string, value: string}> = [];
    const talentNames: string[] = [];
    $('.talent-title').each(function(){
      talentNames.push(checkForExistence($(this)));
    })
    const talentDescription: string[] = [];
    $('.talent-description').each(function(){
      talentDescription.push(checkForExistence($(this)));
    })
    for (let i = 0; i < talentNames.length; i++) {
      const talents = {
        name: talentNames[i],
        value: talentDescription[i]
      }
      talent.push(talents);
    }
    //Skills
    const skills = [];
    const skillUrls: string[] = [];
    $('.skill-title-cell > a').each(function(){
      skillUrls.push($(this).attr('href')!);
    })
    const uniqueSkillsUrls = [...new Set(skillUrls)];
    for (let i = 0; i < uniqueSkillsUrls.length; i++) {
      const url = 'https://gamepress.gg/' + uniqueSkillsUrls[i];
      const test = await fetch(url);
      const $ = load(await test.text());
      const name = $('#page-title > h1').text();
      const initialSpCost = $('.sp-cost > .effect-description:first').text();
      const finalSpCost = $('.sp-cost > .effect-description:last').text();
      const initialSP = $('.initial-sp > .effect-description:first').text();
      const finalSP = $('.initial-sp > .effect-description:last').text();
      const skillCharge = $('.sp-charge-type a').text().replace(/\n/g, '');
      const skillActivation = $('.skill-activation a').text().replace(/\n/g, '');
      let skillDescription = $('.skill-description > .effect-description:first').text();
      let rem = $('.skill-description > .effect-description:first > .skill-description-rem').text();
      const finalRem = $('.skill-description > .effect-description:last > .skill-description-rem').text();
      skillDescription = skillDescription.replace(rem, '');
      rem = rem.replace(rem[10], `${rem[10]}-${finalRem[10]}`);
      if (rem) {
        skillDescription = skillDescription + '. ' + rem;
      }
      const initialSkillValues: string[] = [];
      $('.skill-description > .effect-description:first .skill-description-value').each(function(){
        initialSkillValues.push(checkForExistence($(this)));
      });
      const finalSkillValues: string[] = [];
      $('.skill-description > .effect-description:last .skill-description-value').each(function(){
        finalSkillValues.push(checkForExistence($(this)));
      });
      for(let i = 0; i < initialSkillValues.length; i++) {
        if(initialSkillValues[i] !== finalSkillValues[i]) skillDescription = skillDescription.replace(initialSkillValues[i], `${initialSkillValues[i]}-${finalSkillValues[i]}`)
      }
      const skill = {
        name: name,
        spcost: `${initialSpCost}-${finalSpCost}`,
        initialSP: `${initialSP}-${finalSP}`,
        chargeType: skillCharge,
        skillActivation: skillActivation,
        skillDescription: skillDescription
      };
      skills.push(skill);
    }

    //Modules
    const moduleName = $('.module-title:last > a');
    const moduleLvl = $('.module-lvl:last > span');
    const moduleTrust = $('.module-trust:last');
    const moduleAvailability = $('.module-availability:last');
    const moduleTrait = $('.module-row-2');

    const moduleAttribute: { [key: string]: string } = {};
    const moduleAttributeName: string[]  = [];
    $('.module-row-3 > table > tbody > tr > th').each(function () {
      moduleAttributeName.push(checkForExistence($(this)));
    });
    const moduleAttributeValue: string[] = [];
    $('.module-row-3 > table > tbody > tr > td').each(function () {
      moduleAttributeValue.push(checkForExistence($(this)));
    });
    moduleAttributeName.forEach((moduleAttributeName, i) => moduleAttribute[moduleAttributeName] = moduleAttributeValue[i]);

    const unlockCriteria: string[] = [];
    $('.operator-modules-section:last > .accordion-custom-content > table:nth-child(2) > tbody > tr').each(function () {
      unlockCriteria.push(checkForExistence($(this)));
    });
    unlockCriteria.shift();
    const module = {
      name: checkForExistence(moduleName),
      level: checkForExistence(moduleLvl),
      trust: checkForExistence(moduleTrust),
      availability: checkForExistence(moduleAvailability).replace('Availability: ' || ' ', ''),
      trait: checkForExistence(moduleTrait).replace('Equip Trait', ''),
      attribute: moduleAttribute,
      missions: unlockCriteria
    }

    //Base Skills
    const base: Array<{name: string, level: string, effects: string, building: string}> = [];
    const baseSkillNames: string[] = [];
    $('.building-buff-cell .title-cell').each(function(){
      baseSkillNames.push(checkForExistence($(this)));
    });
    const baseSkillLevel: string[] = [];
    $('.building-buff-cell .level-cell img').each(function(){
      if($(this).attr('src')) {
        baseSkillLevel.push(`Elite ${$(this).attr('src')![41]}`)
      }
    });
    const baseSkillEffects: string[] = [];
    $('.building-buff-cell .build-description-cell').each(function(){
      baseSkillEffects.push(checkForExistence($(this)));
    });
    const baseSkillBuildings: string[] = [];
    $('.buff-type-cell').each(function(){
      baseSkillBuildings.push(checkForExistence($(this)));
    });

    for(let i = 0; i < baseSkillNames.length; i++) {
      const baseAddition = {
        name: baseSkillNames[i],
        level: baseSkillLevel[i],
        effects: baseSkillEffects[i],
        building: baseSkillBuildings[i]
      }
      base.push(baseAddition);
    }
    //Character Info Tables
    const characterInfo: { [key: string]: string } = {};
    const infoKeys: string[] = [];
    $('.profile-info-table > table:nth-child(2) th').each(function(){
      infoKeys.push(checkForExistence($(this)));
    });
    $('.profile-info-table > table:nth-child(4) th').each(function(){
      infoKeys.push(checkForExistence($(this)));
    });
    const infoBody: string[] = [];
    $('.profile-info-table > table:nth-child(2) td').each(function(){
      infoBody.push(checkForExistence($(this)));
    });
    $('.profile-info-table > table:nth-child(4) td').each(function(){
      infoBody.push(checkForExistence($(this)));
    });
    infoKeys.forEach((infoKeys, i) => characterInfo[infoKeys] = infoBody[i]);
    if (characterInfo.hasOwnProperty('Height') === false) {
      characterInfo['Height'] = 'No Known Height';
    }

    //Affiliated Lore Groups
    const affiliations: string[] = [];
    $('.group-name > a').each(function(){
      affiliations.push(checkForExistence($(this)));
    });

    let tips = $('.main-title + h2 > p')
    if(checkForExistence(tips) === '') {
      tips = $('.main-title + h2');
    }

    //Voice Lines
    const voiceLines: { [key: string]: string } = {};
    const voiceLineConditions: string[] = [];
    $('.voice-lines-table th').each(function(){
      voiceLineConditions.push(checkForExistence($(this)));
    })
    const voiceLinesContent: string[] = [];
    $('.voice-lines-table td').each(function(){
      voiceLinesContent.push(checkForExistence($(this)));
    })
    voiceLineConditions.forEach((voiceLineConditions, i) => voiceLines[voiceLineConditions] = voiceLinesContent[i]);

    //Art
    let imgList: Array<{image: string, name: string}> = [];
    const imgSrcList: string[] = [];
    $('.operator-image > a > img').each(function(){
      imgSrcList.push($(this).attr('src')!)});
    const imgLinkList: string[] = [];
    $('.operator-image > a').each(function(){
      imgLinkList.push($(this).attr('href')!);
    });
    const temp: { [key: string]: {image: string, name: string} } = {};
    for (let i = 1; i < imgSrcList.length; i++) {
      // let name = 'img' + i;
      temp.name = {
        image: imgSrcList[i],
        name: imgLinkList[i]
      }
      imgList.push(temp.name);
    }
    for (let i = 0; i < imgList.length; i++) {
      if (!imgList[i].name.includes('png')) {
        const url = 'https://gamepress.gg/' + imgList[i].name;
        const test = await fetch(url);
        const $ = load(await test.text());
        const name = $('#page-title > h1').text();
        imgList[i].name = name;
      }
    }
    if(imgList[0]) {
      imgList[0].name = 'E1';
    }
    if (imgList[1] && imgList[1].name.includes('https')) {
      imgList[1].name = 'E2';
    }
    function checkForExistence(field: any) : string {
      if (field) {
        field = field.text().replace(/\n/g, '');
        field = field.replace(/&nbsp/g, ' ');
        if(field === '') {
          field = `Not provided`;
          return field;
        } else {
          return field;
        }
      } else {
        field = `Not provided`;
        return field;
      }
    }

    //Use puppeteer to interact with page (level costs and statistics).
    //Increases execution time of scraper by 30 seconds
    const dynamics = await headlessInformation(url)
    const gamepressname = url.replace('https://gamepress.gg/arknights/operator/', '');
    const dict = {
      "name": checkForExistence(name),
      "urlName": gamepressname,
      "rarity": rarity,
      "alter": checkForExistence(alter),
      "artist": checkForExistence(artist),
      "va": checkForExistence(jpva),
      "biography": checkForExistence(biography),
      "description": description[1],
      "quote": description[2],
      "voicelines": voiceLines,
      "lore": characterInfo,
      "affiliation": affiliations,
      "class": uniqueClasses,
      "tags": recruitment,
      "statistics": dynamics[1],
      "trait": description[0],
      "costs": dynamics[0],
      "potential": potential,
      "trust": trust,
      "talents": talent,
      "skills": skills,
      "module": module,
      "base": base,
      "headhunting": obtainable[0],
      "recruitable": obtainable[1],
      "art": imgList,
      "availability": '',
      "url": ''
    }
    const availability = $('.obtain-approach-table').text();
    if(availability.includes('N/A')){
      dict['availability'] = 'CN only';
    } else {
      dict['availability'] = 'Global';
    }
    dict['url'] = url;
    return dict;
  } catch (err: any) {
    throw new Error(err.message);
  }
}