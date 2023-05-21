import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  location: string = '';
  constructor(private router: Router) {
    this.location = this.router.url;
  }
  onLocate(linkr: string) {
    return this.location == linkr;
  }
  onAdmin(linkr: string) {
    if((localStorage.getItem('admin') === 'false') && (linkr == '/medicalc' || linkr == '/reportery')){
      return true;
    }else{
      return false;
    }
  }

  ngOnInit(): void {
      if(localStorage.getItem('jwt') == (undefined || null)){
        this.router.navigate(['']);
      }
  }

  logOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('medUser');
    this.router.navigate(['']);
  }
}
