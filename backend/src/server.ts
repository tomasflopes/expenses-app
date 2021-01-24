import express from 'express';

import cors from 'cors';

import morgan from 'morgan';

import errorHandler from './errors/handler';

import authRoutes from './routes/auth.routes';
import privateRoutes from './routes/private.routes';

import authMiddleware from './middleware/authMiddleware';

const app = express();

app.use(cors());
app.use(express.json());

app.use(morgan('dev'));

app.use('/api/user', authRoutes);

app.use(privateRoutes);

app.use(errorHandler);

export default app;
