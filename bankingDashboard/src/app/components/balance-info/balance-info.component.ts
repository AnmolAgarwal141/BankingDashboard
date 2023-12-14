import { Component, OnInit } from '@angular/core';
import { amountData } from '../../models/amountData';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-balance-info',
  templateUrl: './balance-info.component.html',
  styleUrls: ['./balance-info.component.scss']
})
export class BalanceInfoComponent implements OnInit {
  balanceData!:amountData
  constructor(private apiService:ApiService){}

  ngOnInit(): void {
      this.apiService.getBalanceData().subscribe(response=>{
        console.log(response);
        if(response)
        this.balanceData=new amountData('','Total Balance',response.total_balance,response.monthly_payment_limit,response.payment_done_so_far,true)
      })
  }
}
