import { RedisClient } from "../models/redis"
import { operatorInterface } from "../models/operatorModel";

export async function getOrSetToCache(key: string, callback: Function): Promise<operatorInterface | Array<operatorInterface> | undefined> {
  const data = await RedisClient.get(key);
  if(data) return JSON.parse(data);
  const queryResult: operatorInterface | Array<operatorInterface> | undefined = await callback();
  if(queryResult === undefined) {
    return;
  } else {
    RedisClient.set(key, JSON.stringify(queryResult));
    RedisClient.expire(key, 86400);
    return queryResult;
  }
}