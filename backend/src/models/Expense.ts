import mongoose from 'mongoose';

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
  }
});

export default mongoose.model('Expense', ExpenseSchema);
