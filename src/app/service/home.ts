const ip = 'http://127.0.0.1:3000/';

export async function getPatients(username: string, token: string){
  const data = {
    username: username,
  };
  return await fetch(ip + 'getPatients', {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((res) => {
      const arr: [][] = res.map((obj: Object) => Object.values(obj));
      const mapped = arr.map((arr) => {
        return arr.map((value: string | number | boolean, index) => {
          if(index == 3){
            if(value){
              return 'Vivo';
            }else{
              return 'Fallecido';
            }
          }else if(index == 4){
            if(value){
              return 'Masculino';
            }else{
              return 'Femenino';
            }
          } else{
            return value;
          }
        })
      })
      return mapped;
    })
    .catch((err) => console.log(err));
}
