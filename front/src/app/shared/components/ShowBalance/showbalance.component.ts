import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-showbalance',
  templateUrl: './showbalance.component.html',
  styleUrl: './showbalance.component.scss'
})
export class ShowbalanceComponent {
  @Input() value: string = '';

  visibleBalance: boolean = false;

  showBalance() {
    this.visibleBalance = !this.visibleBalance;
  }
}
