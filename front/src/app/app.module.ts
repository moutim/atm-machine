import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './modules/Login/login.module';
import { HeaderloginModule } from './shared/components/HeaderLogin/headerlogin.module';
import { RegisterModule } from './modules/Register/register.module';
import { DepositModule } from './modules/Deposit/deposit.module';
import { OperationsModule } from './modules/Operations/operations.module';
import { WithdrawModule } from './modules/Withdraw/withdraw.module';
import { PasswordModule } from './modules/Password/password.module';
import { RemovebillsModule } from './modules/RemoveBills/removebills.module';
import { StatementModule } from './modules/Statement/statement.module';
import { AtmdepositModule } from './modules/ATMDeposit/atmdeposit.module';
import { TransferModule } from './modules/Transfer/transfer.module';
import { SavingsModule } from './modules/Savings/savings.module';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HeaderloginModule,
    RegisterModule,
    DepositModule,
    OperationsModule,
    WithdrawModule,
    PasswordModule,
    RemovebillsModule,
    StatementModule,
    AtmdepositModule,
    TransferModule,
    SavingsModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
