import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatementComponent } from './statement.component';
import { HeaderatmModule } from '../../shared/components/HeaderATM/headeratm.module';
import { ExitbuttonModule } from '../../shared/components/ExitButton/exitbutton.module';
import { ShowbalanceModule } from '../../shared/components/ShowBalance/showbalance.module';
import { HomeatmbuttonModule } from '../../shared/components/HomeATMButton/homeatmbutton.module';
import { ReturnbuttonModule } from '../../shared/components/ReturnButton/returnbutton.module';



@NgModule({
  declarations: [
    StatementComponent
  ],
  imports: [
    CommonModule,
    HeaderatmModule,
    ExitbuttonModule,
    ShowbalanceModule,
    HomeatmbuttonModule,
    ReturnbuttonModule
  ]
})
export class StatementModule { }
