import fs from 'fs';
import mongoose from 'mongoose';
import Operator, { operatorInterface } from './models/operatorModel';
import dotenv from 'dotenv';
dotenv.config();
import { getStaticInformation } from './scraper/getStaticInformation';

const BASE_URL = 'https://gamepress.gg/arknights/operator/';

mongoose.connect(process.env.MONGODB_URI!, (err: any)=> {
  if (err) throw err;
})

//requester();
scavenger();
weird();

async function scavenger() {
  console.log('Starting to scrape:');
  let operators = fs.readFileSync('operators.json','utf8')
  operators = JSON.parse(operators);
  for(let i = 0; i < operators.length; i++) {
    console.log(`Currently scraping information for ${operators[i]}. ${i+1}/${operators.length}`)
    const findOperator = await Operator.findOne({
      _id: operators[i]
    });
    if (findOperator && findOperator.checkDate() === false) {
      console.log(`${operators[i]} already in database`)
    } else if (findOperator && findOperator.checkDate()){
      const findOperator = await Operator.findOne({
        _id: operators[i]
      });
      if (findOperator && findOperator.checkDate()) {
        const updateInfo = await getStaticInformation(BASE_URL + operators[i]);
        const updateOperator: operatorInterface = await Operator.replaceOne({
          name: updateInfo.name
        }, {
          "_id": updateInfo._id,
          "name": updateInfo.name,
          "rarity": updateInfo.rarity,
          "alter": updateInfo.alter,
          "artist": updateInfo.artist,
          "va": updateInfo.va,
          "biography": updateInfo.biography,
          "description": updateInfo.description,
          "quote": updateInfo.quote,
          "voicelines": updateInfo.voicelines,
          "lore": updateInfo.lore,
          "affiliation": updateInfo.affiliation,
          "class": updateInfo.class,
          "tags": updateInfo.tags,
          "statistics": updateInfo.statistics,
          "trait": updateInfo.trait,
          "costs": updateInfo.costs,
          "potential": updateInfo.potential,
          "trust": updateInfo.trust,
          "talents": updateInfo.talents,
          "skills": updateInfo.skills,
          "module": updateInfo.module,
          "base": updateInfo.base,
          "headhunting": updateInfo.headhunting,
          "recruitable": updateInfo.recruitable,
          "art": updateInfo.art,
          "availability": updateInfo.availability,
          "url": updateInfo.url
        });
      }
    } else {
      const createdOperator = await getStaticInformation(BASE_URL + operators[i]);
      await Operator.create(createdOperator);
      console.log(`${operators[i]} recruited`)
    }
  }
}
async function weird() {
  const findOperator = await Operator.find({
    artist: 'Wé[email protected]'
  });
  for(let i = 0; i < findOperator.length; i++) {
    findOperator[i].artist = 'Wéi@W';
    await findOperator[i].save();
  }
}