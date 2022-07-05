import { RedisClientType } from "@redis/client";
import { createClient } from "redis";

class Redis {
  public client: RedisClientType;
  public expirationDefault: number;

  constructor() {
    // this.client = createClient({
    //   url: 'redis://redis:6379'
    //   });
    this.client = createClient({});
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