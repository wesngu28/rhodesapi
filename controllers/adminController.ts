import { FastifyReply, FastifyRequest } from "fastify";
import { requester } from "../util/getOperators";
import Operator, { operatorInterface } from "../models/operatorModel";
import { getStaticInformation } from "../util/getStaticInformation";
import { RedisClient } from "../models/redis";

export const adminCron = async (req: FastifyRequest, res: FastifyReply) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).send({ message: 'Unauthorized' });
  }
  try {
    let count = [0, 0]
    if (authHeader.substring(7) === process.env.ADMIN_TOKEN) {
      const operatorList = await requester();
      for (let i = 0; i < operatorList.length; i++) {
        const findOperator = await Operator.findOne({_id: operatorList[i],});
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
    } else {
      return res.status(401).send({ message: 'Unauthorized' });
    }
    return res.status(200).send({ updated: count[0], created: count[1] });
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: "Something went wrong" });
    return;
  }
}