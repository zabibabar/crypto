import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetHistoryChartComponent } from './asset-history-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';

describe('AssetHistoryChartComponent', () => {
  let component: AssetHistoryChartComponent;
  let fixture: ComponentFixture<AssetHistoryChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxEchartsModule.forRoot({
          echarts: () => import('echarts'),
        }),
      ],
      declarations: [AssetHistoryChartComponent],
    });
    fixture = TestBed.createComponent(AssetHistoryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
