import { Request, Response } from 'express';
import User from '../models/User';

import jwt from 'jsonwebtoken';

import { v4 as uuidv4 } from 'uuid';

import bckrypt from 'bcryptjs';

import DecodeJWTToken from '../utils/DecodeJWTToken';

import IUser from '../types/IUser';

export default {
  async index(request: Request, response: Response) {
    const _id = await DecodeJWTToken(request);

    try {
      const user = await User.findOne({ _id });

      return response.json(user);
    } catch (err) {
      return response.status(400).json(err);
    }
  },

  async show(request: Request, response: Response) {
    const { email, password } = request.body;

    const user = ((await User.findOne({ email })) as unknown) as IUser;

    if (!user)
      return response
        .status(400)
        .json({ message: 'Something went wrong with authentication' });

    const validPassword = await bckrypt.compareSync(
      password,
      user.password_hash
    );

    if (!validPassword)
      return response
        .status(400)
        .json({ message: 'Something went wrong with authentication' });

    const token = jwt.sign(
      { _id: user._id },
      process.env.TOKEN_SECRET as string
    );

    response.status(200).json({
      user,
      token
    });
  },

  async store(request: Request, response: Response) {
    const { firstName, lastName, email, password } = request.body;

    const users = await User.find();

    users.forEach(user => {
      if (user.email === email)
        return response.status(400).json({ Error: 'Email already exists' });
    });

    const salt = await bckrypt.genSaltSync(10);
    const password_hash = await bckrypt.hashSync(password, salt);

    try {
      const createdUser = await User.create({
        _id: uuidv4(),
        firstName,
        lastName,
        email,
        password_hash,
        financeSettings: {
          defaultCurrency: 'EUR',
          areas: ['Undefined']
        },
        createdAt: new Date()
      });

      return response.status(201).json(createdUser);
    } catch (error) {
      return response.status(400).json(error);
    }
  },

  async update(request: Request, response: Response) {
    const {
      firstName,
      lastName,
      occupation,
      email,
      birth,
      phone,
      financeSettings: { defaultCurrency }
    } = request.body;

    if (email) {
      const users = await User.find();

      users.forEach(user => {
        if (user.email === email)
          return response.status(400).json({ Error: 'Email already exists' });
      });
    }

    const _id = await DecodeJWTToken(request);

    const oldUserData = await User.findOne({ _id });

    if (!oldUserData)
      return response.status(400).json({ Error: 'User not found' });

    try {
      await User.findOneAndUpdate(
        { _id },
        {
          firstName: firstName || oldUserData.firstName,
          lastName: lastName || oldUserData.lastName,
          occupation: occupation || oldUserData.occupation,
          email: email || oldUserData.email,
          birth: birth || oldUserData.birth,
          phone: phone || oldUserData.phone,
          financeSettings: {
            defaultCurrency:
              defaultCurrency || oldUserData.financeSettings.defaultCurrency
          }
        }
      );

      return response.status(204).send();
    } catch (error) {
      return response.status(400).json(error);
    }
  }
};
