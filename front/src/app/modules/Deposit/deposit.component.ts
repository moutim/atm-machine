import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EndpointsService } from '../../utils/endpoints.service';
import ICheckCPF from '../../interfaces/ICheckCPF';
import IUserConfirmInfo from '../../interfaces/IUserConfirmInfo';
import IDepositInfo from '../../interfaces/IDepositInfo';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.scss'
})
export class DepositComponent {
  forms: FormGroup = this.formBuilder.group({});
  cpfExists: boolean = false;
  depositMade: boolean = false;
  loading: boolean = false;
  errorMessage: string = '';
  userInfo: IUserConfirmInfo = {
    firstName: '',
    lastName: '',
    cpf: 0
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private api: EndpointsService
  ) { }

  ngOnInit() {
    this.forms = this.formBuilder.group({
      CPF: ['', [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
      amount: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.forms.valid) {
      const body: ICheckCPF = {
        cpf: Number(this.removeSpecialCharacters(this.forms.get('CPF')?.value))
      };

      this.loading = true;
      this.api.checkCpf(body).subscribe({
        next: (result: any) => {
          this.userInfo = result;
          this.cpfExists = true;
        },
        error: (err) => {
          this.errorMessage = err.error.message;
        }
      });
      this.loading = false;
    }
  }

  private removeSpecialCharacters(input: string): string {
    return input.split('-').join('').split('.').join('');
  }

  confirmDeposit() {
    this.errorMessage = '';

    const body: IDepositInfo = {
      cpf: Number(this.removeSpecialCharacters(this.forms.get('CPF')?.value)),
      amount: Number(this.forms.get('amount')?.value)
    }

    this.api.deposit(body).subscribe({
      next: (result) => {
        this.cpfExists = false;
        this.depositMade = true;
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      }
    });
  }

  cancelDeposit() {
    this.cpfExists = false;
    this.forms.reset();
  }

  navigateToLogin() {
    this.router.navigate(['/home/login']);
  }
}
