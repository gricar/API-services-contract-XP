export interface IAssets {
  ticker: string;
  actualPrice: number;
  brokers?: {
    name: string;
    availableQty: number,
  };
}
