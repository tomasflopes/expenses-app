import { Request, Response } from 'express';
import Expense from '../models/Expense';
import User from '../models/User';
import IExpense from '../types/IExpense';

import DecodeJWTToken from '../utils/DecodeJWTToken';

export default {
  async index(request: Request, response: Response) {
    const id = await DecodeJWTToken(request);

    const expenses = ((await Expense.find()) as unknown) as IExpense[];

    const userExpenses = expenses.map(expense => expense.user._id);

    return response.json(userExpenses);
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const expenses = await Expense.findById(id);

    return response.json(expenses);
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
