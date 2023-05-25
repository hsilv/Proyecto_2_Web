import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  getAddictions,
  getDiseases,
  getDoctors,
  getExams,
  getPatient,
  getPrescs,
  getSurgeries,
} from 'src/app/service/exp';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.scss'],
})
export class ExpComponent implements OnInit {
  isLoaded = false;
  isID: boolean = true;
  ID: string = '';
  medUser: string = '';
  token: string = '';
  patient: string[][] = [];
  addictions: string[][] = [];
  diseases: string[][] = [];
  doctors: string[][] = [];
  exams: string[][] = [];
  surgs: string[][] = [];
  prescs: string[][] = [];

  constructor(private route: ActivatedRoute) {
    this.medUser = localStorage.getItem('medUser')!;
    this.token = localStorage.getItem('jwt')!;
  }
  async ngOnInit() {
    this.route.queryParams.subscribe(async (params) => {
      const myParam = params['ID']; // Reemplaza 'paramName' por el nombre del parámetro que deseas obtener
      if (params['ID'] === undefined) {
        this.isID = false;
        console.log('Mostrá que no has seleccionado un expediente');
      } else {
        this.isID = true;
        this.ID = params['ID'];
        this.patient = <string[][]>await getPatient(this.token, this.ID);
        console.log(this.patient);
        this.addictions = <string[][]>await getAddictions(this.token, this.ID);
        console.log(this.addictions);
        this.diseases = <string[][]>await getDiseases(this.token, this.ID);
        console.log(this.diseases);
        this.doctors = <string[][]>await getDoctors(this.token, this.ID);
        console.log(this.doctors);
        this.exams = <string[][]>await getExams(this.token, this.ID);
        console.log(this.exams);
        this.surgs = <string[][]> await getSurgeries(this.token, this.ID);
        console.log(this.surgs);
        this.prescs = <string[][]> await getPrescs(this.token, this.ID);
        console.log(this.prescs);
      }
      this.isLoaded = true;
      console.log(myParam);
    });
  }
}
