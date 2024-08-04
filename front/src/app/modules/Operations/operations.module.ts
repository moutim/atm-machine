import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { OperationsComponent } from './operations.component';
import { HeaderatmModule } from '../../shared/components/HeaderATM/headeratm.module';
import { ShowbalanceModule } from '../../shared/components/ShowBalance/showbalance.module';
import { ButtonComponent } from './Button/button.component';
import { WarningModule } from '../../shared/components/Warning/warning.module';
import { ExitbuttonModule } from '../../shared/components/ExitButton/exitbutton.module';

@NgModule({
  declarations: [
    OperationsComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    HeaderatmModule,
    ShowbalanceModule,
    WarningModule,
    ExitbuttonModule
  ],
  providers: [
    DatePipe,
    CurrencyPipe
  ]
})
export class OperationsModule { }
