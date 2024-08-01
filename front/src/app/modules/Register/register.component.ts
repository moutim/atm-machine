import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  forms: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder, private router: Router) { }

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
      console.log('Form Submitted:', this.forms.value);
    } else {
      console.log('Form is invalid');
    }
  }

  navigateToLogin() {
    this.router.navigate(['/home/login']);
  }
}
