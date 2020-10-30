import { Document } from 'mongoose';

import IUser from './IUser';

export default interface IExpenseSchema extends Document {
  _id: string;
  name: string;
  description: string;
  type: 'expense' | 'income';
  amount: number;
  user: IUser;
}
