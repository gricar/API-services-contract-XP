import Brokers from '../database/models/brokers';
import Clients from '../database/models/clients';
import BalanceClientsBroker from '../database/models/balance-clients-brokers';

export default class ClientsService {
  private model = BalanceClientsBroker;

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
