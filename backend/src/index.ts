import express from 'express';
import mongoose from 'mongoose';

import authRoutes from './routes/auth.routes';
import privateRoutes from './routes/private.routes';

import authMiddleware from './middlewares/verifyJWTToken';

require('dotenv').config();

import cors from 'cors';

mongoose.connect(process.env.DB_CONNECT as string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const app = express();

app.use(privateRoutes);

app.use(cors());
app.use(express.json());

app.use('/api/user', authRoutes);

app.use(authMiddleware);

app.listen(process.env.PORT || 3333);
