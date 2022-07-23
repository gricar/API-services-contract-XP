import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const tokenNotFound = { error: { statusCode: 401, message: 'Token not found' } };
const tokenInvalid = { error: { statusCode: 401, message: 'Expired or invalid token' } };

const JWT_SECRET = String(process.env.JWT_SECRET);

const authenticateToken = (req: Request, _res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return next(tokenNotFound.error);
  }

  try {
    jwt.verify(token, JWT_SECRET);

    return next();
  } catch (err) {
    return next(tokenInvalid.error);
  }
};

export default authenticateToken;
