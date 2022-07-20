import { Router } from 'express';
import bankingRoute from './banking';

const routes = Router();

routes.use('/banking/conta', bankingRoute);

routes.get('/', (_req, res) => res.send('Hello world'));
routes.all('*', (req, _res, next) => next({ message: `Route '${req.path}' doesn't exist!` }));

export default routes;
