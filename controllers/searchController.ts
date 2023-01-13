import { FastifyRequest, FastifyReply } from 'fastify';
import { getOrSetToCache } from '../middleware/getOrSetToCache';
import Operator from '../models/operatorModel';

export const searchOperators = async (req: FastifyRequest<{Querystring: {[key: string]: any}}>, reply: FastifyReply) => {
    let queries = Object.assign({}, req.query)
    const objectLevel = ['gender', 'birth', 'race', 'building'];
    if(Object.keys((queries)).length === 0) {
      reply.status(400).send('No parameters specified!');
      return;
    }
    Object.keys(queries).forEach(key => {
      let formatKey = key;
      if(objectLevel.includes(formatKey)) {
        formatKey = formatKey.charAt(0).toUpperCase() + formatKey.slice(1);
      } else {
        formatKey = key.charAt(0).toLowerCase() + key.slice(1);
      }
      if(formatKey === key) {
        let keyValue = queries[key];
        if(typeof keyValue === 'string') {
          let keyValueStr = keyValue as string;
          queries[key] = keyValueStr!.charAt(0).toUpperCase() + keyValueStr.slice(1);
        }
        if(formatKey === 'alter') {
          queries[key] = { $ne : 'Not provided' }
        }
        if(formatKey === 'module') {
          queries['module.name'] = queries[formatKey];
          delete queries[formatKey];
          queries['module.name'] = { $ne : 'Not provided' }
        }
        if(formatKey === 'va' || formatKey === 'artist') {
          let keyValueStr = queries[formatKey] as string;
          queries[formatKey] = keyValueStr.replace('-', ' ');
        }
      } else {
        queries[formatKey] = queries[key];
        delete queries[key];
        if(formatKey === 'Building') {
          let keyValue = queries[formatKey];
          if(typeof keyValue === 'string') {
            let keyValueStr = keyValue as string;
            queries[formatKey] = keyValueStr.replace('-', ' ');
            queries[formatKey] = (queries[formatKey] as string).split(" ");
            (queries[formatKey] as string[])!.forEach((word: string, index: number) => {
              (queries[formatKey] as string[])[index] = word;
            })
            queries[formatKey] = (queries[formatKey] as string[]).join(' ');
            queries['base.building'] = queries[formatKey];
            delete queries[formatKey];
          }
        }
        if(formatKey === 'Gender' || formatKey === 'Race' || formatKey === 'Birth') {
          if(formatKey === 'Birth') {
            formatKey = 'Place of Birth';
            queries[`lore.${formatKey}`] = queries['Birth'];
          } else {
            queries[`lore.${formatKey}`] = queries[formatKey];
          }
          delete queries[formatKey];
        }
      }
      const validRarities: { [key: string]: string } = {
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six"
      }
      if(Object.keys(validRarities).includes(queries[formatKey] as string) || Object.values(validRarities).includes(queries[formatKey] as string)) {
        if(Object.values(validRarities).includes(queries[formatKey] as string)) {
          queries[formatKey] = Object.keys(validRarities).find(key => validRarities[key] === queries[formatKey]);
        }
      }
    });
    let build: string = '';
    Object.keys(queries).forEach((key, idx) => {
      const valueArr = Object.values(queries)
      const value: string = (valueArr[idx] as string)
      build = build + `${key}=${value!.toLowerCase()}`
    });
    const matchOperators = await getOrSetToCache(`search?queries=${build}`, async ()=> {
      const findOperator = await Operator.find(
        queries
      );
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