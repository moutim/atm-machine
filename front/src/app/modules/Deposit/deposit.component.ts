import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.scss'
})
export class DepositComponent {
  forms: FormGroup = this.formBuilder.group({});
  cpfExists: boolean = false;
  depositMade: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.forms = this.formBuilder.group({
      CPF: ['', [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
      value: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.forms.valid) {
      console.log('Form Submitted:', this.forms.value);
      this.cpfExists = true;
    } else {
      console.log('Form is invalid');
    }
  }

  confirmDeposit() {
    this.cpfExists = false;
    this.depositMade = true;
  }

  cancelDeposit() {
    this.cpfExists = false;
    this.forms.reset();
  }

  navigateToLogin() {
    this.router.navigate(['/home/login']);
  }
}
