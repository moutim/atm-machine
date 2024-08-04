import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferComponent } from './transfer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderatmModule } from '../../shared/components/HeaderATM/headeratm.module';
import { FooterModule } from '../../shared/components/Footer/footer.module';
import { SharedModule } from '../../shared/modules/shared.module';
import { ShowbalanceModule } from '../../shared/components/ShowBalance/showbalance.module';
import { LoadingModule } from '../../shared/components/Loading/loading.module';
import { WarningModule } from '../../shared/components/Warning/warning.module';



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
    ShowbalanceModule,
    LoadingModule,
    WarningModule
  ]
})
export class TransferModule { }
