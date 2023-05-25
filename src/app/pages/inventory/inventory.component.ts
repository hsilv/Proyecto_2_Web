import { Component, OnInit } from '@angular/core';
import { getDocInfo, getPatients } from 'src/app/service/home';
import { getMedicalCenter } from 'src/app/service/inventory';
const ip='http://127.0.0.1:3000/';
import { fetchSpecialties } from 'src/app/service/register';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})

export class InventoryComponent {
  // medUser: string = "";
  // medCenter!: string;
  // // token: string = "";
  // // patients!: (string|number|boolean)[][];
  // // username: string = "";
  // // docInfo: (string | boolean)[] = [];

  // constructor(){
  //   //this.medUser = localStorage.getItem('medUser')!;
  //   //this.token = localStorage.getItem('jwt')!;
  // }
  // async ngOnInit() {
  //   console.log(localStorage.getItem('medUser'));

    //this.medCenter = <(string)> await getMedicalCenter(this.medUser, this.token);
    //this.patients = <(string | number | boolean)[][]>(await getPatients(this.medUser, this.token));
    //this.docInfo = <(string | boolean)[]>await getDocInfo(this.token, this.medUser);
  }


