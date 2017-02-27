import { Component, ElementRef, ViewChild, OnInit, Inject, AfterViewInit, OnDestroy, Input } from '@angular/core';

const Highcharts = require('highcharts/highcharts.src');
import 'highcharts/adapters/standalone-framework.src';

@Component({
  selector: 'lib-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, AfterViewInit, OnDestroy  {

  @ViewChild('chart') public chartEl: ElementRef;

  @Input() options: any;

  private _chart: any;

  constructor( ) {

  }

  ngOnInit() {
  }

  public ngAfterViewInit() {

    let opts: any = this.options;

    if (this.chartEl && this.chartEl.nativeElement) {

      opts.chart.renderTo = this.chartEl.nativeElement;

      opts.series[0].point = {
        events: {
          click: function () {
            console.log('clicked', this.name);
          }
        }
      };

      this._chart = new Highcharts.Chart(opts);
    }
  }
  public ngOnDestroy() {
    this._chart.destroy();
  }

}
