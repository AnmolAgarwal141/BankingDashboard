import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss']
})
export class LeftNavigationComponent implements OnInit {
  @Output() menuEvent = new EventEmitter<boolean>();
  menuItems:{title:string,items:{text:string,image:string,switch?:boolean,active?:boolean}[]}[]=[
    {
      title:'Menu',
      items:[
        {text:'Overview',image:'assets/images/overview-icon.svg',active:true},
        {text:'Transactions',image:'assets/images/transaction-icon.svg'},
        {text:'Analytics',image:'assets/images/analytics-icon.svg'},
        {text:'Cards',image:'assets/images/cards-icon.svg'}
      ]
    },
    {
      title:'General',
      items:[
        {text:'Settings',image:'assets/images/setting-icon.svg'},
        {text:'Help/Support',image:'assets/images/help-icon.svg'},
        {text:'Dark Mode',image:'assets/images/darkmode-icon.svg',switch:true},
      ]
    }
  ]
  newCard={
    direction:'vertical',
    title:'New Payment'
  }

  ngOnInit(): void {
    this.menuEvent.emit(false);
  }

  ToggleMenuBar() {
    console.log("called")
    if(document.getElementById('hideMenu')?.classList.contains('d-none')){
      this.menuEvent.emit(true);
      document.getElementById('hideMenu')?.classList.remove('d-none');
      document.getElementById('showMenu')?.classList.add('d-none');
    }
    else{
      this.menuEvent.emit(false);
      document.getElementById('hideMenu')?.classList.add('d-none');
      document.getElementById('showMenu')?.classList.remove('d-none');
    }
  }

}
