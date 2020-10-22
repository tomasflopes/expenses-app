import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const authMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authHeader = request.headers.authorization;

  if (!authHeader)
    return response.status(401).json({ message: 'Token not Provided' });

  const [, token] = authHeader.split(' ');

  try {
    await jwt.verify(token, process.env.TOKEN_SECRET as string);
    return next();
  } catch (error) {
    return response.status(400).json({ message: 'Token Invalid' });
  }
};

export default authMiddleware;
