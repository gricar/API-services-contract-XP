import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import BankingService from '../service';

class BankingController {
  constructor(private bankingService = new BankingService()) {}

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const clients = await this.bankingService.getAll();

    return res.status(StatusCodes.OK).json(clients);
  };

  public getOneClient = async (req: Request, res: Response): Promise<Response> => {
    const { clientCode } = req.params;

    const client = await this.bankingService.getOne(Number(clientCode));

    return res.status(StatusCodes.OK).json(client);
  };
}

export default new BankingController();
