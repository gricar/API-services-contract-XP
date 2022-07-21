import { Router } from 'express';
import investimentsController from '../investments/controller';

const investments = Router();

investments.get('/assets', investimentsController.getAllAssets);

export default investments;
