import express from 'express';
import operatorRouter from './routes/operatorRoute';
import recruitmentRouter from './routes/recruitRoute';
import searchRouter from './routes/searchRoute';
import skinRouter from './routes/skinRoute';
import { neuralConnect } from './models/connect';
import dotenv from 'dotenv';
import { RedisClient } from './models/redis';
dotenv.config();

const app = express();

start();

async function start() {
  await neuralConnect();

  app.use('/api/rhodes/operator', operatorRouter);
  app.use('/api/rhodes/search', searchRouter);
  app.use('/api/rhodes/skins', skinRouter);
  app.use('/api/rhodes/recruit', recruitmentRouter);

  app.use('*', (req, res) => {
    res.status(404).json( { error: "Resource not found"})
  })
  await RedisClient.init();
  const PORT = process.env.PORT || 5219;
  app.listen(PORT, () => console.log(`Listening on ${PORT}!`));
}