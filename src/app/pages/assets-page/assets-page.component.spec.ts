import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsPageComponent } from './assets-page.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AssetsPageComponent', () => {
  let component: AssetsPageComponent;
  let fixture: ComponentFixture<AssetsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssetsPageComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
