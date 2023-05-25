const ip = 'http://127.0.0.1:3000/';

export async function getMedicalCenter(username: string, token: string) {
  const data = {
    id: username,
  };
  return fetch(ip + 'getMedicalCenter', {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      return data[0];
    })
    .catch((err) => console.log(err));
}

export async function getStock(ID: number, token: string){
  const id = {
    id: ID,
  };
  return await fetch(ip + 'getStock', {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(id),
  })
    .then((response) => response.json())
    .then((data) => {
      const arr: [][] = data.map((obj: Object) => Object.values(obj));
      const mapped = arr.map((arr) => {
        return arr.map((value: string, index) => {
          if(index === 3){
            return value.slice(0, 10);
          }else{
            return value;
          }
        })

      });
      console.log(mapped);
      return mapped;
    })
    .catch((err) => console.log(err));
}
