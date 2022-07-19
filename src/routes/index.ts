import { Router } from 'express';
import clientsRoute from './clients';

const routes = Router();

routes.use('/clients', clientsRoute);

routes.get('/', (_req, res) => res.send('Hello world'));

export default routes;
