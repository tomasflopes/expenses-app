import { Request, Response } from 'express';
import Expense from '../models/Expense';
import User from '../models/User';
import IExpense from '../types/IExpense';

import DecodeJWTToken from '../utils/DecodeJWTToken';

export default {
  async index(request: Request, response: Response) {
    const id = await DecodeJWTToken(request);

    const expenses = ((await Expense.find()) as unknown) as IExpense[];

    const userExpenses = expenses.filter(expense => expense.user._id == id);

    return response.json(userExpenses);
  },

  async show(request: Request, response: Response) {
    const userId = await DecodeJWTToken(request);

    const { id } = request.params;

    const expense = await Expense.findById(id);

    if (expense?.user._id != userId)
      return response
        .status(401)
        .json({ error: 'User is not authorized to view expense' });

    return response.json(expense);
  },

  async store(request: Request, response: Response) {
    const { name, description, type, amount } = request.body;
    const id = await DecodeJWTToken(request);

    const user = await User.findById(id);

    try {
      const newExpense = await Expense.create({
        name,
        description,
        type,
        amount,
        user
      });

      return response.status(201).json(newExpense);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
};
