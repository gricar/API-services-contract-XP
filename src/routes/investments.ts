import { Router } from 'express';
import stocksController from '../investments/controller/stocks.controller';

const investments = Router();

investments.get('/assets', stocksController.getAllAssets);
investments.get('/assets/:ticker', stocksController.getByTicker);

export default investments;
