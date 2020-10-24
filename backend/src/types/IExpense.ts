import mongoose, { Document } from 'mongoose';

import IUserInterface from './IUser';

export interface IExpenseSchema extends Document {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  description: string;
  type: 'expense' | 'income';
  amount: number;
  createdAt: Date;
  user: IUserInterface;
}

export default interface IExpense {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  description: string;
  type: 'expense' | 'income';
  amount: number;
  createdAt: Date;
  user: IUserInterface;
}
