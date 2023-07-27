import { Component, OnInit } from '@angular/core';
import { Asset } from '../../interfaces/asset';
import { AssetApiService } from '../../services/asset-api.service';
import { Observable, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AssetHistory } from '../../interfaces/asset-history';
import { WalletTradeFormComponent } from 'src/app/features/wallet/components/wallet-trade-form/wallet-trade-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss'],
})
export class AssetComponent implements OnInit {
  asset$: Observable<Asset>;
  assetHistory$: Observable<AssetHistory[]>;

  constructor(
    private route: ActivatedRoute,
    private assetApiService: AssetApiService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(map((params) => params['id']))
      .subscribe((assetId) => {
        this.asset$ = this.assetApiService.getAssetById(assetId);
        this.assetHistory$ = this.assetApiService.getAssetHistory(assetId);
      });
  }

  openTradeDialog(asset: Asset): void {
    this.dialog.open(WalletTradeFormComponent, {
      data: { asset },
    });
  }
}
