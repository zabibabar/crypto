import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WalletTradeFormComponent } from './components/wallet-trade-form/wallet-trade-form.component';
import { WalletAssetListComponent } from './components/wallet-asset-list/wallet-asset-list.component';
import { AssetsModule } from '../assets/assets.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  declarations: [WalletTradeFormComponent, WalletAssetListComponent],
  exports: [WalletTradeFormComponent, WalletAssetListComponent],
})
export class WalletModule {}
