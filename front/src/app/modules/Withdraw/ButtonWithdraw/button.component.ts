import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() title: string = '';
  @Input() value: number = 0;
  @Input() highlightBlue: boolean = false;
  @Input() highlightOrange: boolean = false;
  @Input() route: string = '';
  @Output() valueSelected: EventEmitter<number> = new EventEmitter<number>();

  constructor(private router: Router) { }

  navigateTo() {
    if (this.route) {
      this.router.navigate([`/atm/${this.route}`]);
    }
  }

  onClick() {
    this.valueSelected.emit(this.value);
    this.navigateTo();
  }
}
