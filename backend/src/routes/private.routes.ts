import { Router } from 'express';

import ExpensesController from '../controllers/ExpensesController';
import BalanceController from '../controllers/BalanceController';
import UserController from '../controllers/UserController';
import AreaController from '../controllers/AreaController';

const routes = Router();

routes.get('/balance', BalanceController.index);

routes.get('/expenses', ExpensesController.index);
routes.get('/expenses/:id', ExpensesController.show); // Detail expense
routes.post('/expenses', ExpensesController.store);

routes.put('/user', UserController.update);

routes.get('/areas', AreaController.index);
routes.post('/areas', AreaController.store);
routes.put('/areas/:oldArea', AreaController.update);
routes.delete('/areas', AreaController.delete);

export default routes;
