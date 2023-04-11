import { FastifyReply, FastifyRequest } from 'fastify';
import { getOrSetToCache } from '../middleware/getOrSetToCache';
import Operator from '../models/operatorModel';
import { excludeKeys } from '../middleware/excludeKeys';

interface Params {
  tag1: string;
  tag2: string;
  tag3: string;
  exclude: string;
}

export const recruitment = async (req: FastifyRequest<{Querystring: Params}>, reply: FastifyReply) => {
  try {
    let { tag1, tag2, tag3, exclude } = req.query;
    const recruitableOperators = await getOrSetToCache(`recruitment?${tag1}${tag2}${tag3}${exclude ? exclude : ""}`, async ()=> {
      if(tag1) {
        let findOperators = await Operator.find({ tags: tag1, recruitable: "Yes" }, excludeKeys(exclude));
        if(tag2) {
          findOperators = await Operator.find( { tags : { $all: [tag1, tag2] }, recruitable: 'Yes' }, excludeKeys(exclude) );
        }
        if(tag3) {
          findOperators = await Operator.find( { tags: { $all: [tag1, tag2, tag3] }, recruitable :"Yes" }, excludeKeys(exclude) );
        }
        if (findOperators[0]) {
          return findOperators
        }
      }
      reply.status(404).send( { error: 'No recruitable operators with this combination.' });
      return;
    });
    if(!recruitableOperators) return;
    reply.status(200).send(recruitableOperators);
  } catch (err: any) {
    reply.status(500).send( { error: err.message } )
  }
}