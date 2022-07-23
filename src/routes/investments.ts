import { Router } from 'express';
import stocksController from '../investments/controller/stocks.controller';
import clientsController from '../investments/controller/clients.controller';
import authenticateToken from '../middlewares/authenticateToken';

const investments = Router();

investments.use(authenticateToken);
investments.get('/assets', stocksController.getAllAssets);
investments.get('/assets/:ticker', stocksController.getByTicker);
investments.post('/buy', stocksController.buy);
investments.post('/sell', stocksController.sell);
investments.get('/assets/client/:clientCode', clientsController.getByClientCode);

export default investments;
