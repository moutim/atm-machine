import { Component, Input } from '@angular/core';
import IUserInfo from '../../../interfaces/IUserInfo';
import { EndpointsService } from '../../../utils/endpoints.service';
import IUserLogin from '../../../interfaces/IUserLogin';

@Component({
  selector: 'app-showbalance',
  templateUrl: './showbalance.component.html',
  styleUrl: './showbalance.component.scss'
})
export class ShowbalanceComponent {
  @Input() savings: boolean = false;

  visibleBalance: boolean = false;
  userInfo: IUserLogin = {
    token: '',
    cpf: 0,
    userId: 0
  };
  userAccountInfo: IUserInfo = {
    userId: 0,
    firstName: '',
    lastName: '',
    currentAccountBalance: 0,
    savingsAccountBalance: 0,
    lastAcces: '',
  }

  constructor(private api: EndpointsService) { }

  ngOnInit() {
    const info = localStorage.getItem('userInfo');
    if (info) {
      this.userInfo = JSON.parse(info);
    }

    this.getUserInfo();
  }

  getUserInfo() {
    this.api.userInfo(this.userInfo.userId).subscribe({
      next: (result: any) => {
        this.userAccountInfo = result;
      }
    })
  }

  showBalance() {
    this.visibleBalance = !this.visibleBalance;
  }
}
