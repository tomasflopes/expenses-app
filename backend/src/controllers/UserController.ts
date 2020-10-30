import { Request, Response } from 'express';
import User from '../models/User';

import jwt from 'jsonwebtoken';

import { v4 as uuidv4 } from 'uuid';

const bckrypt = require('bckryptjs');

import IUser from '../types/IUser';

export default {
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
    const { name, email, password, phone, birth } = request.body;

    const salt = await bckrypt.genSaltSync(10);
    const password_hash = await bckrypt.hashSync(password, salt);

    try {
      const createdUser = await User.create({
        _id: uuidv4(),
        name,
        email,
        password_hash,
        phone,
        birth
      });

      return response.status(201).json(createdUser);
    } catch (error) {
      return response.status(400).json(error);
    }
  },

  async update(request: Request, response: Response) {}
};
