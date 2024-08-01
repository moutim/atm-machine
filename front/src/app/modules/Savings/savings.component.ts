import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrl: './savings.component.scss'
})
export class SavingsComponent {
  forms: FormGroup = this.formBuilder.group({});
  optionSelected: boolean = false;
  savingsMade: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.forms = this.formBuilder.group({
      option: ['guardar', [Validators.required]],
      value: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.forms.valid) {
      console.log('Form Submitted:', this.forms.value);
      this.optionSelected = true;
    } else {
      console.log('Form is invalid');
    }
  }

  confirmSavings() {
    this.savingsMade = true;
  }

  cancelSavings() {
    this.optionSelected = false;
    this.forms.reset();
  }
}
