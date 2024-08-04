import { Component } from '@angular/core';
import { EndpointsService } from '../../utils/endpoints.service';
import IUserLogin from '../../interfaces/IUserLogin';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrl: './statement.component.scss'
})
export class StatementComponent {
  userInfo: IUserLogin = {
    token: '',
    cpf: 0,
    userId: 0
  };
  statements: any;

  constructor(private api: EndpointsService) { }

  ngOnInit() {
    const info = localStorage.getItem('userInfo');
    if (info) {
      this.userInfo = JSON.parse(info);
    }

    this.getStatements();
  }

  private getStatements() {
    this.api.getStatements(this.userInfo.userId).subscribe({
      next: (result) => {
        this.statements = result;
      }
    });
  }
}
