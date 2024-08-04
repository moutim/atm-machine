import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  type: string | undefined;
  amount: number | undefined;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const navigation = this.router.getCurrentNavigation();
      if (navigation?.extras.state) {
        const state = navigation.extras.state as { infos: { type: string, amount: number } };
        this.type = state.infos.type;
        this.amount = state.infos.amount;

        console.log('State:', state); // Verifique se o estado está sendo logado
      } else {
        console.log('No state available');
      }
    });
  }

  navigateToRemoveNotes() {
    this.router.navigate(['/atm/remove-bills']);
  }
}
