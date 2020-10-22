import { Request, Response } from 'express';
import User from '../models/User';

import * as bckrypt from 'bckrypt';

import DecodeJWTToken from '../utils/DecodeJWTToken';

export default {
  async show(request: Request, response: Response) {
    const _id = await DecodeJWTToken(request);
    const user = await User.findById(_id);

    return response.status(200).send(user);
  },

  async store(request: Request, response: Response) {
    const { name, email, password, phone } = request.body;

    const salt = await bckrypt.genSaltSync(10);
    const password_hash = await bckrypt.hashSync(password, salt);

    try {
      const createdUser = await User.create({
        name,
        email,
        password: password_hash,
        phone
      });

      return response.status(201).json(createdUser);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
};
