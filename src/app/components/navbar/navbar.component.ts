import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  location: string = '';
  constructor(private router: Router) {
    this.location = this.router.url;
  }
  onLocate(linkr: string) {
    return (this.location == linkr);
  }
}
