import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletAssetListComponent } from './wallet-asset-list.component';
import { AssetApiService } from 'src/app/features/assets/services/asset-api.service';
import { MatDialogModule } from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { OwnedAsset } from 'src/app/features/assets/interfaces/asset-owned';
import { mockAssets } from 'src/app/features/assets/testing/assets-mock';
import { MatTableDataSource } from '@angular/material/table';
import { of } from 'rxjs';

describe('WalletAssetListComponent', () => {
  let component: WalletAssetListComponent;
  let fixture: ComponentFixture<WalletAssetListComponent>;
  const mockAssetService = jasmine.createSpyObj('AssetApiService', [
    'getAssetsById',
  ]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [WalletAssetListComponent],
      providers: [{ provide: AssetApiService, useValue: mockAssetService }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletAssetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate the correct total cost', () => {
    const ownedAssets: OwnedAsset[] = mockAssets.map((asset) => ({
      ...asset,
      owned: 6,
    }));
    const mockDataSource = new MatTableDataSource<OwnedAsset>(ownedAssets);

    component.dataSource$ = of(mockDataSource);

    component.getTotalCost().subscribe((cost) => {
      expect(cost).toEqual(60);
    });
  });
});
