import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/modules/shared.module';
import { LoadingModule } from '../../shared/components/Loading/loading.module';
import { WarningModule } from '../../shared/components/Warning/warning.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    LoadingModule,
    WarningModule
  ]
})
export class LoginModule { }
