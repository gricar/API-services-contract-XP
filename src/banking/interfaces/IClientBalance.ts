export interface IBroker {
  id?: number;
  name: string;
  clientsBalanceByBrokers: {
    balance: number;
  }
}

export interface IClientBalance {
  code: number;
  name: string;
  brokers: IBroker[];
}
