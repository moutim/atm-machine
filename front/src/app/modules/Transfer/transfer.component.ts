import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ICheckCPF from '../../interfaces/ICheckCPF';
import { EndpointsService } from '../../utils/endpoints.service';
import IUserConfirmInfo from '../../interfaces/IUserConfirmInfo';
import ITransfer from '../../interfaces/ITransfer';
import IUserLogin from '../../interfaces/IUserLogin';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrl: './transfer.component.scss'
})
export class TransferComponent {
  forms: FormGroup = this.formBuilder.group({});
  cpfExists: boolean = false;
  transferMade: boolean = false;
  errorMessage: string = '';
  loading: boolean = false;
  userOriginInfo: IUserLogin = {
    token: '',
    cpf: 0,
    userId: 0
  }
  userDestinationInfo: IUserConfirmInfo = {
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
      amount: ['', [Validators.required, Validators.min(10)]],
    });

    const info = localStorage.getItem('userInfo');
    if (info) {
      this.userOriginInfo = JSON.parse(info);
    }
  }

  onSubmit() {
    this.errorMessage = '';

    if (this.forms.valid) {
      const body: ICheckCPF = {
        cpf: Number(this.removeSpecialCharacters(this.forms.get('CPF')?.value))
      };

      this.loading = true;
      this.api.checkCpf(body).subscribe({
        next: (result: any) => {
          this.userDestinationInfo = result;
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

  confirmTransfer() {
    this.errorMessage = '';

    const body: ITransfer = {
      cpfDestination: Number(this.removeSpecialCharacters(this.forms.get('CPF')?.value)),
      cpfOrigin: this.userOriginInfo.cpf,
      amount: Number(this.forms.get('amount')?.value)
    }

    this.api.transfer(body).subscribe({
      next: (result) => {
        this.cpfExists = false;
        this.transferMade = true;
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      }
    });
  }

  cancelTransfer() {
    this.cpfExists = false;
    this.forms.reset();
  }

  navigateToLogin() {
    this.router.navigate(['/home/login']);
  }
}
