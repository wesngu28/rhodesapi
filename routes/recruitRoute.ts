import express from 'express';
const recruitmentRouter = express.Router()
import { recruitment } from '../controllers/recruitController'

recruitmentRouter.get('/:tagone/:tagtwo?/:tagthree?', recruitment);

export default recruitmentRouter;