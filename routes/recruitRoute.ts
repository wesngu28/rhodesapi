import { recruitment } from '../controllers/recruitController';
import { FastifyInstance } from 'fastify/types/instance';

export function recruitRouter (fastify: FastifyInstance, options: any, done: any) {
  fastify.get('/recruit', recruitment)
  done()
}