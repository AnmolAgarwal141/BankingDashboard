import { Component, OnInit } from '@angular/core';
import { cardIcons } from 'src/app/models/cardIcons';
import { transaction } from 'src/app/models/transaction';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {
  filterCard:cardIcons=new cardIcons('assets/images/filter-icon.svg','assets/images/export-icon.svg','Filter','Export');
  tableHeaders:string[]=[];
  tableData:transaction[]=[];
  searchString:string='';
  selectedName='';
  selectedType='';
  constructor(private apiService:ApiService){

  }
  ngOnInit(): void {
    this.apiService.getTransactionsData().subscribe(response=>{
      console.log(response);
      if(response){
        this.tableHeaders=Object.keys(response[0]);
        this.tableHeaders.splice(this.tableHeaders.indexOf('id'),1)
        this.tableHeaders.splice(4, 0, "time");
        response.forEach((element:any) => {
          let date=new Date(element.date)
          let day = date.getDate(); //Date of the month: 2 in our example
          let month = date.toLocaleString('default', { month: 'short' });; //Month of the Year: 0-based index, so 1 in our example
          let year = date.getFullYear()
          let time=date.toLocaleTimeString('en-US',{hour: '2-digit', minute:'2-digit'});
          let dateval=month+' '+day+','+year;
          let newVal=new transaction(dateval,element.name,element.status,element.type,time,("$"+element.amount));
          this.tableData.push(newVal)
        });
        console.log(this.tableData);
      }
    })
  }

  openTransactionDialog(data:any){
    this.selectedName=data.name;
    this.selectedType=data.type;
    console.log(this.selectedName,this.selectedType);
    const myDialog = <HTMLDialogElement>document.querySelector('#transactionDialog');
    myDialog.showModal();
  }
  closeDialog(){
    const myDialog = <HTMLDialogElement>document.querySelector('#transactionDialog');
    myDialog.close();
  }
}
