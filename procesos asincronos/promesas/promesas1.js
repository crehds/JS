function handleError(error) {
  console.log(`Resquested failed: ${error}`);
}

let lukeFetch;
fetch('https://swapi.co/api/people/1/')

  //Este response me regresa un JSON
  .then(response =>
    response.json())//esto devuelve una promesa, no un objeto JSON
  .then(json => {
    lukeFetch = json;//si esto se declarara en el response.json se podria genera
    //un callback hell, anidando muchos .then luego del otro.Ilegibilidad
    return fetch('https://swapi.co/api/planets/1/');
  })
  .then((response) => response.json())
  .then(json => {
    lukeFetch.homeworld = json;
    console.log(`${lukeFetch.name} nació en ${json.name}, código con FETCH`);
    console.log(`${lukeFetch.name} nació en ${lukeFetch.homeworld.name},
      codigo con igualdad de objeto con FETCH`);
  })
  .catch((err) => handleError(err));
