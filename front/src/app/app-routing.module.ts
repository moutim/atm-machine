import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/Login/login.component';

const homeRoutes: Routes = [
  { path: 'login', component: LoginComponent },
];

const routes: Routes = [
  { path: '', redirectTo: '/home/login', pathMatch: 'full' },
  { path: 'home', children: homeRoutes }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
