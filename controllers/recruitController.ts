import { Request, Response } from 'express';
import { getOrSetToCache } from '../middleware/getOrSetToCache';
import Operator from '../models/operatorModel';

export const recruitment = async (req: Request, res: Response) => {
  try {
    let tag1 = req.params.tagone;
    let tag2 = req.params.tagtwo;
    let tag3 = req.params.tagthree;
    const recruitableOperators = await getOrSetToCache(`recruitment?${tag1}${tag2}${tag3}`, async ()=> {
      if(tag1) {
        let findOperators = await Operator.find({ tags: tag1, recruitable: "Yes" });
        if(tag2) {
          findOperators = await Operator.find( { tags : { $all: [tag1, tag2] }, recruitable: 'Yes' } );
        }
        if(tag3) {
          findOperators = await Operator.find( { tags: { $all: [tag1, tag2, tag3] }, recruitable :"Yes" } );
        }
        if (findOperators[0]) {
          return findOperators
        }
      }
      res.status(404).json( { error: 'No recruitable operators with this combination.' });
      return;
    });
    if(!recruitableOperators) return;
    res.status(200).json(recruitableOperators);
  } catch (err: any) {
    res.status(500).json( { error: err.message } )
  }
}