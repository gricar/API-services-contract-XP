import { Router } from 'express';
import clientsController from '../controller/clients.controller';

const clients = Router();

clients.get('/', clientsController.getAll);

export default clients;
