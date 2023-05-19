import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    location: string = window.location.href;
    onLocate(linkr: string){
      return window.location.href.includes('http://'+window.location.hostname+':'+window.location.port+'/'+linkr)
    }

    onRedir(linkr: string){
      window.location.href = 'http://'+window.location.hostname+':'+window.location.port+'/'+linkr;
    }
}
