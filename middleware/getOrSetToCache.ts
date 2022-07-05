import { RedisClient } from "../models/redis"
import { operatorInterface } from "../models/operatorModel";

export async function getOrSetToCache(key: string, callback: Function): Promise<operatorInterface | Array<operatorInterface> | undefined> {
  await RedisClient.init();
  const data = await RedisClient.client.get(key);
  console.log(data);
  if(data) {
    await RedisClient.kill();
    return JSON.parse(data);
  }
  const queryResult: operatorInterface | Array<operatorInterface> | undefined = await callback();
  if(queryResult === undefined) {
    await RedisClient.kill();
    return;
  } else {
    RedisClient.client.setEx(key, RedisClient.expirationDefault, JSON.stringify(queryResult));
    await RedisClient.kill();
    return queryResult;
  }
}