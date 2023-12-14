import { Component } from '@angular/core';
import { cardIcons } from '../../models/cardIcons';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent {
  cardIcons:cardIcons=new cardIcons('assets/images/message-icon.svg','assets/images/notification-icon.svg','','')
}
