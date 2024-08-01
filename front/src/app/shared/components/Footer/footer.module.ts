import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { ExitbuttonModule } from '../ExitButton/exitbutton.module';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    ExitbuttonModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
