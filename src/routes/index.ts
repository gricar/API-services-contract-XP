import { Router } from 'express';
import bankingRoute from './banking';
import investmentsRoute from './investments';
import loginRoute from './loginRoute';

const routes = Router();

routes.use('/banking/conta', bankingRoute);
routes.use('/investments', investmentsRoute);
routes.use('/login', loginRoute);

routes.all('*', (req, _res, next) => next({ message: `Route '${req.path}' doesn't exist!` }));

export default routes;
