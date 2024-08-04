import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent {
  forms: FormGroup = this.formBuilder.group({});
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.forms = this.formBuilder.group({
      amount: ['', [Validators.required, Validators.min(10)]],
      password: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  private isMultipleOfTen(amount: number): boolean {
    return amount % 10 == 0;
  }

  onValueSelected(value: number) {
    const infos = {
      type: 'withdraw', amount: value
    }
    this.router.navigate(['/atm/password'], {
      state: { infos }
    });
  }

  onSubmit() {
    const amount: number = this.forms.get('amount')?.value;
    if (!this.isMultipleOfTen(amount)) {
      console.log('ddd');

      this.errorMessage = "O número deve ser multiplo de 10."
      return;
    }


  }
}
