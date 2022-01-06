import { Component } from '@angular/core';

// charts
// import { ChartType } from 'chart.js';
// import { MultiDataSet, Label } from 'ng2-charts';

import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'anglarMaterial';

   // Doughnut
  //  public doughnutChartLabels: Label[] = [
  //   'Download Sales',
  //   'In-Store Sales',
  //   'Mail-Order Sales',
  // ];
  // public doughnutChartData: MultiDataSet = [[350, 450, 100, 50, 150, 120]];
  // public doughnutChartType: ChartType = 'doughnut';
  // public doughnutChartLabels = ['Q1 Growth', 'Q2 Growth', 'Q3 Growth', 'Q4 Growth'];
  // public doughnutChartData = [[80, 83, 94, 87]];
  // public doughnutChartType = 'doughnut';


  public barChartOptions: ChartOptions = {
    responsive: true,
 };
 public barChartLabels = ['2006', '2007', '2008', '2009', '2010', 
 '2011', '2012'];
 public barChartType: ChartType = 'bar';
 public barChartLegend = true;
 public barChartPlugins = [];
 
 public barChartData: ChartDataset[] = [
 { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
 { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
 ];

 public doughChartData: ChartDataset[] = [
 { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
 ]

}
