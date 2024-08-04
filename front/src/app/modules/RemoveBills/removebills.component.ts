import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-removebills',
  templateUrl: './removebills.component.html',
  styleUrls: ['./removebills.component.scss']
})
export class RemovebillsComponent implements OnInit {
  @Input() bills: any;
  @Input() amount: number = 0;
  arrayBills: Array<any> = [];
  totalBills: number = 0;

  ngOnInit() {
    this.calculateTotal();
  }

  calculateTotal() {
    for (let bill in this.bills) {
      this.totalBills += this.bills[bill];

      const billObj = {
        amountBill: Number(bill),
        quantity: this.bills[bill]
      }

      this.arrayBills.push(billObj);
    }
  }
}
