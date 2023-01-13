import { FastifyInstance } from 'fastify/types/instance';

export function defaultRouter (fastify: FastifyInstance, options: any, done: any) {
  fastify.get('/', async (req, reply) => reply.redirect('https://rhodesapi.vercel.app'))
  done()
}