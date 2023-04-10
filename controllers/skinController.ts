import { getOrSetToCache } from '../middleware/getOrSetToCache';
import Operator from '../models/operatorModel';
import { FastifyRequest, FastifyReply } from 'fastify';

export const getArt = async (req: FastifyRequest<{Params: {name: string}, Querystring: {e2: boolean}}>, res: FastifyReply) => {
  try {
    let { name } = req.params;
    let { e2 } = req.query
    const art = await getOrSetToCache(`e2?name=${name}`, async ()=> {
      const findOperator = await Operator.findOne({ name: name }, { art : 1 });
      if (findOperator) {
        const skins = findOperator['art'];
        return e2 ? skins["E2"] : skins;
      }
      res.status(404).send( { error: 'Specified operator does not exist.' } );
      return;
    });
    if(!art) return;
    res.status(200).send(art);
  } catch (err: any) {
    res.status(500).send( { error: err.message } );
  }
}