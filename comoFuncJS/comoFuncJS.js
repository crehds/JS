/*Esta linea de codigo se ejecutara despues
de que JS ingrese en la pila al archivo
comoFuncJs.js*/

console.log(`Hola`);

/*Esta funcion se añadira a la cola de tareas(task queue),
para luego ser ejecutada cuando todas las lineas
de codigo se ejecuten*/
setTimeout(function() {
    //setTimeout sirve para establecer tareas asincronas
    //con esto se puede llamar a por ejemplo otra API
    console.log(`Medio`);
  },

  2); //es el tiempo, en base a milisegundos,que tardara
//ejecutarse el codigo,luego de la ultima linea del archivo
console.log(`Holi x2`);

//resultados
//Hola
//Holix2
//Medio

console.log(`Hola`);
setTimeout(function() {
    console.log(`Medio`);
  },

  1000); //misma idea pero con un tiempo mayor equivalente
//a un segundo(1000 ms=11segundo)
console.log(`Holi x2`);

//resultados
//Hola
//Holix2
//Medio