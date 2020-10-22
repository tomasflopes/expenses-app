import { Request } from 'express';
import jwt from 'jsonwebtoken';

interface TokenInterface {
  _id: string;
}

export default async (request: Request) => {
  const authHeader = request.headers.authorization as any;

  const [, token] = authHeader.split(' ');

  const decoded = (await jwt.verify(
    token,
    process.env.TOKEN_SECRET as string
  )) as TokenInterface;

  return decoded._id;
};
