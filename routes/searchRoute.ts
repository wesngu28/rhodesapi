import { searchOperators } from '../controllers/searchController';
import { FastifyInstance } from 'fastify/types/instance';

export function searchRouter (fastify: FastifyInstance, options: any, done: any) {
  fastify.get('/search', searchOperators)
  done()
}