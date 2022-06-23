import express from 'express';
const recruitmentRouter = express.Router()
import { recruitment } from '../controllers/recruitController'

recruitmentRouter.get('/:tagone&:tagtwo?', recruitment);

export default recruitmentRouter;