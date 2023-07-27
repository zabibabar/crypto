import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AssetListComponent } from './components/asset-list/asset-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssetComponent } from './components/asset/asset.component';
import { AssetDataCardComponent } from './components/asset-data-card/asset-data-card.component';
import { AssetPricingComponent } from './components/asset-pricing/asset-pricing.component';
import { AssetHistoryChartComponent } from './components/asset-history-chart/asset-history-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { WalletModule } from '../wallet/wallet.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    WalletModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
  declarations: [
    AssetListComponent,
    AssetComponent,
    AssetDataCardComponent,
    AssetPricingComponent,
    AssetHistoryChartComponent,
  ],
  exports: [AssetListComponent, AssetComponent],
})
export class AssetsModule {}
