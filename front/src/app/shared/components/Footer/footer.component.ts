import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private location: Location, private router: Router) { }

  navigateToPrevious() {
    this.location.back();
  }

  navigateToHomeAtm() {
    this.router.navigate(['/atm/operations']);
  }
}
