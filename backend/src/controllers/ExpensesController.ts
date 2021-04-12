import { Request, Response } from 'express';
import Expense from '../models/Expense';
import User from '../models/User';

import { v4 as uuidv4 } from 'uuid';

import DecodeJWTToken from '../utils/DecodeJWTToken';

function sanitizeDate(date: Date) {
  return date.toLocaleDateString('pt-PT');
}

export default {
  async index(request: Request, response: Response) {
    const id = await DecodeJWTToken(request);

    const { page } = request.query;

    const nOfPage = Number(page) || 0;

    const expensesPerPage = 5;

    const expenses = await Expense.find();

    const userExpenses = expenses.filter(expense => expense.user._id == id);

    const sanitizedUserExpenses = userExpenses.map(expense => {
      const sanitizedExpense = {
        //? Spread operator doesn't work in this context
        _id: expense._id,
        name: expense.name,
        description: expense.description,
        value: expense.value,
        type: expense.type,
        area: expense.area,
        user: expense.user,
        date: sanitizeDate(expense.date)
      };

      return sanitizedExpense;
    });

    const nOfDisplayedExpenses = nOfPage * expensesPerPage + expensesPerPage;

    const pageUserExpenses = sanitizedUserExpenses.slice(
      0,
      nOfDisplayedExpenses
    );

    return response.json({
      expenses: pageUserExpenses,
      totalExpenses: userExpenses.length,
      nOfDisplayedExpenses: pageUserExpenses.length
    });
  },

  async show(request: Request, response: Response) {
    const userId = await DecodeJWTToken(request);

    const { id } = request.params;

    const expense = await Expense.findById(id);

    if (!expense) {
      return response
        .status(400)
        .json({ error: 'Invalid Expense id provided' });
    }

    if (expense.user._id !== userId)
      return response
        .status(401)
        .json({ error: 'User is not authorized to view expense' });

    return response.json(expense);
  },

  async store(request: Request, response: Response) {
    const { name, area, description, type, value } = request.body;
    const id = await DecodeJWTToken(request);

    const user = await User.findById(id);

    if (!user) return response.status(400).json({ error: 'No user found' });

    if (type !== 'Expense' && type !== 'Income')
      return response.status(400).json({ error: 'Bad formatted expense' });

    try {
      const newExpense = await Expense.create({
        _id: uuidv4(),
        name,
        area,
        description,
        type,
        value,
        user,
        date: new Date()
      });

      return response.status(201).json(newExpense);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
};
