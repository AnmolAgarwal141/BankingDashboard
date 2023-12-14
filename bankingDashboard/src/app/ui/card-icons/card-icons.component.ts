import { Component, Input } from '@angular/core';
import { cardIcons } from 'src/app/models/cardIcons';

@Component({
  selector: 'app-card-icons',
  templateUrl: './card-icons.component.html',
  styleUrls: ['./card-icons.component.scss']
})
export class CardIconsComponent {
  @Input()
  icons!: cardIcons
}
