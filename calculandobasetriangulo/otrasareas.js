let base = 4;
let height = 5;
let radio  = 5;

const rectangularArea = (base, height) => base * height;
const cuadradoArea = (base)=>base * base;
const circleArea = (radio)=> Math.PI * Math.pow(radio, 2);

console.log(`El area de un rectangulo  de base ${base} y altura ${height} es:
  ${rectangularArea(base, height)}`);
console.log(`El area de un cuadrado de lado ${base} es :  ${cuadradoArea(base)}`);
console.log(`El area de un circulo de radio ${radio} es :  ${circleArea(radio)}`);
