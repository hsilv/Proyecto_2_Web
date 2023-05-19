import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    location: string = window.location.href;
    onLocate(linkr: string){
      if(window.location.href === 'http://'+window.location.hostname+':'+window.location.port+'/'+linkr){
        return true;
      }else{
        return false;
      }
    }

    onRedir(linkr: string){
      window.location.href = 'http://'+window.location.hostname+':'+window.location.port+'/'+linkr;
    }
}
