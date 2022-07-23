import { Router } from 'express';
import bankingController from '../banking/controller/index';
import validateLogin from '../middlewares/validateLogin';

const login = Router();

login.post('/', validateLogin, bankingController.authenticate);

export default login;
