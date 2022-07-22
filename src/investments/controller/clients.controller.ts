import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ClientsService from '../service/clients.service';

class ClientsController {
  constructor(private clientsService = new ClientsService()) {}

  public getByClientCode = async (req: Request, res: Response): Promise<Response> => {
    const { clientCode } = req.params;

    const assetsByClient = await this.clientsService.getByClientCode(Number(clientCode));

    if (!assetsByClient) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: "Client doesn't exist" });
    }

    return res.status(StatusCodes.OK).json(assetsByClient);
  };
}

export default new ClientsController();
