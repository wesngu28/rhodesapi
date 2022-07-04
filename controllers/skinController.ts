import { Request, Response } from 'express';
import { getOrSetToCache } from '../middleware/getOrSetToCache';
import Operator from '../models/operatorModel';

export const getE2 = async (req: Request, res: Response) => {
  try {
    let name = req.params.name;
    const e2Skin = await getOrSetToCache(`e2?name=${name}`, async ()=> {
      const findOperator = await Operator.findOne({ name: name }, { art : 1 });
      if (findOperator) {
        if (findOperator.art.E2) {
          const e2Obj = {
            e2: findOperator.art.E2
          }
          return e2Obj;
        }
        res.status(400).json( { error: 'Operator does not have an e2.' } );
        return;
      }
      res.status(404).json( { error: 'Specified operator does not exist.' } );
      return;
    });
    if(!e2Skin) return;
    res.status(200).json(e2Skin);
  } catch (err: any) {
    res.status(500).json( { error: err.message } );
  }
}

export const getSkins = async (req: Request, res: Response) => {
  try {
    let name = req.params.name;
    const matchSkins = await getOrSetToCache(`skins?name=${name}`, async ()=> {
      const findOperator = await Operator.findOne({ name: name }, { art : 1 });
      if (findOperator) {
        const skins: {[key: string] : string} = findOperator['art'];
        delete skins['Base'];
        delete skins['E2'];
        if(Object.keys(skins).length === 0) {
          res.status(400).json( {error: 'Operator does not have any skins' });
          return;
        } else {
          return skins;
        }
      }
      res.status(404).json( { error: 'Specified operator does not exist.' } );
      return;
    });
    console.log(matchSkins);
    if(!matchSkins) return;
    res.status(200).json(matchSkins);
  } catch (err: any) {
    res.status(500).json( { error: err.message } );
  }
}