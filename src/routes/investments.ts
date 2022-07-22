import { Router } from 'express';
import stocksController from '../investments/controller/stocks.controller';
import clientsController from '../investments/controller/clients.controller';

const investments = Router();

investments.get('/assets', stocksController.getAllAssets);
investments.get('/assets/:ticker', stocksController.getByTicker);
investments.post('/buy', stocksController.buy);
investments.get('/assets/client/:clientCode', clientsController.getByClientCode);

export default investments;
