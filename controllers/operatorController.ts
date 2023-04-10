import Operator from '../models/operatorModel';
import { getOrSetToCache } from '../middleware/getOrSetToCache';
import { FastifyRequest, FastifyReply } from 'fastify'
import { excludeKeys } from '../middleware/excludeKeys';

export const getAllOperators = async (req: FastifyRequest<{Querystring: {"exclude": string}}>, res: FastifyReply) => {
  try {
    const { exclude } = req.query
    const operators = await getOrSetToCache(`operator${exclude}`, async ()=> {
      const allOperators = await Operator.find({}, excludeKeys(exclude));
      return allOperators;
    });
    res.status(200).send(operators);
  } catch (err: any) {
    res.status(500).send( { error: err.message } )
  }
}

export const getOperator = async (req: FastifyRequest<{Params: {name: string}, Querystring: {"exclude": string}}>, res: FastifyReply) => {
  try {
    const name = req.params.name;
    const { exclude } = req.query
    const operator = await getOrSetToCache(`operator?name=${name},exclude=${exclude}`, async ()=> {
      let nameQuery = name.replaceAll('-', ' ');
      nameQuery = name.replaceAll('_', ' ');
      const findOperator = await Operator.findOne(
        {
          $or: [{ name: nameQuery }, { _id: name }],
        },
        excludeKeys(exclude)
      );
      if(findOperator) {
        return findOperator;
      } else {
        res.status(404).send( { error: 'Operator not found'});
        return;
      }
    });
    if(!operator) return;
    res.status(200).send(operator);
  } catch (err: any) {
    res.status(500).send( { error: err.message } );
  }
}