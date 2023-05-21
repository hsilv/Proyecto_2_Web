import * as dotenv from 'dotenv';
const ip = 'http://127.0.0.1:3000/';
import { HttpClient } from '@angular/common/http';
import { Doctor, Specialty } from '../model/doctor.model';
import { regCenter } from '../model/medical.model';

export async function fetchSpecialties() {
  let specialties: Specialty[] = [];
  await fetch(ip + 'specialties', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item: Specialty, index: number, array: []) => {
        specialties.push({
          id_specialty: item.id_specialty,
          specialty_name: item.specialty_name,
        });
      });
    })
    .catch((error) => console.log(error));
  return specialties;
}

export async function fetchCenters() {
  let centers: regCenter[] = [];
  fetch(ip + 'getCenters', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item: regCenter, index: number, array: []) => {
        centers.push({
          id_center: item.id_center,
          center_name: item.center_name,
        });
      });
    })
    .catch((error) => console.log(error));
  return centers;
}

export async function registerUser(doctor: Doctor): Promise<boolean>{
  return await fetch(ip+"register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(doctor),
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data)
      return true;
    })
    .catch((error) => {console.log(error); return false;});
}