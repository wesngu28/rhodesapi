import { getOrSetToCache } from '../middleware/getOrSetToCache';
import Operator from '../models/operatorModel';
import { FastifyRequest, FastifyReply } from 'fastify';

export const getE2 = async (req: FastifyRequest<{Params: {name: string}}>, res: FastifyReply) => {
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
        res.status(400).send( { error: 'Operator does not have an e2.' } );
        return;
      }
      res.status(404).send( { error: 'Specified operator does not exist.' } );
      return;
    });
    if(!e2Skin) return;
    res.status(200).send(e2Skin);
  } catch (err: any) {
    res.status(500).send( { error: err.message } );
  }
}

export const getSkins = async (req: FastifyRequest<{Params: {name: string}}>, res: FastifyReply) => {
  try {
    let name = req.params.name;
    const matchSkins = await getOrSetToCache(`skins?name=${name}`, async ()=> {
      const findOperator = await Operator.findOne({ name: name }, { art : 1 });
      if (findOperator) {
        const skins: {[key: string] : string} = findOperator['art'];
        delete skins['Base'];
        delete skins['E2'];
        if(Object.keys(skins).length === 0) {
          res.status(400).send( {error: 'Operator does not have any skins' });
          return;
        } else {
          return skins;
        }
      }
      res.status(404).send( { error: 'Specified operator does not exist.' } );
      return;
    });
    if(!matchSkins) return;
    res.status(200).send(matchSkins);
  } catch (err: any) {
    res.status(500).send( { error: err.message } );
  }
}