import { RedisClientType } from "@redis/client";
import { createClient } from "redis";

class Redis {
  public client: RedisClientType;
  public expirationDefault: number;

  constructor() {
    console.log(`${process.env.REDIS_URL} is being loaded in here??`);
    if(process.env.REDIS_URL) {
      this.client = createClient({
        url: process.env.REDIS_URL,
        socket: {
          tls: true,
          rejectUnauthorized: false
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