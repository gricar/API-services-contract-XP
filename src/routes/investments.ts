import { Router } from 'express';
import investimentsController from '../investments/controller';

const investments = Router();

investments.get('/assets', investimentsController.getAll);

export default investments;
