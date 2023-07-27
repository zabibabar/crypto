import { Asset } from '../interfaces/asset';

export const mockAssets: Asset[] = Array.from({ length: 2 }, (_, index) => ({
  id: `${index}`,
  rank: `${index}`,
  symbol: 'CRC',
  name: 'CryptoCoin',
  priceUsd: '5.0',
  changePercent24Hr: '5.0',
  marketCapUsd: '5.0',
  volumeUsd24Hr: '5.0',
  supply: '5.0',
  vwap24Hr: '5.0',
}));
