import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { StatementComponent } from './statement.component';
import { HeaderatmModule } from '../../shared/components/HeaderATM/headeratm.module';
import { ExitbuttonModule } from '../../shared/components/ExitButton/exitbutton.module';
import { ShowbalanceModule } from '../../shared/components/ShowBalance/showbalance.module';
import { FooterModule } from '../../shared/components/Footer/footer.module';

@NgModule({
  declarations: [
    StatementComponent
  ],
  imports: [
    CommonModule,
    HeaderatmModule,
    ExitbuttonModule,
    ShowbalanceModule,
    FooterModule,
    CurrencyPipe
  ]
})
export class StatementModule { }
