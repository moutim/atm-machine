import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import IRegister from '../../interfaces/IRegister';
import { EndpointsService } from '../../utils/endpoints.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  forms: FormGroup = this.formBuilder.group({});
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private api: EndpointsService
  ) { }

  ngOnInit() {
    this.forms = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      CPF: ['', [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(5)]],
    }, { validators: this.passwordMatchValidator });
  }

  private passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const passwordConfirm = form.get('passwordConfirm');

    return password && passwordConfirm && password.value !== passwordConfirm.value
      ? { passwordMismatch: true }
      : null;
  }

  onSubmit() {
    if (this.forms.valid) {
      this.errorMessage = '';

      const body: IRegister = {
        firstName: this.forms.get('firstName')?.value,
        lastName: this.forms.get('lastName')?.value,
        password: this.forms.get('password')?.value,
        cpf: Number(this.removeSpecialCharacters(this.forms.get('CPF')?.value))
      }

      this.api.register(body).subscribe({
        next: (result) => {
          this.router.navigate(['/home/login']);
        },
        error: (err) => {
          this.errorMessage = err.error.message;
        }
      });
    }
  }

  private removeSpecialCharacters(input: string): string {
    return input.split('-').join('').split('.').join('');
  }

  navigateToLogin() {
    this.router.navigate(['/home/login']);
  }
}
