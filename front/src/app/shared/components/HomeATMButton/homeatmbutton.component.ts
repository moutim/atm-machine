import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeatmbutton',
  templateUrl: './homeatmbutton.component.html',
  styleUrl: './homeatmbutton.component.scss'
})
export class HomeatmbuttonComponent {
  constructor(private router: Router) { }

  navigateToHomeAtm() {
    this.router.navigate(['/atm/operations']);
  }
}
