import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/Login/login.component';
import { RegisterComponent } from './modules/Register/register.component';
import { DepositComponent } from './modules/Deposit/deposit.component';
import { OperationsComponent } from './modules/Operations/operations.component';

const homeRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'deposit', component: DepositComponent },
];

const atmRoutes: Routes = [
  { path: 'operations', component: OperationsComponent },
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
