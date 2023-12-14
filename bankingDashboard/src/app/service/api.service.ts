import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url=environment.api_URl;
  private balanceData$=new BehaviorSubject<any>(null);
  private statisticsData$=new BehaviorSubject<any>(null);
  private transactionData$=new BehaviorSubject<any>(null);
  constructor(private http:HttpClient) {
      this.getApiData()
   }

   getApiData(){
     this.http.get(this.url).subscribe(response=>{
        this.balanceData$.next(JSON.parse(JSON.stringify(response)).balance);
        this.statisticsData$.next(JSON.parse(JSON.stringify(response)).money_statistics);
        this.transactionData$.next(JSON.parse(JSON.stringify(response)).transactions)
     })
   }

   getBalanceData(){
    return this.balanceData$.asObservable()
   }
   getStatisticsData(){
    return this.statisticsData$.asObservable()
   }
   getTransactionsData(){
    return this.transactionData$.asObservable()
   }

}
