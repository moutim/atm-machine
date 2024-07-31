import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exitbutton',
  templateUrl: './exitbutton.component.html',
  styleUrl: './exitbutton.component.scss'
})
export class ExitbuttonComponent {
  constructor(private router: Router) { }

  navigateToHome() {
    this.router.navigate(['/home/login']);
  }
}
