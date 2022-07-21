export interface IAssets {
  availableQty: number,
  broker?: {
    name: string;
  };
  stock?: {
    ticker: string;
    actualPrice: string;
  };
}
