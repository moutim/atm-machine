import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EndpointsService } from '../../utils/endpoints.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  forms: FormGroup = this.formBuilder.group({});
  loading: boolean = false;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private api: EndpointsService
  ) { }

  ngOnInit() {
    this.forms = this.formBuilder.group({
      CPF: ['', [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  private removeSpecialCharacters(input: string): string {
    return input.split('-').join('').split('.').join('');
  }

  onSubmit() {
    if (this.forms.valid) {
      this.errorMessage = '';

      const cpf: string = this.forms.get('CPF')?.value;
      const cleanedCpf: number = Number(this.removeSpecialCharacters(cpf));

      const body = {
        cpf: cleanedCpf,
        password: this.forms.get('password')?.value
      };

      this.loading = true;

      this.api.login(body).subscribe({
        next: (result: any) => {
          localStorage.setItem('userInfo', JSON.stringify(result));
          this.router.navigate(['/atm/operations']);
        },
        error: (err) => {
          this.errorMessage = err.error.message;
        }
      });

      this.loading = false;
    }
  }

  navigateToRegister() {
    this.router.navigate(['/home/register']);
  }

  navigateToDeposit() {
    this.router.navigate(['/home/deposit']);
  }
}
