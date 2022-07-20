import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ErrorHandler from './interfaces/IErrorHandler';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler = (err: ErrorHandler, _req: Request, res: Response, _next: NextFunction) => {
  const { isJoi, statusCode, message } = err;

  if (isJoi) {
    const status = err.details[0].type
      .includes('required') ? 'BAD_REQUEST' : 'UNPROCESSABLE_ENTITY';

    return res.status(StatusCodes[status]).json({ message: err.details[0].message });
  }

  return res
    .status(statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message } || { message: `Internal server error: ${message}` });
};

export default errorHandler;
