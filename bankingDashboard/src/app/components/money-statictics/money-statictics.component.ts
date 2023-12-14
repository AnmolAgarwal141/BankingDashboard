import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import Chart from 'chart.js/auto';
import { cardIcons } from 'src/app/models/cardIcons';

@Component({
  selector: 'app-money-statictics',
  templateUrl: './money-statictics.component.html',
  styleUrls: ['./money-statictics.component.scss']
})
export class MoneyStaticticsComponent {
  chart: any = [];
  filterCard:cardIcons=new cardIcons('assets/images/down-arrow-icon.svg','','Monthly','');
  statisticsData:any;
  constructor(private apiService:ApiService){}

  ngOnInit(): void {
      this.apiService.getStatisticsData().subscribe(response=>{
        console.log(response);
        this.statisticsData=response;
      })
      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
          datasets: [
            {
              label: 'Income',
              data: [40, 35, 45, 45, 30, 35, 50, 42, 38, 32, 45, 40],
              borderWidth: 1,
              borderRadius: 8,
              backgroundColor: [
                "#90a8a9","#90a8a9","#90a8a9","#90a8a9","#90a8a9","#90a8a9","#90a8a9","#90a8a9","#90a8a9","#90a8a9","#90a8a9","#90a8a9"
              ]
            },
            {
              label: 'Investment',
              data: [12, 8, 10, 15, 5, 5, 15, 5, 12, 5, 10, 18],
              borderWidth: 1,
              borderRadius: 8,
              backgroundColor:['#8384a8','#8384a8','#8384a8','#8384a8','#8384a8','#8384a8','#8384a8','#8384a8','#8384a8','#8384a8','#8384a8','#8384a8']
            },
            {
              label: 'Expense',
              data: [28, 27, 35, 30, 25, 30, 5, 26, 27, 35,22],
              borderWidth: 1,
              borderRadius: 8,
              backgroundColor:['#555d8d','#555d8d','#555d8d','#555d8d','#555d8d','#555d8d','#555d8d','#555d8d','#555d8d','#555d8d','#555d8d','#555d8d']
            },
          ],
        },
        options: {
          plugins:{
            legend: {
              display: true,
              position: 'bottom',
              labels:{
                usePointStyle: true,
                boxWidth: 10,
                boxHeight:5
              }
              
          }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks:{
                callback: function(value, index, ticks) {
                  return '$' + value+'k';
                },
                stepSize:10
              },
              border:{dash: [4, 4]}
            },
            x:{
              grid:{
                display:false,
              }
            }
          },
        },
      });
    }
  }
