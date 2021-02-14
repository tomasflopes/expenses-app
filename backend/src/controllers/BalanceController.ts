import { Request, Response } from 'express';

import Expense from '../models/Expense';

import DecodeJWTToken from '../utils/DecodeJWTToken';

export default {
  async index(request: Request, response: Response) {
    const id = await DecodeJWTToken(request);

    const expenses = await Expense.find();

    const userExpenses = expenses.filter(expense => expense.user._id == id);

    const userBalance = userExpenses.reduce(
      (acc, expense) =>
        expense.type === 'Expense'
          ? (acc -= expense.value)
          : (acc += expense.value),
      0
    );

    return response.json(userBalance);
  }
};
