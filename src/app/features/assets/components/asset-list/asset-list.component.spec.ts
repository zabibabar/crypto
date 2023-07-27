import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetListComponent } from './asset-list.component';
import { AssetApiService } from '../../services/asset-api.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AssetListComponent', () => {
  let component: AssetListComponent;
  let fixture: ComponentFixture<AssetListComponent>;
  const mockAssetService = jasmine.createSpyObj('AssetApiService', [
    'searchAssets',
  ]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssetListComponent],
      providers: [{ provide: AssetApiService, useValue: mockAssetService }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
