import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AssetHistory } from '../../interfaces/asset-history';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-asset-history-chart',
  templateUrl: './asset-history-chart.component.html',
  styleUrls: ['./asset-history-chart.component.scss'],
  providers: [DatePipe],
})
export class AssetHistoryChartComponent implements OnInit {
  @Input() assetHistory: AssetHistory[] = [];
  chartOption: EChartsOption = {};

  ngOnInit(): void {
    this.chartOption = {
      xAxis: {
        type: 'time',
      },
      yAxis: {
        axisLabel: { formatter: '${value}' },
        type: 'value',
      },
      tooltip: {
        trigger: 'axis',
        formatter: function (params: any) {
          params = params[0];
          var date = new Date(params.value[0]);
          return (
            date.getDate() +
            '/' +
            (date.getMonth() + 1) +
            '/' +
            date.getFullYear() +
            ' : ' +
            `$${Number(params.value[1]).toFixed(2)}`
          );
        },
        axisPointer: {
          animation: false,
        },
      },
      series: [
        {
          data: this.assetHistory.map(({ priceUsd, time }) => [time, priceUsd]),
          type: 'line',
        },
      ],
      legend: { show: true },
    };
  }
}
