import { getSkins, getE2 } from '../controllers/skinController';
import { FastifyInstance } from 'fastify/types/instance';

export function skinRouter (fastify: FastifyInstance, options: any, done: any) {
  fastify.get('/skins/e2/:name', getSkins)
  fastify.get('/skins/:name', getE2)
  done()
}