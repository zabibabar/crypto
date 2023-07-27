import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetPricingComponent } from './asset-pricing.component';

describe('AssetPricingComponent', () => {
  let component: AssetPricingComponent;
  let fixture: ComponentFixture<AssetPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssetPricingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
