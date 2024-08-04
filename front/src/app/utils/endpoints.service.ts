import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IRegister from '../interfaces/IRegister';
import ICheckCPF from '../interfaces/ICheckCPF';
import IDepositInfo from '../interfaces/IDepositInfo';
import IAuthenticatePassword from '../interfaces/IAuthenticatePassword';
import IWithdraw from '../interfaces/IWithdraw';
import ITransfer from '../interfaces/ITransfer';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {
  host: string = 'https://localhost:7047/api';
  token: string = '';

  constructor(private http: HttpClient) { }

  checkTokenInStorage() {
    const storageInfo: string | null = localStorage.getItem('userInfo');

    if (storageInfo) {
      const userInfo = JSON.parse(storageInfo);
      this.token = userInfo.token;
    }
  }

  mountHeaders() {
    this.checkTokenInStorage();

    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token,
      'Content-Type': 'application/json'
    });

    return headers;
  }

  login(body: any) {
    return this.http.post(`${this.host}/login`, body);
  }

  register(body: IRegister) {
    return this.http.post(`${this.host}/register`, body);
  }

  userInfo(userId: number) {
    const headers: HttpHeaders = this.mountHeaders();

    return this.http.get(`${this.host}/userInfo/${userId}`, { headers: headers });
  }

  checkCpf(body: ICheckCPF) {
    return this.http.post(`${this.host}/checkCPF`, body);
  }

  deposit(body: IDepositInfo) {
    return this.http.post(`${this.host}/deposit`, body);
  }

  getStatements(userId: number) {
    const headers: HttpHeaders = this.mountHeaders();

    return this.http.get(`${this.host}/statement/${userId}`, { headers: headers });
  }

  authenticatePassword(body: IAuthenticatePassword) {
    const headers: HttpHeaders = this.mountHeaders();

    return this.http.post(`${this.host}/authenticatePassword`, body, { headers: headers });
  }

  withdraw(body: IWithdraw) {
    const headers: HttpHeaders = this.mountHeaders();

    return this.http.post(`${this.host}/withdraw`, body, { headers: headers });
  }

  transfer(body: ITransfer) {
    const headers: HttpHeaders = this.mountHeaders();

    return this.http.post(`${this.host}/transfer`, body, { headers: headers });
  }

  depositInSavingsAccount(body: IDepositInfo) {
    const headers: HttpHeaders = this.mountHeaders();

    return this.http.post(`${this.host}/savingsAccount/deposit`, body, { headers: headers });
  }

  withdrawInSavingsAccount(body: IDepositInfo) {
    const headers: HttpHeaders = this.mountHeaders();

    return this.http.post(`${this.host}/savingsAccount/withdraw`, body, { headers: headers });
  }
}
