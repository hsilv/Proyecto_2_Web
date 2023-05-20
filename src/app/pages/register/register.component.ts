import { Component, OnInit, Input } from '@angular/core';
import { fetchCenters, fetchSpecialties } from 'src/app/service/register';
import { Specialty } from 'src/app/model/doctor.model';
import { regCenter } from 'src/app/model/medical.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit{
  specials: Specialty[] = [];
  centers: regCenter[] = [];
  @Input() adminCheckBox: boolean = false;

  async ngOnInit(): Promise<void> {
      this.specials = await fetchSpecialties();
      this.centers = await fetchCenters();
  }
}
