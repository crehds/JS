let starWars7 = 'Star wars: El despertar de la fuerza';
let pgStarWars7 = 13;

let nameCarlos = 'Carlos';
let ageCarlos = '24';

let nameLeo = 'Leo';
let ageLeo = '10';

function canWatchStarWars7(name, age, isWithAdult = false) {
  if (age >= pgStarWars7) {
    alert(`${name} puede pasar a ver ${starWars7}`);
  } else if (isWithAdult) {
    alert(`${name} puede pasar a ver ${starWars7}.
      Aunque su edad es ${age}, se encuentra acompañado/o por un adulto`);
  } else {
    alert(`${name} no puede pasar a ver ${starWars7}.
      Tiene ${age} años y necesita tener ${pgStarWars7}`);
  }
}


canWatchStarWars7(nameCarlos, ageCarlos);
canWatchStarWars7(nameLeo, ageLeo, true);