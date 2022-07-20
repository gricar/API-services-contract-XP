import { Router } from 'express';
import bankingController from '../banking/controller';
import validateDeposit from '../middlewares/validateClient';

const banking = Router();

banking.get('/', bankingController.getAll);
banking.get('/:clientCode', bankingController.getOneClient);
banking.post('/deposito', validateDeposit, bankingController.depositMoney);

export default banking;
