import { FastifyReply, FastifyRequest } from "fastify";
import { requester } from "../util/getOperators";
import Operator, { operatorInterface } from "../models/operatorModel";
import { getStaticInformation } from "../util/getStaticInformation";
import { RedisClient } from "../models/redis";

export const authTest = async (req: FastifyRequest, res: FastifyReply) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).send({ message: 'Unauthorized' });
    return;
  }
  const token = authHeader.substring(7);
  try {
    let count = [0, 0]
    if (token === process.env.ADMIN_TOKEN) {
      const operatorList = await requester();
      for (let i = 0; i < 1; i++) {
        const findOperator = await Operator.findOne({
          _id: operatorList[i],
        });
        if (findOperator) {
        const updateInfo: operatorInterface = await getStaticInformation(`https://gamepress.gg/arknights/operator/${operatorList[i]}`, findOperator.art);
          const changedFields: {[key: string]: string} = {};
          Object.keys(updateInfo).forEach((key, i) => {
            if (JSON.stringify(findOperator.get(key)) !== JSON.stringify(Object.values(updateInfo)[i])) {
              changedFields[key] = Object.values(updateInfo)[i];
            }
          });
          if (Object.keys(changedFields).length > 0) {
            await Operator.findOneAndUpdate(
              { name: updateInfo.name },
              { $set: changedFields },
              { new: true }
            );
            await RedisClient.del(`operator?name=${updateInfo.name}`)
            count[0]++
          }
        } else {
          const createdOperator: operatorInterface = await getStaticInformation(`https://gamepress.gg/arknights/operator/${operatorList[i]}`);
          await Operator.create(createdOperator);
          count[1]++
        }
      }
    }
    res.status(200).send({ updated: count[0], created: count[1] });
    return
  } catch (error) {
    res.status(401).send({ message: 'Unauthorized' });
    return;
  }
}