import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordComponent } from './password.component';
import { HeaderatmModule } from '../../shared/components/HeaderATM/headeratm.module';
import { ExitbuttonModule } from '../../shared/components/ExitButton/exitbutton.module';

@NgModule({
  declarations: [
    PasswordComponent
  ],
  imports: [
    CommonModule,
    HeaderatmModule,
    ExitbuttonModule
  ]
})
export class PasswordModule { }
