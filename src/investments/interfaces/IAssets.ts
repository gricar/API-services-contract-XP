export interface IBroker {
  id?: number;
  name: string;
  available_stocks_by_brokers: {
    availableQty: number;
  }
}

export interface IAssets {
  id: number;
  ticker: string;
  actualPrice: number;
  brokers: IBroker[];
}
