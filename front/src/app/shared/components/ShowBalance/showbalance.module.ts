import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ShowbalanceComponent } from './showbalance.component';



@NgModule({
  declarations: [
    ShowbalanceComponent
  ],
  imports: [
    CommonModule,
    CurrencyPipe
  ],
  exports: [
    ShowbalanceComponent
  ]
})
export class ShowbalanceModule { }
