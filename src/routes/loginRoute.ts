import { Router } from 'express';
import bankingController from '../banking/controller/index';

const login = Router();

login.post('/', bankingController.authenticate);

export default login;
