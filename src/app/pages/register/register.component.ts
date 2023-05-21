import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { fetchCenters, fetchSpecialties, registerUser } from 'src/app/service/register';
import { Specialty } from 'src/app/model/doctor.model';
import { regCenter } from 'src/app/model/medical.model';
import { Router } from '@angular/router';
import {
  FormGroup,
  Validators,
  FormControl,
  FormControlName,
  NgControl,
  NgForm,
} from '@angular/forms';
import {
  validatePasswords,
  validateUser,
} from 'src/app/validation/register.validation';
import { Doctor } from 'src/app/model/doctor.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerForm', { static: false })
  formulario?: NgForm;

  specials: Specialty[] = [];
  centers: regCenter[] = [];
  name: string = '';
  address: string = '';
  phone!: number;
  specialty!: string;
  gender!: boolean;
  center!: string;
  collegiate!: number;
  username: string = '';
  valid: boolean = false;
  userTaken: boolean | void = false;
  userValid: boolean | void = false;
  formDisabled: boolean = true;
  password: string = '';
  rePassword: string = '';
  badPasswords: boolean = false;

  constructor(private router: Router) {}

  @Input() adminCheckBox: boolean = false;

  async ngOnInit(): Promise<void> {
    this.specials = await fetchSpecialties();
    this.centers = await fetchCenters();
  }

  async onChangeUser() {
    console.log('Change, checking user...');
    this.userTaken = await validateUser(this.username);
    this.userValid = !this.userTaken;
    return this.userTaken;
  }

  validatePasswords(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const rPassword = formGroup.get('rpassword')?.value;
    if (password !== rPassword) {
      return { distinctPasswords: true };
    }
    return null;
  }

  async onChangeForm() {
    console.log('Cambio en el form');
    if (this.formulario) {
      if (this.formulario.invalid) {
        this.formDisabled = true;
      } else if (await validateUser(this.username)) {
        this.formDisabled = true;
      } else if (this.checkPasswords()) {
        this.formDisabled = true;
      } else {
        this.formDisabled = false;
      }
    }
  }

  checkPasswords() {
    if (this.password !== this.rePassword) {
      this.badPasswords = true;
      return true;
    } else {
      this.badPasswords = false;
      return false;
    }
  }

  async registerUser() {
    let doctor: Doctor = {
      center: this.center,
      collegiate: this.collegiate.toString(),
      direction: this.address,
      genre: this.gender.toString(),
      name: this.name,
      password: this.password,
      phone: this.phone.toString(),
      speciality: this.specialty,
      username: this.username,
    };
    if (await registerUser(doctor)){
      this.router.navigate(['']);
    };
  }
}
