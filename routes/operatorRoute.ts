import { getAllOperators, getOperator } from '../controllers/operatorController';
import { FastifyInstance } from 'fastify/types/instance';

export function operatorRouter (fastify: FastifyInstance, options: any, done: any) {
  fastify.get('/operator', getAllOperators)
  fastify.get('/operator/:name', getOperator)
  done()
}