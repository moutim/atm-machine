import { Component } from '@angular/core';
import { EndpointsService } from '../../utils/endpoints.service';
import IUserLogin from '../../interfaces/IUserLogin';
import IUserInfo from '../../interfaces/IUserInfo';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrl: './operations.component.scss'
})
export class OperationsComponent {
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
}
