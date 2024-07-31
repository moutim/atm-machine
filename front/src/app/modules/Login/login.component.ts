import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  forms: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.forms = this.formBuilder.group({
      CPF: ['', [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit() {
    if (this.forms.valid) {
      console.log('Form Submitted:', this.forms.value);
    } else {
      console.log('Form is invalid');
    }
  }

  navigateToRegister() {
    this.router.navigate(['/home/register']);
  }
}
