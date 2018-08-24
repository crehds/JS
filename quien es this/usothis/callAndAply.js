const carlos = {
  nombre: 'Carlos',
  apellido: 'Eduardo',
}

function saludar(veces) {

  for (let i = 0; i < veces; i++) {
    console.log(`Hola ${this.nombre} ${this.apellido}`);
  }
}

function saludar(veces, uppercase) {
  let str = `Hola ${this.nombre} ${this.apellido}`
  str = uppercase ? str.toUpperCase() : str;
  for (let i = 0; i < veces; i++) {
    console.log(str);
  }
}
//funciona igual que call pero se necesita los "[]";
saludar.apply(carlos, [3, true]);
/* una variante
const params =[3, true] guardara los parametros;
saludar.call(carlos,...params); los ... enviaran los datos del arreglo
de manera ordenada y se ejecutara de manera correcta

*/


/*De esta manera se visualiza que se retorna la funcion saludar
se pude interpretar como error cuando lo que se quiere es que se ejecute
console.log*/
saludar.bind(carlos, 3);

//el primer parametro hara referencia al objeto carlos
saludar.call(carlos, 3);




// sirven para declaran al scope global en caso no existiera el objeto Carlos
window.nombre = "Carlos";
window.apellido = "Eduardo";