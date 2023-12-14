import { Component } from '@angular/core';
import { amountData } from '../../models/amountData';
import { cardIcons } from '../../models/cardIcons';

@Component({
  selector: 'app-action-card',
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.scss']
})
export class ActionCardComponent {
  savingsArr:amountData[]=[
    new amountData('assets/images/watch-icon.svg','New Watch',2000,2000,1000,false),
    new amountData('assets/images/ps5-icon.svg','Play Station 5',2000,2000,800,false),
  ]
  newCard:{direction:string,title:string}={
    direction:'horizontal',
    title:'Add new Card'
  }
  cardIcons:cardIcons=new cardIcons('assets/images/prev-icon.svg','assets/images/next-icon.svg','','')

}
