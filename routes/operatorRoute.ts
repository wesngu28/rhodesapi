import express from 'express';
const operatorRouter = express.Router()
import { getAllOperators, getOperator, createOperator, updateOperator } from '../controllers/operatorController';

operatorRouter.get('/', getAllOperators);
operatorRouter.get('/:name', getOperator);
operatorRouter.post('/:name', createOperator);
operatorRouter.put('/:name', updateOperator);

export default operatorRouter;