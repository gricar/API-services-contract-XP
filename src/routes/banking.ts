import { Router } from 'express';
import bankingController from '../banking/controller';

const banking = Router();

banking.get('/', bankingController.getAll);

export default banking;
