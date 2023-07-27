import { Injectable } from '@angular/core';
import { Wallet } from '../types/wallet';

const WALLET_STORAGE_KEY = 'wallet';

@Injectable({
  providedIn: 'root',
})
export class WalletService {
  constructor() {}

  getWallet(): Wallet {
    return new Map(
      Object.entries(
        JSON.parse(localStorage.getItem(WALLET_STORAGE_KEY) ?? '{}')
      )
    );
  }

  updateWallet(assetId: string, amount: number): void {
    if (amount === 0) return;

    const wallet = this.getWallet();
    if (!wallet.has(assetId) && amount < 0) return;
    if (
      wallet.has(assetId) &&
      amount < 0 &&
      (wallet.get(assetId) ?? 0) < -amount
    )
      return;

    wallet.set(assetId, (wallet.get(assetId) ?? 0) + amount);

    if (wallet.get(assetId) === 0) wallet.delete(assetId);

    localStorage.setItem(
      WALLET_STORAGE_KEY,
      JSON.stringify(Object.fromEntries(wallet.entries()))
    );
  }

  getAssetAmount(assetId: string): number {
    const wallet = this.getWallet();
    return wallet.get(assetId) ?? 0;
  }
}
