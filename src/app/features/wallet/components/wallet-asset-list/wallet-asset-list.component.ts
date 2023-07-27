import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  merge,
  of,
  startWith,
  switchMap,
} from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { Asset } from 'src/app/features/assets/interfaces/asset';
import { AssetApiService } from 'src/app/features/assets/services/asset-api.service';
import { WalletService } from '../../services/wallet.service';
import { WalletTradeFormComponent } from '../wallet-trade-form/wallet-trade-form.component';
import { MatDialog } from '@angular/material/dialog';
import { OwnedAsset } from 'src/app/features/assets/interfaces/asset-owned';

@Component({
  selector: 'app-wallet-asset-list',
  templateUrl: './wallet-asset-list.component.html',
  styleUrls: ['./wallet-asset-list.component.scss'],
})
export class WalletAssetListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['name', 'symbol', 'priceUsd', 'owned', 'trade'];
  dataSource$: Observable<MatTableDataSource<OwnedAsset>>;
  filter = new FormControl('', { nonNullable: true });
  totalOwned$: Observable<number>;

  constructor(
    private assetApiService: AssetApiService,
    private walletService: WalletService,
    private dialog: MatDialog
  ) {}

  ngAfterViewInit() {
    this.dataSource$ = this.initDataSource();
    this.totalOwned$ = this.getTotalCost();
  }

  private initDataSource(): Observable<MatTableDataSource<OwnedAsset>> {
    const searchTerm$: Observable<string> = this.filter.valueChanges.pipe(
      startWith(''),
      map((x) => x.trim().toLowerCase())
    );

    const filterBySearchTerm$ = searchTerm$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter((searchTerm) => searchTerm.length > 0),
      switchMap((searchTerm) =>
        this.getAssetsFromWallet().pipe(
          map((assets) =>
            assets.filter((asset) =>
              asset.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
          )
        )
      ),
      map((assets) => this.setDataSourceConfig(assets))
    );

    const unchangedAssets$ = searchTerm$.pipe(
      filter((searchTerm) => searchTerm.length === 0),
      switchMap(() => this.getAssetsFromWallet()),
      map((assets) => this.setDataSourceConfig(assets))
    );

    return merge(filterBySearchTerm$, unchangedAssets$);
  }

  private getAssetsFromWallet(): Observable<OwnedAsset[]> {
    const wallet = this.walletService.getWallet();
    const assets = Array.from(wallet.keys());

    if (assets.length === 0) return of([]);

    return this.assetApiService.getAssetsById(assets.join(',')).pipe(
      map((assets) =>
        assets.map((asset) => ({
          ...asset,
          owned: wallet.get(asset.id) ?? 0,
        }))
      )
    );
  }

  private setDataSourceConfig(
    assets: OwnedAsset[]
  ): MatTableDataSource<OwnedAsset> {
    const dataSource = new MatTableDataSource<OwnedAsset>(assets);
    dataSource.paginator = this.paginator;
    dataSource.paginator.firstPage();

    return dataSource;
  }

  getTotalCost(): Observable<number> {
    return this.dataSource$.pipe(
      map((dataSource) =>
        dataSource.data.reduce(
          (acc, curr) => curr.owned * Number(curr.priceUsd) + acc,
          0
        )
      )
    );
  }

  openTradeDialog(asset: Asset): void {
    const tradeDialog = this.dialog.open(WalletTradeFormComponent, {
      data: { asset },
    });

    tradeDialog
      .afterClosed()
      .pipe(filter((isTraded) => isTraded))
      .subscribe(() => {
        this.dataSource$ = this.initDataSource();
        this.totalOwned$ = this.getTotalCost();
      });
  }
}
