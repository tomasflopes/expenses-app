import mongoose from 'mongoose';
import { IExpenseSchema } from '../types/IExpense';
import IUser from '../types/IUser';

const ExpenseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  type: {
    type: String,
    enum: ['expense', 'income'],
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  area: {
    type: String,
    default: 'undefined'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  user: {
    type: (Object as unknown) as IUser,
    required: true
  }
});

export default mongoose.model<IExpenseSchema>('Expense', ExpenseSchema);
