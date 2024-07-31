import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositComponent } from './deposit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/modules/shared.module';

@NgModule({
  declarations: [
    DepositComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class DepositModule { }
