import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetDetailsPageComponent } from './asset-details-page.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AssetDetailsPageComponent', () => {
  let component: AssetDetailsPageComponent;
  let fixture: ComponentFixture<AssetDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssetDetailsPageComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
