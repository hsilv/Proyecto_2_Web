const ip = 'http://50.16.178.129:3000/';
export async function getPatient(token: string, ID: string) {
  const req = {
    id: ID,
  };
  return await fetch(ip + 'getPatient', {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(req),
  })
    .then((response) => response.json())
    .then((data) => {
      const arr: [][] = data.map((obj: Object) => Object.values(obj));
      const mapped = arr.map((arr) => {
        return arr.map((value: string, index) => {
          if (index == 2) {
            return value.toString().slice(0, 5) + 'kg/m2';
          } else if (index == 7) {
            if (value) {
              return 'Masculino';
            } else {
              return 'Femenino';
            }
          } else if (index == 3) {
            return value + 'm';
          } else if (index == 4) {
            return value + 'kg';
          } else {
            return value.toString();
          }
        });
      });
      return mapped;
    })
    .catch((err) => console.log(err));
}

export async function getAddictions(token: string, ID: string) {
  const req = {
    id: ID,
  };
  return await fetch(ip + 'getAddictions', {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(req),
  })
    .then((response) => response.json())
    .then((data) => {
      const arr: [][] = data.map((obj: Object) => Object.values(obj));
      return arr;
    })
    .catch((err) => console.log(err));
}

export async function getDiseases(token: string, ID: string) {
  const req = {
    id: ID,
  };
  return await fetch(ip + 'getDiseases', {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(req),
  })
    .then((response) => response.json())
    .then((data) => {
      const arr: [][] = data.map((obj: Object) => Object.values(obj));
      const mapped = arr.map((arr) => {
        return arr.map((value: string, index) => {
          if (index == 2) {
            if (value) {
              return 'SI';
            } else {
              return 'NO';
            }
          } else {
            return value.toString();
          }
        });
      });
      return mapped;
    })
    .catch((err) => console.log(err));
}

export async function getDoctors(token: string, ID: string) {
  const req = {
    id: ID,
  };
  return await fetch(ip + 'getDoctors', {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(req),
  })
    .then((response) => response.json())
    .then((data) => {
      const arr: [][] = data.map((obj: Object) => Object.values(obj));
      return arr;
    })
    .catch((err) => console.log(err));
}

export async function getExams(token: string, ID: string) {
  const req = {
    id: ID,
  };
  return await fetch(ip + 'getExams', {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(req),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const arr: [][] = data.map((obj: Object) => Object.values(obj));
      const mapped = arr.map((arr) => {
        return arr.map((value: string, index) => {
          if (index == 4) {
            return value.slice(0, 10);
          } else {
            return value.toString();
          }
        });
      });
      console.log(mapped);
      return mapped;
    })
    .catch((err) => console.log(err));
}

export async function getSurgeries(token: string, ID: string) {
  const req = {
    id: ID,
  };
  return await fetch(ip + 'getSurgeries', {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(req),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const arr: [][] = data.map((obj: Object) => Object.values(obj));
      const mapped = arr.map((arr) => {
        return arr.map((value: string, index) => {
          if (index == 4) {
            return value.slice(0, 10);
          } else if (index == 6) {
            if (value) {
              return 'Vivo';
            } else {
              return 'Fallecido';
            }
          } else {
            return value.toString();
          }
        });
      });
      console.log(mapped);
      return mapped;
    })
    .catch((err) => console.log(err));
}

export async function getPrescs(token: string, ID: string) {
  const req = {
    id: ID,
  };
  return await fetch(ip + 'getPrescs', {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(req),
  })
    .then((response) => response.json())
    .then((data) => {
      const arr: [][] = data.map((obj: Object) => Object.values(obj));
      const mapped = arr.map((arr) => {
        return arr.map((value: string, index) => {
          if (index == 3) {
            return value.slice(0, 10);
          } else if (index == 7) {
            if (value) {
              return 'Vivo';
            } else {
              return 'Fallecido';
            }
          } else {
            return value.toString();
          }
        });
      });
      return mapped;
    })
    .catch((err) => console.log(err));
}
