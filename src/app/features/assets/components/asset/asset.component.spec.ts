import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetComponent } from './asset.component';
import { AssetApiService } from '../../services/asset-api.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';

describe('AssetComponent', () => {
  let component: AssetComponent;
  let fixture: ComponentFixture<AssetComponent>;
  const mockAssetService = jasmine.createSpyObj('AssetApiService', [
    'getAssetById',
    'getAssetHistory',
  ]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, RouterTestingModule],
      declarations: [AssetComponent],
      providers: [{ provide: AssetApiService, useValue: mockAssetService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
