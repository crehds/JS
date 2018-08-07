var nombre = "Carlos";

//en otros lenguajes no se puede ejecutar si esque la funcion saludar
//no recibe ningun argumento
/*function saludar(){
     console.log("hola "+nombre);
}*/

/*function saludar(nombre){

    console.log("hola "+nombre);
}

function saludar(){
    nombre ="ERIC";// reemplazara al dato declarado en var
    console.log("hola "+nombre);
}

function saludar(){
    let nombre ="ERIC";
    console.log("hola "+nombre);
}*/

/*function saludar(){
    //var nombre
    if(true){
      // nombre="Eric";
    var nombre ="ERIC"; //esta linea es como la dos lineas comentadas
    }
    console.log("hola "+nombre);
}*/

function saludar10(nombre){
    for(let i=0;i<10;i++){
    console.log("hola "+nombre);
  }
  console.log(`el valor de i es: ${i}`);//mostrara error
}

saludar("Eduardo");
