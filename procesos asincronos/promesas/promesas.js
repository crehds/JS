function get(URL/*, callback*//*onfinish*/) {
  // Usando promesas
  return new Promise(((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      const DONE = 4;
      const OK = 200;
      if (this.readyState == DONE) {
        if (this.status == OK) {
          //TODO OK
          //Primero va el error y despues la respuesta ya
          //sea que se haya cumplido o no con el request
          // JSON.parse(argumento) convierte un texto plano a formato JSON.
          resolve(JSON.parse(this.responseText));

          //response text contiene todos los parametros de la respuesta
          //de la peticion y se convierte a formato JSON.
        } else {
          //HUBO UN ERROR
          reject(new Error('Se produjo un Error al realizar el request' + this.status)
          );
          console.log(xhr.status);
        }
      }
    };

    xhr.open('GET', URL);
    xhr.send(null);
  }));

}

function handleError(error) {
  console.log(`Resquested failed: ${error}`);
}

let luke;
get('https://swapi.co/api/people/1/')
  .then((response) => {
  luke = response;
  return get('https://swapi.co/api/planets/1/');
})
.then((homeworld) => {
  luke.homeworld = homeworld;
  console.log(`${luke.name} nació en ${homeworld.name}`);
  console.log(`${luke.name} nació en ${luke.homeworld.name}, codigo con igualdad de objeto`);
})

.catch((err) => handleError(err));
