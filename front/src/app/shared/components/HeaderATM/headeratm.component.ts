import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-headeratm',
  templateUrl: './headeratm.component.html',
  styleUrl: './headeratm.component.scss'
})
export class HeaderatmComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
}
