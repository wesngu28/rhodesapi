import { RedisClientType } from "@redis/client";
import { createClient } from "redis";

class Redis {
  public client: RedisClientType;
  public expirationDefault: number;

  constructor() {
    if(process.env.RUN = 'heroku') {
      this.client = createClient({
        url: 'redis://:pb64397616d39c5bed12a4c5734145d384d4f902fc5ecb12378e85c118a834852@ec2-44-206-18-234.compute-1.amazonaws.com:26159'
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