import express from 'express';
const skinRouter = express.Router()
const { getSkins, getE2 } = require('../controllers/skinController')

skinRouter.get('/e2/:name', getE2);
skinRouter.get('/:name', getSkins);

export default skinRouter;