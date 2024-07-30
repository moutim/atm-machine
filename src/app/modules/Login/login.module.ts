import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CpfDirective } from '../../directives/CPF/cpf.directive';

@NgModule({
  declarations: [
    LoginComponent,
    CpfDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
