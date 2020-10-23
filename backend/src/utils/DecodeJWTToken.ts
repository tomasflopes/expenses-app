import { Request } from 'express';
import jwt from 'jsonwebtoken';

import mongoose from 'mongoose';

interface TokenInterface {
  _id: string;
}

export default async (request: Request) => {
  const authHeader = request.headers.authorization as string;

  const [, token] = authHeader.split(' ');

  const decoded = (await jwt.verify(
    token,
    process.env.TOKEN_SECRET as string
  )) as TokenInterface;

  return (decoded._id as unknown) as mongoose.Schema.Types.ObjectId;
};
