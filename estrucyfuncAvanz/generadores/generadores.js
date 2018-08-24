function* fibonacci() {
  let a = 0;
  let b = 1;

  while (true) {
    let f = a;
    a = b;
    b = f + a;
    yield f;//se detiene el ciclo aqui

    //con yield, js ejecutara en el siquiente llamado
    //a partir del espacio en blanco
  }
}

//Forma con reset
function* fibonacci() {
  let a = 0;
  let b = 1;

  while (true) {
    let f = a;
    a = b;
    b = f + a;
    let reset = yield f;
    if (reset == true) a = 0, b = 1;
  }
}

const fibo = fibonacci();//para cualquier forma
