import express from 'express';
const searchRouter = express.Router()
import { searchOperators } from '../controllers/searchController';

searchRouter.get('', searchOperators);

export default searchRouter;