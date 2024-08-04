import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavingsComponent } from './savings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterModule } from '../../shared/components/Footer/footer.module';
import { HeaderatmModule } from '../../shared/components/HeaderATM/headeratm.module';
import { ShowbalanceModule } from '../../shared/components/ShowBalance/showbalance.module';
import { WarningModule } from '../../shared/components/Warning/warning.module';



@NgModule({
  declarations: [
    SavingsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FooterModule,
    HeaderatmModule,
    ShowbalanceModule,
    WarningModule
  ]
})
export class SavingsModule { }
