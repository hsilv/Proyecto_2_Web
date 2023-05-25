import { Component, OnInit } from '@angular/core';
import { getDocInfo, getPatients } from 'src/app/service/home';
const ip='http://127.0.0.1:3000/';
import { fetchSpecialties } from 'src/app/service/register';
import { getMedicalCenter, getStock } from 'src/app/service/inventory';
const limit = new Date('2023-05-05');
const all = 350;

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
  displayAlert: boolean = false;
  alertText: string[] = ['Se sugiere comprar los siguientes medicamentos: '];
  loaded = false;

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
    var perc = (15/100)*all;
    for(let row of this.data){
      row.forEach((value, index, array) => {
        if(index === 2 && <number>value < perc){
          this.displayAlert = true;
          this.alertText.push("\n"+array[1]+" (Por cantidad)")
        } else if (index === 3 && new Date(value) < limit){
          this.displayAlert = true;
          this.alertText.push("\n"+array[1]+' (Por fecha de vencimiento)');
        }
      })
    }
    this.loaded = true;
  }

}


