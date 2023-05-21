import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
const ip = 'http://127.0.0.1:3000/';

export function validatePasswords(formGroup: FormGroup) {
  const password = formGroup.get('password')?.value;
  const rPassword = formGroup.get('rpassword')?.value;
  if (password !== rPassword) {
    return { distinctPasswords: true };
  }
  return null;
}

export async function validateUser(user: string){
  return fetch(ip + 'users', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].username === user) {
          return true;
        }
      }
      return false;
    })
    .catch((error) => console.log(error));
}
