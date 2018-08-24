//Con los ";" comentados el IDE de JS no tendra problemas en ejecutar el codigo

const nombre = "Carlos" //;

function saludar(nombre) {
  console.log("hola" + nombre);
}

saludar() //;

//con el ";" comentado esto generara error
const nombre = "carlos" //;
//sin el ";" JS interpreta la "(" justo despues del string "carlos"
(function saludar(nombre) {
  console.log("hola" + nombre);
})() //ejemplo de IIFE, siginifica que despues de declarada la function
//esta te tiene que ejecutar

//con el ";" comentado esto generara error
const nombre = "carlos" //;
//sin el ";" JS interpreta la "[" justo despues del string "carlos"
[
  "lunes",
  "martes",
  "miercoles",
].forEach(function (dia) {
  console.log(dia);
})
