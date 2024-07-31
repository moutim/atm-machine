import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithdrawComponent } from './withdraw.component';
import { HeaderatmModule } from '../../shared/components/HeaderATM/headeratm.module';
import { WarningModule } from '../../shared/components/Warning/warning.module';
import { ShowbalanceModule } from '../../shared/components/ShowBalance/showbalance.module';
import { ButtonComponent } from './ButtonWithdraw/button.component';
import { ExitbuttonModule } from '../../shared/components/ExitButton/exitbutton.module';

@NgModule({
  declarations: [
    WithdrawComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    HeaderatmModule,
    WarningModule,
    ShowbalanceModule,
    ExitbuttonModule
  ]
})
export class WithdrawModule { }
