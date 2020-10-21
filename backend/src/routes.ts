import { Router } from 'express';

import ExpensesController from './controllers/Expenses';
import BalanceController from './controllers/Balance';

const routes = Router();

routes.get('/balance', BalanceController.index);

routes.get('/expenses', ExpensesController.index);
routes.get('/expenses/:id', ExpensesController.show); // Detail expense
routes.post('/expenses', ExpensesController.store);

export default routes;
