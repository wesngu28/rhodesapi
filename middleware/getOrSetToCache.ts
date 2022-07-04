import { RedisClient } from "../models/redis"
import { operatorInterface } from "../models/operatorModel";

export async function getOrSetToCache(key: string, callback: Function): Promise<operatorInterface | Array<operatorInterface>> {
  await RedisClient.init();
  const data = await RedisClient.client.get(key);
  if(data) {
    await RedisClient.kill();
    return JSON.parse(data);
  }
  const queryResult = await callback();
  RedisClient.client.setEx(key, RedisClient.expirationDefault, JSON.stringify(queryResult));
  await RedisClient.kill();
  return queryResult;
}