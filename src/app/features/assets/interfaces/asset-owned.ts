import { Asset } from './asset';

export interface OwnedAsset extends Asset {
  owned: number;
}
