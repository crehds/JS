const starWars7 ='Star wars: El despertar de la fuerza';
const pgStarWars7 = 13;

const nameCarlos = 'Carlos';
const ageCarlos ='24';

const nameLeo = 'Leo';
const ageLeo ='10';

const canWatchStarWars7 = (name,age,isWithAdult=false) => {
  if(age >= pgStarWars7 ){
    console.log(`${name} puede pasar a ver ${starWars7}`);
  } else if(isWithAdult) {
    console.log(`${name} puede pasar a ver ${starWars7}.
      Aunque su edad es ${age}, se encuentra acompañado/o por un adulto`);
  }else {
    console.log(`${name} no puede pasar a ver ${starWars7}.
      Tiene ${age} años y necesita tener ${pgStarWars7}`);
  }
}

console.log(canWatchStarWars7(nameCarlos,ageCarlos));
console.log(canWatchStarWars7(nameLeo,ageLeo));
