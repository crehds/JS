let vidaGoku = 100;
let vidaSuperman =100;

const MIN_POWER =5;//POR BUENA PRACTICA EN MAYUS
const MAX_POWER =12;

//retorna verdadero si la vida de goku y superman son mayores de 0
//sino falso
let ambosSiguenVivos = () => vidaGoku>0 && vidaSuperman>0;
let calcularGolpe = () => Math.round(Math.random()*(MAX_POWER-MIN_POWER))+MIN_POWER;
let gokuSigueVivo = () => vidaGoku >0;

let round = 0;

while(ambosSiguenVivos()){//mientras que hacer lo de las llaves
  round++;
  console.log('Round '+round);
  let golpeGoku =calcularGolpe();
  let golpeSuperman=calcularGolpe();

  if(golpeGoku>golpeSuperman){
    //ataca goku
    console.log(`Goku ataca a Superman con un golpe de ${golpeGoku} `);
    vidaSuperman -= golpeGoku;
    console.log(`Superman queda en ${vidaSuperman} de vida`);
  } else {
    //ataca Superman
    console.log(`Super ataca a goku con un golpe de ${golpeSuperman}`);
    vidaGoku -=golpeSuperman;
    console.log(`Goku queda en ${vidaGoku} de vida`);
  }
}

if(gokuSigueVivo()){
  console.log(`Goku ganó la pelea. Su vida es de ${vidaGoku}`);
}else{
  console.log(`Superman ganó la pelea. Su vida es de ${vidaSuperman}`);
}
