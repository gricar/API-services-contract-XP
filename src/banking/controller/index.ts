import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import BankingService from '../service';

class BankingController {
  constructor(private bankingService = new BankingService()) {}

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const clientes = await this.bankingService.getAll();

    return res.status(StatusCodes.OK).json({ clientes });
  };
}

export default new BankingController();
