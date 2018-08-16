function get(URL, callback) {
  //objeto que nos permitira comunicarnos con el servidor
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    //Existen
    //Solo importan el 4 y el 200, los nombres pueden ser cualquiera
    const DONE = 4;
    const OK = 200;
    if (this.readyState === DONE) {
      if (this.status === OK) {
        //Todo OK
        callback(null, JSON.parse(this.responseText));
      } else {
        //hubo un error
        callback(new Error(`Se produjo un error al realizar el request ${this.status}`));
      }
    }
  };

  xhr.open('GET', URL); //se establece el metodo (GET o POST) mas la url de destino
  xhr.send(null);// como es metodo get, no se envia nada osea un null
}

/* Funcion para tratar el error */
function handleError(err) {
  console.log(`Request failed: ${err}`);
}

/*llamada al metodo se escribe https porque el sitio
cuenta con el certificado https
sino seria un http*/

get('https://www.swapi.co/api/people/1/', function onResponse(err, luke) {
  if (err) return handleError(err);

  /* Para traer el mundo */
  get(luke.homeworld, function onHomeworldResponse(err, homeworld) {
    if (err) return handleError(err);

    luke.homeworld = homeworld;//un objeto dentro de otro objeto
    console.log(`${luke.name} nació en ${luke.homeworld.name}`);
  });

  //demasiados callbacks representan el problema callback hell
  console.log(`Request succeded`);
  console.log('luke', luke);

});
