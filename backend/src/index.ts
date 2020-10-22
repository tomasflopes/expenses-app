import express from 'express';
import mongoose from 'mongoose';

import cors from 'cors';

mongoose.connect(process.env.DB_CONNECT as string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);
