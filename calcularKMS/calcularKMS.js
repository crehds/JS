
const nombre ='Sacha';
const dias=[
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
  const min = 5;
  const max = 15;
  return Math.round(Math.random() * (max-min)) + min;
}

let totalKms = 0;
const size=dias.length;
for (let i=0; i < size;i++){
  const kms = correr();
  totalKms += kms;
  console.log("El dia "+dias[i]+" "+ nombre+" corrio "+kms);
  }
const promedio =totalKms/size;
console.log(`En promedio, ${nombre} corrio ${promedio.toFixed(2)}`);
