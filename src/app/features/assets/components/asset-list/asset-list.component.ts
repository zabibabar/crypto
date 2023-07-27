import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Asset } from '../../interfaces/asset';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
  switchMap,
} from 'rxjs';
import { AssetApiService } from '../../services/asset-api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss'],
})
export class AssetListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
    'rank',
    'name',
    'symbol',
    'priceUsd',
    'details',
  ];
  dataSource$: Observable<MatTableDataSource<Asset>>;
  filter = new FormControl('', { nonNullable: true });

  constructor(private assetApiService: AssetApiService) {}

  ngAfterViewInit() {
    this.dataSource$ = this.initDataSource();
  }

  private initDataSource(): Observable<MatTableDataSource<Asset>> {
    return this.filter.valueChanges.pipe(
      startWith(''),
      map((x) => x.trim().toLowerCase()),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchTerm) => this.assetApiService.searchAssets(searchTerm)),
      map((assets) => this.setDataSourceConfig(assets))
    );
  }

  private setDataSourceConfig(assets: Asset[]): MatTableDataSource<Asset> {
    const dataSource = new MatTableDataSource<Asset>(assets);
    dataSource.paginator = this.paginator;
    dataSource.paginator.firstPage();

    return dataSource;
  }
}
