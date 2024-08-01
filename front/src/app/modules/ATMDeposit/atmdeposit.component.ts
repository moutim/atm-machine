import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-atmdeposit',
  templateUrl: './atmdeposit.component.html',
  styleUrl: './atmdeposit.component.scss'
})
export class AtmdepositComponent {
  forms: FormGroup = this.formBuilder.group({});
  depositMade: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.forms = this.formBuilder.group({
      value: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.depositMade = true;
    if (this.forms.valid) {
      console.log('Form Submitted:', this.forms.value);
    } else {
      console.log('Form is invalid');
    }
  }

  confirmDeposit() {
    this.depositMade = true;
  }

  cancelDeposit() {
    this.forms.reset();
  }
}
