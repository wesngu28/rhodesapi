import Operator from '../models/operatorModel';
import { requester } from '../util/getOperators';
import { getStaticInformation } from '../util/getStaticInformation';
import { getOrSetToCache } from '../middleware/getOrSetToCache';
import { FastifyRequest, FastifyReply } from 'fastify'
import { RedisClient } from "../models/redis"
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

export const createOperator = async (req: FastifyRequest<{Params: {name: string}}>, res: FastifyReply) => {
  try {
    const name = req.params.name;
    const findOperator = await Operator.findOne({
      name: name
    });
    if (findOperator) {
      res.status(400).send( { error: 'Operator already exists!' } );
    }
    const operatorList = await requester();
    const formatName = name.charAt(0).toUpperCase() + name.slice(1);
    if(operatorList.includes(formatName)) {
      const createOperator = await getStaticInformation('https://gamepress.gg/arknights/operator/' + name);
      await Operator.create(createOperator);
      res.status(200).send(createOperator);
    } else {
      res.status(404).send( { error: 'Operator is not yet understood by gamepress!' } );
    }
  } catch (err: any) {
    res.status(500).send( {error: err.message } );
  }
}

export const updateOperator = async (req: FastifyRequest<{Params: {name: string}}>, res: FastifyReply) => {
  try {
    const name = req.params.name;
    const findOperator = await Operator.findOne({
      name: name
    });
    if (findOperator && findOperator.checkDate()) {
      const updateInfo = await getStaticInformation('https://gamepress.gg/arknights/operator/' + name);
      const updateOperator = await Operator.replaceOne({
        name: updateInfo.name
      }, updateInfo);
      res.status(200).send(updateOperator);
      await RedisClient.del(`operator?name=${name}`)
    } else {
      res.status(405).send({
        error: 'Operator date not old enough to be updated yet.'
      });
    }
  } catch (err: any) {
    res.status(500).send({
      error: err.message
    });
  }
}