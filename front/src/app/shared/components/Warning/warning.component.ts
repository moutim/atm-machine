import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrl: './warning.component.scss'
})
export class WarningComponent {
  @Input() text: string = '';
}
