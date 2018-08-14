function MakePrefixer(prefijo) {

  return function uneConPrefijo(palabra) {
    console.log(`esta es la palabra unida con su prefijo: ${prefijo}${palabra}`);
  };
}
/*//variante con arrows functions
MakePrefixer = prefijo => palabra => prefijo + palabra;
*/

const palabrita = MakePrefixer('re');
const palabrita1 = MakePrefixer('in');
