import { Document } from 'mongoose';

import IUser from './IUser';

export default interface IExpenseSchema extends Document {
  _id: string;
  name: string;
  description: string;
  value: number;
  type: 'expense' | 'income';
  area: string;
  user: IUser;
  date: Date;
}
