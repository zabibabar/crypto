import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletPageComponent } from './wallet-page.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('WalletPageComponent', () => {
  let component: WalletPageComponent;
  let fixture: ComponentFixture<WalletPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WalletPageComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(WalletPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
