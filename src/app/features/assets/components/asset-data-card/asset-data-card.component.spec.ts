import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetDataCardComponent } from './asset-data-card.component';

describe('AssetDataCardComponent', () => {
  let component: AssetDataCardComponent;
  let fixture: ComponentFixture<AssetDataCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetDataCardComponent]
    });
    fixture = TestBed.createComponent(AssetDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
