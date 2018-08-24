let carlos = {
  name: 'carlos',
  apellido: 'rodriguez',
  edad: 24, };

let otrocarlos = carlos;

otrocarlos === carlos;//true

//esto modificara tanto para el objeto otrocarlos
//como para carlos, debido a que ambos apuntan
//a la misma direccion de memoria que contiene al
//objeto entre llaves.
otrocarlos.edad = 27;

//esta funcion tendra un side effect
function cumpleanos(persona) {
  persona.edad++;

  //modificara tanto a carlos como a otrocarlos
}

cumpleanos(carlos);

function cumpleanos(persona) {
  //object.assign es un metodo propio de objetos
  //el cual recibe dos parametros
  // el primero recibira todos los datos del segundo
  clone = Object.assign({}, persona);
  clone.edad++;
  return clone;
}

let carlosviejito = cumpleanos(carlos);

carlosviejito === carlos;//false
