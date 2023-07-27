import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { WalletTradeFormData } from '../../interfaces/wallet-trade-form-data';
import { FormControl, Validators } from '@angular/forms';
import { WalletService } from '../../services/wallet.service';

type TradeType = 'buy' | 'sell';

@Component({
  selector: 'app-wallet-trade-form',
  templateUrl: './wallet-trade-form.component.html',
  styleUrls: ['./wallet-trade-form.component.scss'],
})
export class WalletTradeFormComponent implements OnInit {
  tradeTypeControl = new FormControl<TradeType>('buy', { nonNullable: true });
  tradeAmount = new FormControl(0, {
    nonNullable: true,
    validators: Validators.required,
  });

  constructor(
    private walletService: WalletService,
    private dialogRef: MatDialogRef<WalletTradeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: WalletTradeFormData
  ) {}

  get currentAssetAmount(): number {
    return this.walletService.getAssetAmount(this.data.asset.id);
  }

  ngOnInit(): void {
    this.tradeTypeControl.valueChanges.subscribe((tradeType) => {
      this.tradeAmount.reset();
      this.tradeAmount.addValidators(
        Validators.max(
          tradeType === 'buy'
            ? Number(this.data.asset.supply) - this.currentAssetAmount
            : this.currentAssetAmount
        )
      );
    });
  }

  tradeAsset(): void {
    this.walletService.updateWallet(
      this.data.asset.id,
      this.tradeTypeControl.value === 'buy'
        ? this.tradeAmount.value
        : -this.tradeAmount.value
    );
    this.dialogRef.close(true);
  }
}
