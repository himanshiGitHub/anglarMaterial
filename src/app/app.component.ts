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

  // PeriodicElement {
  //   name: string;
  //   position: number;
  //   weight: number;
  //   symbol: string;
  // }

  public tableData: Array<Object> = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

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

 public lineChartLabels = ['2006', '2007', '2008', '2009', '2010', 
 '2011', '2012', '2006', '2007', '2008', '2009', '2010', 
 '2011', '2012', '2006', '2007', '2008', '2009', '2010', 
 '2011', '2012'];

 public lineChartData: ChartDataset[] = [ 
  { data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 28, 48, 40, 19, 86, 27, 90], label: 'Series A' },
  { data: [28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19, 86, 27, 90, 65, 59, 80, 81, 56, 55, 40], label: 'Series B' }
 ]



 

}
