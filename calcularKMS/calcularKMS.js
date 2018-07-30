const NOMBRE ='Sacha';
const DIAS=[
  'lunes',
  'martes',
  'miercoles',
  'jueves',
  'viernes',
  'sabado',
  'domingo'

];
/*el codigo entre llaves se ejecutara mientras la
condicion internea sea verdadera y tantas veces sea necesario
*/
function correr(){
  let  min = 5;
  let max = 15;
  return Math.round(Math.random() * (max-min)) + min;
}

let totalKms = 0;
let size=DIAS.length;
for (let i=0; i < size;i++){
  let kms = correr();
  totalKms += kms;
  console.log("El dia "+DIAS[i]+" "+ NOMBRE+" corrio "+kms);
  }
let promedio =totalKms/size;
console.log(`En promedio, ${NOMBRE} corrio ${promedio.toFixed(2)} Kms`);
