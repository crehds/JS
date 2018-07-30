
function platzom(str){

  function minMay(str){
    const length =str.length;
    let translation="";
    let capitalize = true
    for (let i = 0;i<length;i++){
      const char =str.charAt(i);

    //operador ternario ? simboliza verdadero : simboliza falso
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;// =! simboliza que capitalize obtendra su valor contrario
      //si es falso sera verdadero y viceversa;
    }
    return translation;
  }

  const reverse = str => str.split("").reverse().join("");
    //regla 4
  if(str==reverse(str)) {
    return minMay(str);
  }

   let translation = str;
   //regla 1
   if(str.toLowerCase().endsWith('ar')){
     translation = str.slice(0,-2);
   }
   //regla 2
   if(str.toLowerCase().startsWith(`z`)){
      translation += 'pe';
     //translation = translation + 'pe';
   }
   //regla 3
   const length = translation.length;
   if(length >= 10){
     const firstHalf = translation.slice(0, Math.round(length/2));
     const secondHalf = translation.slice(Math.round(length/2));
     translation = firstHalf+"-"+secondHalf;
     //;
   }

return translation;
}
console.log(platzom("Programar"));
console.log(platzom("Zorro"));
console.log(platzom("Zarpar"));
console.log(platzom("abecedario"));
console.log(platzom("sometemos"));
