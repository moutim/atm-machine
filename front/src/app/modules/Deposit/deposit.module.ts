import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { DepositComponent } from './deposit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/modules/shared.module';
import { LoadingModule } from '../../shared/components/Loading/loading.module';
import { WarningModule } from '../../shared/components/Warning/warning.module';

@NgModule({
  declarations: [
    DepositComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    LoadingModule,
    WarningModule,
    CurrencyPipe
  ]
})
export class DepositModule { }
