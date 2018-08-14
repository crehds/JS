setTimeout(function callback() {
  console.log(`Ya paso 1 segundo`);
}, 0);/* este parametro definira el tiempo minimo
de ejecucion */

/*Este for puede tardar mas 1000 ms, el cual fue else {
establecido para setTimeout, por ellos se dijo
seria tiempo minimo porq puede ser mayor*/
for (let i = 0; i < 999999999; i++)

console.log('Hola');
