import app from './server';
import mongoose from 'mongoose';

import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.DB_CONNECT as string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

app.listen(process.env.PORT || 3333, () => {
  console.log(`App listening on port :${process.env.PORT || 3333}`);
});
