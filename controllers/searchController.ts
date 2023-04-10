import { FastifyRequest, FastifyReply } from 'fastify';
import { getOrSetToCache } from '../middleware/getOrSetToCache';
import Operator from '../models/operatorModel';
import { excludeKeys } from '../middleware/excludeKeys';

export const searchOperators = async (req: FastifyRequest<{Querystring: {[key: string]: string; exclude: string;}}>, reply: FastifyReply) => {
    const { exclude } = req.query
    const lore = [
      "gender",
      "place_of_birth",
      "race",
      "physical_strength",
      "combat_skill",
      "mobility",
      "physiological_endurance",
      "tactical_planning",
      "combat_skill",
      "originium_adaptability"
    ]
    const arrays = ["affiliation", "class", "tags"]
    const match = ["headhunting", "recruitable", "rarity", "artist", "va"]

    const queries = Object.keys(req.query).reduce((acc, key, i) => {
      if (lore.includes(key)) {
        return { ...acc, [`lore.${key}`]: Object.values(req.query)[i] };
      }
      if (key === "alter") {
        return { ...acc, alter: { $ne: "Not provided" } };
      }
      if (key === "module") {
        return { ...acc, module: { $exists: true, $elemMatch: { $ne: {} } } };
      }
      if (key === "building") {
        return { ...acc, "base.building": Object.values(req.query)[i] };
      }
      if (arrays.includes(key) || match.includes(key)) {
        return { ...acc, [key]: Object.values(req.query)[i] };
      }
      return acc;
    }, {});

    const matchOperators = await getOrSetToCache(`search?queries=${JSON.stringify(queries)}${exclude}`, async ()=> {
      const findOperator = await Operator.find(queries, excludeKeys(exclude));
      if(findOperator.length === await Operator.countDocuments({}).exec()){
        reply.status(400).send( { error: 'Invalid parameter specified!' } );
        return;
      }
      if (findOperator[0] === undefined ) {
        reply.status(404).send( { error: 'No operators found for this query!' } );
      }
      if (findOperator[0]) return findOperator;
      return;
    });
    if(!matchOperators) return;
    reply.status(200).send(matchOperators);
}