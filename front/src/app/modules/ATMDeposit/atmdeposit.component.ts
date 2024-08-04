import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EndpointsService } from '../../utils/endpoints.service';
import IUserLogin from '../../interfaces/IUserLogin';
import IDepositInfo from '../../interfaces/IDepositInfo';

@Component({
  selector: 'app-atmdeposit',
  templateUrl: './atmdeposit.component.html',
  styleUrl: './atmdeposit.component.scss'
})
export class AtmdepositComponent {
  forms: FormGroup = this.formBuilder.group({});
  depositMade: boolean = false;
  userInfo: IUserLogin = {
    token: '',
    cpf: 0,
    userId: 0
  };

  constructor(private formBuilder: FormBuilder, private api: EndpointsService) { }

  ngOnInit() {
    this.forms = this.formBuilder.group({
      amount: ['', [Validators.required, Validators.min(10)]],
    });

    const info = localStorage.getItem('userInfo');
    if (info) {
      this.userInfo = JSON.parse(info);
    }
  }

  onSubmit() {
    this.depositMade = true;
    if (this.forms.valid) {
      const body: IDepositInfo = {
        cpf: this.userInfo.cpf,
        amount: Number(this.forms.get('amount')?.value)
      };

      this.api.deposit(body).subscribe({
        next: (result) => {
          this.depositMade = true;
        }
      });
    }
  }
}
