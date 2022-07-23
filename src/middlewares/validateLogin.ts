import { NextFunction, Request, Response } from 'express';
import loginInfo from './schemas/userLogin';

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { error } = loginInfo.validate(req.body);

  if (error) return next(error);

  return next();
};

export default validateLogin;
