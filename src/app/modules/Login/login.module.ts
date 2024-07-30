import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    // FormsModule,
    // ReactiveFormsModule
  ]
})
export class LoginModule { }
