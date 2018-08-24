function fibonacci(num) {
  if (num == 1) return 0;
  if (num == 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

fibonacci(5);

//añadiendo contador para  verificar cantidad de procesos
let cont = 0;
function fibonacci(num) {
  if (num == 1) return 0;
  if (num == 2) return 1;
  cont++;
  console.log(cont);
  return fibonacci(num - 1) + fibonacci(num - 2);
}

fibonacci(20);
