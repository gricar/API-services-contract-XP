import Brokers from '../database/models/brokers';
import Clients from '../database/models/clients';
import ClientsBroker from '../database/models/clients-brokers';

export default class ClientsService {
  private model = ClientsBroker;

  public async getAll() {
    const allClients = await this.model.findAll({
      attributes: ['client_code', 'balance'],
      include: [
        { model: Brokers, as: 'broker', attributes: ['name'] },
        { model: Clients, as: 'client', attributes: ['name'] },
      ],
    });

    return allClients;
  }
}
