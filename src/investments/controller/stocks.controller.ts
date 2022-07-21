import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import StocksService from '../service/stocks.service';

class StocksController {
  constructor(private stocksService = new StocksService()) {}

  public getAllAssets = async (_req: Request, res: Response): Promise<Response> => {
    const assets = await this.stocksService.getAllAssets();

    return res.status(StatusCodes.OK).json(assets);
  };

  public getByTicker = async (req: Request, res: Response): Promise<Response> => {
    const { ticker } = req.params;

    const asset = await this.stocksService.getByTicker(ticker);

    if (!asset) return res.status(StatusCodes.NOT_FOUND).json({ message: "Ticker doesn't exist" });

    return res.status(StatusCodes.OK).json(asset);
  };
}

export default new StocksController();
