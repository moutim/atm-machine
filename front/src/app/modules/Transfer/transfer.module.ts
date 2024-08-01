import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferComponent } from './transfer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderatmModule } from '../../shared/components/HeaderATM/headeratm.module';
import { FooterModule } from '../../shared/components/Footer/footer.module';
import { SharedModule } from '../../shared/modules/shared.module';
import { ShowbalanceModule } from '../../shared/components/ShowBalance/showbalance.module';



@NgModule({
  declarations: [
    TransferComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeaderatmModule,
    FooterModule,
    SharedModule,
    ShowbalanceModule
  ]
})
export class TransferModule { }
