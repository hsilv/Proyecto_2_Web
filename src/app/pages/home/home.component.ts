import { Component, OnInit } from '@angular/core';
import { getDocInfo, getPatients } from 'src/app/service/home';
const ip='http://127.0.0.1:3000/';
import { fetchSpecialties } from 'src/app/service/register';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  medUser: string = "";
  token: string = "";
  patients!: (string|number|boolean)[][];
  username: string = "";
  docInfo: (string | boolean)[] = [];
  isButton = true;

  constructor(){
    this.medUser = localStorage.getItem('medUser')!;
    this.token = localStorage.getItem('jwt')!;
    
  }
  async ngOnInit() {
    console.log("Usuario:  ", localStorage.getItem('medUser'));
    this.patients = <(string | number | boolean)[][]>(await getPatients(this.medUser, this.token));
    this.docInfo = <(string | boolean)[]>await getDocInfo(this.token, this.medUser);
  }

}
