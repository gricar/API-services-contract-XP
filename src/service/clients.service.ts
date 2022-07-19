import Clients from '../database/models/clients.model';

export default class ClientsService {
  private model = Clients;

  public async getAll() {
    const allClients = await this.model.findAll();

    return allClients;
  }
}
