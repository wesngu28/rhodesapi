import { RedisClientType } from "@redis/client";
import { createClient } from "redis";

class Redis {
  public client: RedisClientType;
  public expirationDefault: number;

  constructor() {
    if(process.env.REDIS_HOST) {
      this.client = createClient({
        password: process.env.REDIS_PASSWORD,
        socket: {
          host: process.env.REDIS_HOST,
          port: Number(process.env.REDIS_PORT)
        }
        });
    } else {
      this.client = createClient({
        url: 'redis://redis:6379'
        });
    }
    this.expirationDefault = 86400000;
  }

  async init() {
    await this.client.connect();
  }

  async kill() {
    await this.client.quit();
  }

}

export const RedisClient = new Redis();