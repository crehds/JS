function saludarFamilia(apellido) { //outer function o funcion externa
  //retorna la funcion de saludar miembro de familia
  return function saludarMiembroDeFamilia(nombre) { //inner function funcion interna
    //como esta dentro del scope de la anterior function
    //puede recordar el apellido
    console.log(`Hola ${nombre} ${apellido}`);
  };
}

//al ejecutarse estas lineas de codigo queda pendiente la function
//saludarMiembroDeFamilia y pero ya se le envio el apellido
const saludarGomez = saludarFamilia('Gomez');
const saludarPerez = saludarFamilia('Perez');
const saludarRomero = saludarFamilia('Romero');
/*
function saludarGomez(nombre){
console.log(`Hola ${nombre} Gomez`);
}

function saludarGomez(nombre){
console.log(`Hola ${nombre} Perez`);
}*/

saludarGomez('Pedro');
saludarGomez('Juan');
saludarGomez('Laura');
saludarGomez('Monica');

saludarPerez('Dario');
saludarPerez('Martin');
saludarPerez('Julieta');

saludarRomero('Carlos');
