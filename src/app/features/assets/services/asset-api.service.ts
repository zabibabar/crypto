import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Asset } from '../interfaces/asset';
import { AssetHistory } from '../interfaces/asset-history';

export const API_HOST = 'https://api.coincap.io/v2';
export const PAGE_SIZE = 100;

@Injectable({
  providedIn: 'root',
})
export class AssetApiService {
  constructor(private httpClient: HttpClient) {}

  getAssets(page = 1): Observable<Asset[]> {
    const params = new HttpParams({
      fromObject: { limit: PAGE_SIZE, offset: (page - 1) * PAGE_SIZE },
    });
    return this.httpClient
      .get<{ data: Asset[] }>(`${API_HOST}/assets`, { params })
      .pipe(map(({ data }) => data));
  }

  searchAssets(searchTerm: string): Observable<Asset[]> {
    const params = new HttpParams({ fromObject: { search: searchTerm } });
    return this.httpClient
      .get<{ data: Asset[] }>(`${API_HOST}/assets`, { params })
      .pipe(map(({ data }) => data));
  }

  getAssetsById(assetIds: string): Observable<Asset[]> {
    const params = new HttpParams({ fromObject: { ids: assetIds } });
    return this.httpClient
      .get<{ data: Asset[] }>(`${API_HOST}/assets`, { params })
      .pipe(map(({ data }) => data));
  }

  getAssetById(assetId: string): Observable<Asset> {
    return this.httpClient
      .get<{ data: Asset }>(`${API_HOST}/assets/${assetId}`)
      .pipe(map(({ data }) => data));
  }

  getAssetHistory(assetId: string): Observable<AssetHistory[]> {
    const params = new HttpParams({ fromObject: { interval: 'd1' } });
    return this.httpClient
      .get<{ data: AssetHistory[] }>(`${API_HOST}/assets/${assetId}/history`, {
        params,
      })
      .pipe(map(({ data }) => data));
  }
}
