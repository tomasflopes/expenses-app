import mongoose from 'mongoose';
import IExpense from '../types/IExpense';
import IUser from '../types/IUser';

const ExpenseSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
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
    enum: ['Expense', 'Income'],
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  area: {
    type: String,
    default: 'undefined'
  },
  date: {
    type: Date,
    default: Date.now()
  },
  user: {
    type: (Object as unknown) as IUser,
    required: true
  }
});

export default mongoose.model<IExpense>('Expense', ExpenseSchema);
