import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  changebarWidth(changeflag:boolean){
    if(changeflag){
      document.getElementById('leftMenu')?.classList.remove('left-bar-show');
      document.getElementById('leftMenu')?.classList.add('left-bar-hide')
    }
    else{
      document.getElementById('leftMenu')?.classList.add('left-bar-show');
      document.getElementById('leftMenu')?.classList.remove('left-bar-hide')
    }
  }
}
