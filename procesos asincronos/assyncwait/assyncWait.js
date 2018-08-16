function handleError(err) {
  console.log(`Request failed: ${err}`);
}

//le agregue un setTimeout para probar conocimientos
setTimeout(
async function getLuke() {
  try {
    const response = await fetch('http://swapi.co/api/people/1/');
    const luke = await response.json();
    const responseHomeworld = await fetch(luke.homeworld);
    luke.homeworld = await responseHomeworld.json();
    console.log(`${luke.name} nacio en ${luke.homeworld.name}`);
  } catch (err) {
    handleError(err);
  }
},

2500);
