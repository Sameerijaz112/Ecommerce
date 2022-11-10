import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, ChartConfiguration, ChartData, ChartEvent, ChartType  } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 public barChartOption: ChartConfiguration['options']={
responsive:true,
maintainAspectRatio:false,
scales:{
   x:{},
   y:{
     min:0,
     ticks:{
      stepSize:5
     }
   }

},

plugins:{
  legend:{
    display: true,
  }
},
 };

public barChartType : ChartType = 'bar';
public barChartData : ChartData<'bar'> = {
labels:['Topic1','Topic2', 'Topic3', 'Topic4'],
datasets:[
  {
    data:[100,50,150,200],
    label: 'Total Question',
    backgroundColor: 'rgb(0,119,255,0.5)',
    borderColor: 'rgb(0, 199, 255)',
    borderWidth:3,
    hoverBackgroundColor: 'rgb(0, 119, 255)',
    hoverBorderColor:'rgb(0,119,255,0.5)',
    barThickness:80,
  },
  {
    data:[50,100,200,150],
    label: 'Correct Question',
    backgroundColor: 'rgb(44,135,84,0.5)',
    borderColor: 'rgb(44,135,84)',
    borderWidth:3,
    hoverBackgroundColor: 'rgb(122, 184, 255)',
    hoverBorderColor:'rgb(122,184,255,0.5)',
    barThickness:80,
  }
]
};

  constructor() { }

  ngOnInit(): void {
  }

}
