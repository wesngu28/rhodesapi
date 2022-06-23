import { Request, Response } from 'express';
import Operator from '../models/operatorModel';

const getE2 = async (req: Request, res: Response) => {
  try {
    let name = req.params.name;
    const findOperator = await Operator.findOne({ name: name }, { art : 1 });
    if (findOperator) {
      if (findOperator.art[1].name === 'E2') {
        res.status(200).json( { e2: 'https://gamepress.gg' + findOperator.art[1].image } );
        return
      } else {
        res.status(400).json( { error: 'Operator does not have an e2.' } );
      }
    }
  } catch (err) {
    res.status(400);
    res.type('text').send('An error occurred on the server. Try again later.');
  }
}

type art = {
  image: string;
  name: string;
}

const getSkins = async (req: Request, res: Response) => {
  try {
    let name = req.params.name;
    const findOperator = await Operator.findOne({ name: name }, { art : 1 });
    if (findOperator) {
      const skins: art[] = [];
      findOperator['art'].forEach(element => {
        if(element.name !== 'E1' && element.name !== 'E2') {
          skins.push(element);
        }
      });
      if(skins.length === 0) {
        res.status(400).json( {error: 'Operator does not have any skins' });
      } else {
        res.status(200).json(skins);
      }
    }
  } catch (err: any) {
    res.status(500).json( { error: err.message } );
  }
}
module.exports = { getSkins, getE2 };