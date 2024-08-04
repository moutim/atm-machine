import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EndpointsService } from '../../utils/endpoints.service';
import IUserLogin from '../../interfaces/IUserLogin';
import IAuthenticatePassword from '../../interfaces/IAuthenticatePassword';
import IWithdraw from '../../interfaces/IWithdraw';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent {
  forms: FormGroup = this.formBuilder.group({});
  errorMessage: string = '';
  withdrawLimit: number = 1000;
  withdrawMade: boolean = false;
  bills: any;
  userInfo: IUserLogin = {
    token: '',
    cpf: 0,
    userId: 0
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private currencyPipe: CurrencyPipe,
    private api: EndpointsService
  ) { }

  ngOnInit() {
    this.forms = this.formBuilder.group({
      amount: ['', [Validators.required, Validators.min(10)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });

    const info = localStorage.getItem('userInfo');
    if (info) {
      this.userInfo = JSON.parse(info);
    }

    this.setWithdrawLimit();
  }

  onSubmit() {
    this.errorMessage = '';
    const amount: number = this.forms.get('amount')?.value;

    if (this.validateWithdraw(amount)) {
      this.authenticatePassword();
    }
  }

  private validateWithdraw(amount: number) {
    if (!this.isMultipleOfTen(amount)) {
      this.errorMessage = "O número deve ser múltiplo de 10.";
      return false;
    } else if (this.checkHourLimitWithdraw(amount)) {
      this.errorMessage = `O limite de saque é ${this.currencyPipe.transform(this.withdrawLimit, 'BRL', 'symbol', '1.2-2')}.`;
      return false;
    }

    return true;
  }

  private authenticatePassword(): void {
    const body: IAuthenticatePassword = {
      cpf: this.userInfo.cpf,
      password: this.forms.get('password')?.value
    };

    this.api.authenticatePassword(body).subscribe({
      next: () => {
        this.makeWithdraw();
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      }
    });
  }

  private makeWithdraw(): void {
    const amount: number = this.forms.get('amount')?.value;
    const body: IWithdraw = {
      userId: this.userInfo.userId,
      amount: amount
    };

    this.api.withdraw(body).subscribe({
      next: (result) => {
        this.bills = result;
        this.withdrawMade = true;
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      }
    });
  }

  private isMultipleOfTen(amount: number): boolean {
    return amount % 10 == 0;
  }

  private setWithdrawLimit() {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 6 && hour < 22) {
      this.withdrawLimit = 10000;
    }
  }

  private checkHourLimitWithdraw(amount: number): boolean {
    return amount > this.withdrawLimit;
  }

  onValueSelected(value: number) {
    this.forms.get('amount')?.setValue(value);
  }
}
