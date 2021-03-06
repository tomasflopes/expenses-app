import { Router } from 'express';

import authMiddleware from '../middleware/authMiddleware';

import ExpensesController from '../controllers/ExpensesController';
import BalanceController from '../controllers/BalanceController';
import UserController from '../controllers/UserController';
import AreaController from '../controllers/AreaController';

const routes = Router();

routes.get('/balance', authMiddleware, BalanceController.index);

routes.get('/expenses', authMiddleware, ExpensesController.index);
routes.get('/expenses/:id', authMiddleware, ExpensesController.show); // Detail expense
routes.post('/expenses', authMiddleware, ExpensesController.store);

routes.get('/user', authMiddleware, UserController.index);
routes.put('/user', authMiddleware, UserController.update);

routes.get('/areas', authMiddleware, AreaController.index);
routes.post('/areas', authMiddleware, AreaController.store);
routes.put('/areas/:oldAreaIndex', authMiddleware, AreaController.update);
routes.delete('/areas/:index', authMiddleware, AreaController.delete);

export default routes;
