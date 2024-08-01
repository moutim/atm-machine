import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderatmModule } from '../../shared/components/HeaderATM/headeratm.module';
import { RemovebillsComponent } from './removebills.component';
import { ExitbuttonModule } from '../../shared/components/ExitButton/exitbutton.module';

@NgModule({
  declarations: [
    RemovebillsComponent
  ],
  imports: [
    CommonModule,
    HeaderatmModule,
    ExitbuttonModule
  ],
  exports: [
    RemovebillsComponent
  ]
})
export class RemovebillsModule { }
