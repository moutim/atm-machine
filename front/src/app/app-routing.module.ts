import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/Login/login.component';
import { RegisterComponent } from './modules/Register/register.component';
import { DepositComponent } from './modules/Deposit/deposit.component';
import { OperationsComponent } from './modules/Operations/operations.component';
import { WithdrawComponent } from './modules/Withdraw/withdraw.component';
import { PasswordComponent } from './modules/Password/password.component';
import { RemovebillsComponent } from './modules/RemoveBills/removebills.component';
import { StatementComponent } from './modules/Statement/statement.component';

const homeRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'deposit', component: DepositComponent },
];

const atmRoutes: Routes = [
  { path: 'operations', component: OperationsComponent },
  { path: 'withdraw', component: WithdrawComponent },
  { path: 'password', component: PasswordComponent },
  { path: 'remove-bills', component: RemovebillsComponent },
  { path: 'statement', component: StatementComponent },
]

const routes: Routes = [
  { path: '', redirectTo: '/home/login', pathMatch: 'full' },
  { path: 'home', children: homeRoutes },
  { path: 'atm', children: atmRoutes }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
