import { Request, Response } from 'express';
import Expense from '../models/Expense';

export default {
  async index(request: Request, response: Response) {
    const expenses = await Expense.find();

    return response.json(expenses);
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const expenses = await Expense.findById(id);

    return response.json(expenses);
  },

  async store(request: Request, response: Response) {
    const { name, description, type, amount } = request.body;

    try {
      const newExpense = await Expense.create({
        name,
        description,
        type,
        amount
      });

      return response.status(201).json(newExpense);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
};
