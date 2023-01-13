import { operatorRouter } from './routes/operatorRoute';
import { recruitRouter } from './routes/recruitRoute';
import { searchRouter } from './routes/searchRoute';
import { skinRouter } from './routes/skinRoute';
import { defaultRouter } from './routes/defaultRoute';
import { neuralConnect } from './models/connect';
import dotenv from 'dotenv';
dotenv.config();

import fastify from 'fastify';

import cors from '@fastify/cors'

const app = fastify()

app.register(defaultRouter)
app.register(operatorRouter, { prefix: '/api' })
app.register(recruitRouter, { prefix: '/api' })
app.register(searchRouter, { prefix: '/api' })
app.register(skinRouter, { prefix: '/api' })

const start = async () => {
  try {
    await neuralConnect();
    await app.register(cors)
    const PORT = process.env.PORT || 5219;
    await app.listen({ port: Number(PORT) })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()