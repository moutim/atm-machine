import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() icon: string = '';
  @Input() highlight: boolean = false;
  @Input() route: string = '';

  constructor(private router: Router) { }

  navigateTo() {
    if (this.route) {
      this.router.navigate([`/atm/${this.route}`]);
    }
  }
}
