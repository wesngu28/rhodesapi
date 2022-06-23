import { Request, Response } from 'express';
import Operator from '../models/operatorModel';

export const recruitment = async (req: Request, res: Response) => {
  try {
    let tag1 = req.params.tagone;
    let tag2 = req.params.tagtwo;
    if(tag1) {
      let findOperators = await Operator.find({ tags: tag1, recruitable: "Yes" });
      if(tag2) {
        findOperators = await Operator.find( { tags: { $all: [tag1, tag2] }, recruitable :"Yes" } );
      }
      if (findOperators) {
        res.status(200).json(findOperators);
      }
    }
  } catch (err: any) {
    res.status(400).json( { error: err.message } )
  }
}