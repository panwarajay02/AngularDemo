import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    {data: [6.5, 5.9, 8.0, 8.1, 5.6, 5.5, 4.0], label: 'Rating'},
    {data: [2.8, 4.8, 4.0, 1.9, 8.6, 2.7, 9.0], label: 'Rank'},
    {data: [5.0, 6.0, 6.0, 5.0, 5.6, 4.5, 6.0], label: 'Overall performance'}
  ];

  public doughnutChartLabels: string[] = ['Rating', 'Ranks', 'Interest', 'Activities'];
  public doughnutChartData: number[] = [20, 35, 10, 25];
  public doughnutChartType = 'doughnut';

  public pieChartLabels: string[] = ['Offline', 'Online', 'Online active'];
  public pieChartData: number[] = [30, 50, 10];
  public pieChartType = 'pie';

  chartHovered(evt){
    
  }
  chartClicked(evt){
    
  }
}
