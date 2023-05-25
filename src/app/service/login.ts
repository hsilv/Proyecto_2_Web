const ip = 'http://50.16.178.129:3000/';
import { Router } from '@angular/router';

export async function checkCreds(username: string = '', password: string = '', router: Router){
    let data ={
        username: username,
        password: password,
    }
    return fetch(ip + "login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then(async (data) => {
          if (data.code == 0) {
            console.log("Autenticación válida");
            localStorage.setItem("jwt", data.token);
            localStorage.setItem("medUser", username);
            if(await isAdmin(username, data.token)){
              localStorage.setItem('admin', 'true');
            }else{
              localStorage.setItem('admin', 'false');
            }
            router.navigate(['/home']);
            return true;
          } else {
            return false;
          }
        })
        .catch((error) => {
          console.error(error);
        })
}

async function isAdmin(username: string, token: string){
  const data = {
    username: username,
  };
  return fetch(ip + "isAdmin", {
    method: "POST",
    headers: {
      "Authorization": token,
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data[0].admin) {
        console.log("Soy admin");
        return true;
      } else {
        console.log("No soy admin");
        return false;
      }
    })
    .catch((err) => console.log(err));
}
