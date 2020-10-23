import { Request, Response } from 'express';

import Expense from '../models/Expense';
import IExpense from '../types/IExpense';

import DecodeJWTToken from '../utils/DecodeJWTToken';

export default {
  async index(request: Request, response: Response) {
    const id = await DecodeJWTToken(request);

    const expenses = ((await Expense.find()) as unknown) as IExpense[];

    const userExpenses = expenses.filter(expense => expense.user._id == id);

    const userBalance = userExpenses.reduce(
      (acc, expense) =>
        expense.type === 'expense'
          ? (acc -= expense.amount)
          : (acc += expense.amount),
      0
    );

    return response.json(userBalance);
  }
};
