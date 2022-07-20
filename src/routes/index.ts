import { Router } from 'express';
import bankingRoute from './banking';

const routes = Router();

routes.use('/banking/conta', bankingRoute);

routes.get('/', (_req, res) => res.send('Hello world'));

export default routes;
