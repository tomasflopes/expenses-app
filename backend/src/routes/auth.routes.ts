import { Router } from 'express';
import UserController from '../controllers/UserController';

const routes = Router();

routes.post('/login', UserController.show);
routes.post('/register', UserController.store);

export default routes;
