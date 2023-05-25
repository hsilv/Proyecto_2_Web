import { Component, OnInit } from '@angular/core';
import { getDocInfo, getPatients } from 'src/app/service/home';
const ip='http://127.0.0.1:3000/';
import { fetchSpecialties } from 'src/app/service/register';
import { getMedicalCenter, getStock } from 'src/app/service/inventory';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})

export class InventoryComponent implements OnInit{
  username: string = "";
  token: string = "";
  centerName: string = "";
  centerId: number = 99999999;
  data: (number | string)[][] = [];

  constructor(){
    this.username = localStorage.getItem('medUser')!;
    this.token = localStorage.getItem('jwt')!;
  }
  async ngOnInit() {
    console.log(this.username)
    console.log(this.token)
    const center = await getMedicalCenter(this.username, this.token)
    this.centerName = center.center_name;
    this.centerId = center.id_center;
    this.data = <(number | string)[][]> await getStock(this.centerId, this.token); 
  }

}


