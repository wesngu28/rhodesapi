import { getArt } from '../controllers/skinController';
import { FastifyInstance } from 'fastify/types/instance';

export function skinRouter (fastify: FastifyInstance, options: any, done: any) {
  fastify.get('/art/:name', getArt)
  done()
}