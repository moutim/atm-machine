import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfDirective } from '../../directives/CPF/cpf.directive';

@NgModule({
  declarations: [
    CpfDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CpfDirective
  ]
})
export class SharedModule { }
