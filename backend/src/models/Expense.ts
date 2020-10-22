import mongoose from 'mongoose';
import IExpense from '../types/IExpense';

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
  createdAt: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Object,
    required: true
  }
});

export default mongoose.model<IExpense>('Expense', ExpenseSchema);
