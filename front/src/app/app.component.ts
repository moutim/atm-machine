import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showHeaderHome: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateHeaderVisibility(event.urlAfterRedirects);
      }
    });
  }

  ngOnInit() {
    this.updateHeaderVisibility(this.router.url);
  }

  private updateHeaderVisibility(url: string) {
    url.split('/')[1] == 'home' ? this.showHeaderHome = true : this.showHeaderHome = false;
  }
}
