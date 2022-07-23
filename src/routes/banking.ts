import { Router } from 'express';
import bankingController from '../banking/controller';
import authenticateToken from '../middlewares/authenticateToken';
import validateDeposit from '../middlewares/validateClient';

const banking = Router();

banking.use(authenticateToken);
banking.get('/', bankingController.getAll);
banking.get('/:clientCode', bankingController.getOneClient);
banking.use(validateDeposit);
banking.post('/deposito', bankingController.moneyTransaction);
banking.post('/saque', bankingController.moneyTransaction);

export default banking;
