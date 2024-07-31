import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss'
})
export class PasswordComponent {
  constructor(private router: Router) { }

  navigateToRemoveNotes() {
    this.router.navigate(['/atm/remove-bills']);
  }
}
