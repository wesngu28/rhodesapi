import { getArt, getSkins, getE2 } from '../controllers/skinController';
import { FastifyInstance } from 'fastify/types/instance';

export function skinRouter (fastify: FastifyInstance, options: any, done: any) {
  fastify.get('/skins/e2/:name', getE2)
  fastify.get('/skins/:name', getSkins)
  fastify.get('/art/:name', getArt)
  done()
}