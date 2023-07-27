import { TestBed } from '@angular/core/testing';
import { HttpParams } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { API_HOST, AssetApiService, PAGE_SIZE } from './asset-api.service';
import { mockAssets } from '../testing/assets-mock';

describe('AssetApiService', () => {
  let service: AssetApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });

    service = TestBed.inject(AssetApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get assets', () => {
    const pageNumber = 2;

    service.getAssets(pageNumber).subscribe((assets) => {
      expect(assets.length).toEqual(2);
      expect(assets).toEqual(mockAssets);
    });

    const req = httpTestingController.expectOne(
      `${API_HOST}/assets?limit=${PAGE_SIZE}&offset=${
        (pageNumber - 1) * PAGE_SIZE
      }`
    );
    expect(req.request.method).toBe('GET');
    expect(req.request.url).toBe(`${API_HOST}/assets`);
    expect(req.request.params).toEqual(
      new HttpParams({
        fromString: `limit=${PAGE_SIZE}&offset=${(pageNumber - 1) * PAGE_SIZE}`,
      })
    );
    req.flush({ data: mockAssets });
  });

  it('should search assets', () => {
    const searchTerm = 'CRC';

    service.searchAssets(searchTerm).subscribe((assets) => {
      expect(assets.length).toEqual(2);
      expect(assets).toEqual(mockAssets);
    });

    const req = httpTestingController.expectOne(
      `${API_HOST}/assets?search=${searchTerm}`
    );
    expect(req.request.method).toBe('GET');
    expect(req.request.url).toBe(`${API_HOST}/assets`);
    expect(req.request.params).toEqual(
      new HttpParams({ fromString: `search=${searchTerm}` })
    );
    req.flush({ data: mockAssets });
  });

  it('should get assets by id', () => {
    const assetIds = '0,1';

    service.getAssetsById(assetIds).subscribe((assets) => {
      expect(assets).toEqual(mockAssets);
    });

    const req = httpTestingController.expectOne(
      `${API_HOST}/assets?ids=${assetIds}`
    );
    expect(req.request.method).toBe('GET');
    expect(req.request.url).toBe(`${API_HOST}/assets`);
    expect(req.request.params).toEqual(
      new HttpParams({ fromString: `ids=${assetIds}` })
    );
    req.flush({ data: mockAssets });
  });

  it('should get asset by id', () => {
    const assetId = '1';

    service.getAssetById(assetId).subscribe((asset) => {
      expect(asset).toEqual(mockAssets[1]);
    });

    const req = httpTestingController.expectOne(
      `${API_HOST}/assets/${assetId}`
    );
    expect(req.request.method).toBe('GET');
    expect(req.request.url).toBe(`${API_HOST}/assets/${assetId}`);
    req.flush({ data: mockAssets[1] });
  });
});
