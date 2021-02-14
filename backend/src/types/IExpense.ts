import { Document } from 'mongoose';

import IUser from './IUser';

export default interface IExpenseSchema extends Document {
  _id: string;
  name: string;
  description: string;
  value: number;
  type: 'Expense' | 'Income';
  area: string;
  user: IUser;
  date?: Date;
}
