import { Request, Response } from 'express';
import Operator from '../models/operatorModel';
const scraper = require("../scraper/scraper");
const BASE_URL = 'https://gamepress.gg/arknights/operator/';

//Fetch all operators
export const getAllOperators = async (res: Response) => {
  try {
    const findOperator = await Operator.find();
    res.status(200).json(findOperator);
  } catch (err: any) {
    res.status(500).json( { error: err.message } )
  }
}

export const getOperator = async (req: Request, res: Response) => {
  try {
    let name = req.params.name;
    name = name.replaceAll('-', ' ');
    name = name.replaceAll('_', ' ');
    const findOperator = await Operator.findOne({
      name: name
    });
    if (!findOperator) {
      res.status(404);
      throw new Error('Operator not found!');
    }
    console.log(findOperator.checkDate());
    if (await findOperator.checkDate()) {
      res.status(200).json({ message: 'Operator was found, but the information could be out of date! Please '});
    }
    if (findOperator && await findOperator.checkDate() === false) {
      res.status(200).json(findOperator);
    }
  } catch (err: any) {
    res.status(500).json( { error: err.message } );
  }
}

export const createOperator = async (req: Request, res: Response) => {
  try {
    let name = req.params.name;
    const findOperator = await Operator.findOne({
      name: name
    });
    if (findOperator) {
      res.status(400).json( { error: 'Operator already exists!' } );
    }
    const createOperator = await scraper.getStaticInformation(BASE_URL + name);
    await Operator.create(createOperator);
    res.status(200).json(createOperator);
  } catch (err: any) {
    res.status(500).json( {error: err.message } );
  }
}

export const updateOperator = async (req: Request, res: Response) => {
  try {
    let name = req.params.name;
    const findOperator = await Operator.findOne({
      name: name
    });
    if (findOperator && findOperator.checkDate()) {
      const updateInfo = await scraper.getStaticInformation(BASE_URL + name);
      const updateOperator = await Operator.replaceOne({
        name: updateInfo.name
      }, {
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
        "headhunting": updateInfo.headhunting,
        "recruitable": updateInfo.recruitable,
        "art": updateInfo.art,
        "availability": updateInfo.availability,
        "url": updateInfo.url
      });
      res.status(200).json(updateOperator);
    } else {
      res.status(405).json({
        error: 'Operator not old enough to be updated yet.'
      });
    }
  } catch (err: any) {
    res.status(500).json({
      error: err.message
    });
  }
}