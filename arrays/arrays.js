// con los 3 puntos la funcion tomara la cantidad de datos que se le envien
//y los retornara en un arreglo, sirve cuando no se sabe la cantidad exacta de datos
/*function suma(...numbers){
  console.log(numbers);
}*/

/*function suma(...numbers){
  let acum=0;
  for(let i=0;i<numbers.length;i++){
    acum+=numbers[i];
    }
    return acum;
}*/

//reduce recibe como parametros una funcion que hace algo
//y el valor inicial del acumulador

function suma(...numbers){
  //se puede guardar en una variable por eso
  //se puede usar con un return
  //despues de numbers puede ir el valor de i osea el contador
    return numbers.reduce(function (acum,numbers){
      acum+=numbers;
      return acum;
    },0)//este 0 es el vqalor inicial del acumulador
}

function dobles(...numeros){
  const resultado=[]; //se declara array vacio
  for(let i=0;i<numeros.length;i++){
    resultado.push(numeros[i]*2);
    // se van insertando los datos al final cada uno;
  }
  return resultado;
}

function dobles(...numeros){//se puede hacer otra arrow function aqui
  return numeros.map(numero=>numero*2)
  //map recibe una funcion como parametro que se ejecutara en cada uno de elementos
  //elementos

}

function pares(...numeros){
  const resultado=[];
  for(let i=0;i<numeros.length;i++){
    const numero =numeros[i];
    if(numero%2==0){
      resultado.push(numero);
    }
  }
  return resultado;
}

//filter retornara los datos donde la condicion se cumpla
function pares(...numeros){
  return numeros.filter(numero=>numero%2==0);
}







doble(3,6,10);

suma(1)// un solo elemento
suma(4,8,12,8954);//4 elementos
