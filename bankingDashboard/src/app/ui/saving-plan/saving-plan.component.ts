import { Component, Input, OnInit } from '@angular/core';
import { amountData } from 'src/app/models/amountData';
import { cardIcons } from 'src/app/models/cardIcons';

@Component({
  selector: 'app-saving-plan',
  templateUrl: './saving-plan.component.html',
  styleUrls: ['./saving-plan.component.scss']
})
export class SavingPlanComponent implements OnInit {
  @Input() data!:amountData
  cardIcons!: cardIcons;
  percentage:number=0;
  ngOnInit(): void {
      console.log(this.data);
      if(this.data){
        this.cardIcons=new cardIcons(this.data.img,'','','')
        this.percentage=Math.round((this.data.targetAchieved/this.data.targetAmount)*100)
      }
      else{
        this.cardIcons=new cardIcons('','','','')
      }
        
  }

}
