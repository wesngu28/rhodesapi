import { FastifyInstance } from 'fastify/types/instance';
import { authTest } from '../controllers/adminController';

export function adminRouter (fastify: FastifyInstance, options: any, done: any) {
  fastify.get('/admin', authTest)
  done()
}