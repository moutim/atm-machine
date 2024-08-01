import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtmdepositComponent } from './atmdeposit.component';
import { HeaderatmModule } from '../../shared/components/HeaderATM/headeratm.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ExitbuttonModule } from '../../shared/components/ExitButton/exitbutton.module';
import { ShowbalanceModule } from '../../shared/components/ShowBalance/showbalance.module';
import { FooterModule } from '../../shared/components/Footer/footer.module';



@NgModule({
  declarations: [
    AtmdepositComponent
  ],
  imports: [
    CommonModule,
    HeaderatmModule,
    ReactiveFormsModule,
    ExitbuttonModule,
    ShowbalanceModule,
    FooterModule
  ],
  exports: [
    AtmdepositComponent
  ]
})
export class AtmdepositModule { }
