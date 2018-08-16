function fibonacci() {
  let a = 0;
  let b = 1;

  //Closure
  return {
    next: function () {
      let f = a;
      a = b;
      b = f + a;
      return { value: f, done: false };
    },
  };
}

const fibo = fibonacci();//guarda los resultados

fibo.next().value;

// ----- FORMA 2 ----------//

function fibonacci() {
  let a = 0;
  let b = 1;

  //Closure
  return {
    next: function () {
      let f = a;
      a = b;
      b = f + a;
      return { value: f, done: false };
    },
  };
}

const fibo = {};
fibo[Symbol.iterator] = fibonacci;//guarda el iterador creado
//a grandes rasgos se establece el funcionamiento del metodo next

let i = 0;
for (let value of fibo) {
  console.log(value);
  i++;
  if (i > 20) break;
}
