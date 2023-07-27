import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletPageRoutingModule } from './wallet-page-routing.module';
import { WalletPageComponent } from './wallet-page.component';
import { WalletModule } from 'src/app/features/wallet/wallet.module';

@NgModule({
  declarations: [WalletPageComponent],
  imports: [CommonModule, WalletPageRoutingModule, WalletModule],
})
export class WalletPageModule {}
