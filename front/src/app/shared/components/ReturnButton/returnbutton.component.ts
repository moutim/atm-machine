import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-returnbutton',
  templateUrl: './returnbutton.component.html',
  styleUrl: './returnbutton.component.scss'
})
export class ReturnbuttonComponent {
  constructor(private location: Location) { }

  navigateToPrevious() {
    this.location.back();
  }
}
