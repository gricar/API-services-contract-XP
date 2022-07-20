import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import InvestmentsService from '../service';

class InvestmentsController {
  constructor(private investmentsService = new InvestmentsService()) {}

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const assets = await this.investmentsService.getAll();

    return res.status(StatusCodes.OK).json(assets);
  };
}

export default new InvestmentsController();
