import { Request, Response } from 'express';
import ClientsService from '../service/clients.service';

class ClientsController {
  constructor(private clientsService = new ClientsService()) {}

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const clientes = await this.clientsService.getAll();

    return res.status(200).json({ clientes });
  };
}

export default new ClientsController();
