import { FastifyInstance } from 'fastify/types/instance';
import { adminCron } from '../controllers/adminController';

export function adminRouter (fastify: FastifyInstance, options: any, done: any) {
  fastify.get('/admin', adminCron)
  done()
}