import { Router } from 'express';

import ExpensesController from '../controllers/ExpensesController';
import BalanceController from '../controllers/BalanceController';
import UserController from '../controllers/UserController';

const routes = Router();

routes.get('/balance', BalanceController.index);

routes.get('/expenses', ExpensesController.index);
routes.get('/expenses/:id', ExpensesController.show); // Detail expense
routes.post('/expenses', ExpensesController.store);

routes.put('/user', UserController.update);

export default routes;
