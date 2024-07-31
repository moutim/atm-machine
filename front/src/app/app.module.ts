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

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HeaderloginModule,
    RegisterModule,
    DepositModule,
    OperationsModule,
    WithdrawModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
