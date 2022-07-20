import { NextFunction, Request, Response } from 'express';
import clientDeposit from './schemas/client';

const validateDeposit = (req: Request, res: Response, next: NextFunction) => {
  const { error } = clientDeposit.validate(req.body);

  if (error) return next(error);

  return next();
};

export default validateDeposit;
