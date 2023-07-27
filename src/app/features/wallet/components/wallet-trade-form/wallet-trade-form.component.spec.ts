import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletTradeFormComponent } from './wallet-trade-form.component';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { mockAssets } from 'src/app/features/assets/testing/assets-mock';

describe('WalletTradeFormComponent', () => {
  let component: WalletTradeFormComponent;
  let fixture: ComponentFixture<WalletTradeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [WalletTradeFormComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: { asset: mockAssets[0] } },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(WalletTradeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
