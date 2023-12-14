import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftNavigationComponent } from './components/left-navigation/left-navigation.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { ActionCardComponent } from './components/action-card/action-card.component';
import { BalanceInfoComponent } from './components/balance-info/balance-info.component';
import { MoneyStaticticsComponent } from './components/money-statictics/money-statictics.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';
import { AddNewComponent } from './ui/add-new/add-new.component';
import { SavingPlanComponent } from './ui/saving-plan/saving-plan.component';
import { CardIconsComponent } from './ui/card-icons/card-icons.component';
import { HttpClientModule } from '@angular/common/http';
import { transactionFilterPipe } from './custom-filter.pipe';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavigationComponent,
    TopNavigationComponent,
    ActionCardComponent,
    BalanceInfoComponent,
    MoneyStaticticsComponent,
    TransactionHistoryComponent,
    AddNewComponent,
    SavingPlanComponent,
    CardIconsComponent,
    transactionFilterPipe,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
