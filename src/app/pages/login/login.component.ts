import { Component, OnInit } from '@angular/core';
import { checkCreds } from 'src/app/service/login';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  username?: string;
  password?: string;
  validCred: boolean = false;

  constructor(private router:Router){}
  async login(){
    if(await checkCreds(this.username, this.password, this.router)){
      this.validCred = false;
    }else{
      this.validCred = true;
    }
  }

  ngOnInit(): void {
    if(!(localStorage.getItem('jwt') == (undefined || null))){
      this.router.navigate(['/home']);
    }
  }
}
