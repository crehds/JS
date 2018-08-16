const p1 = {
  x: 0,
  y: 4,
  /*estaba intentando con arrows functions y no se pudo realizar
  por un tema de ambito en el cual no reconoce como function
  a moverEnX
  */
  moverEnX: (x) => this.x += x,
  moverEnY: (y) => this.y += y,
};

const p2 = {
  x: 3,
  y: 0,
  moverEnX: function (x) {
    this.x += x;
  },

  moverEnY: function (y) {
    this.y += y;
  },

};

function pitagoras(p1, p2) {
  let x = p1.x - p2.x;
  let y = p1.y - p2.y;
  return Math.sqrt(x * x + y * y);
}

//se puede verificar que se puede declarar el objeto dentro
//de la invocacion , pero es necesario repetir los nombres
pitagoras(p1, {
  x: 20,
  y: -7,
});
pitagoras(p1, p2);
