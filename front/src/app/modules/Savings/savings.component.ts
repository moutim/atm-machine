import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import IUserLogin from '../../interfaces/IUserLogin';
import { EndpointsService } from '../../utils/endpoints.service';
import IDepositInfo from '../../interfaces/IDepositInfo';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrl: './savings.component.scss'
})
export class SavingsComponent {
  forms: FormGroup = this.formBuilder.group({});
  optionSelected: boolean = false;
  savingsMade: boolean = false;
  errorMessage: string ='';
  userInfo: IUserLogin = {
    token: '',
    cpf: 0,
    userId: 0
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private api: EndpointsService
  ) { }

  ngOnInit() {
    this.forms = this.formBuilder.group({
      option: ['guardar', [Validators.required]],
      amount: ['', [Validators.required, Validators.min(10)]],
    });

    const info = localStorage.getItem('userInfo');
    if (info) {
      this.userInfo = JSON.parse(info);
    }
  }

  onSubmit() {
    if (this.forms.valid) {
      this.optionSelected = true;
    }
  }

  confirmSavings() {
    if (this.forms.get('option')?.value == 'guardar') {
      this.depositInSavingsAccount();
    } else {
      this.withdrawInSavingsAccount();
    }
  }

  private depositInSavingsAccount() {
    const body: IDepositInfo = {
      cpf: this.userInfo.cpf,
      amount: Number(this.forms.get('amount')?.value)
    };

    this.api.depositInSavingsAccount(body).subscribe({
      next: () => {
        this.savingsMade = true;
      }
    });
  }

  private withdrawInSavingsAccount() {
    const body: IDepositInfo = {
      cpf: this.userInfo.cpf,
      amount: Number(this.forms.get('amount')?.value)
    };

    this.api.withdrawInSavingsAccount(body).subscribe({
      next: () => {
        this.savingsMade = true;
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      }
    });
  }

  cancelSavings() {
    this.optionSelected = false;
    this.forms.reset();
  }
}
