import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordComponent } from './password.component';
import { HeaderatmModule } from '../HeaderATM/headeratm.module';
import { ExitbuttonModule } from '../ExitButton/exitbutton.module';

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
