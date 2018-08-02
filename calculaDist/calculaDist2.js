const p1 ={
  x:0,
  y:4,

  //el this referencia que la segunda x pertenece a la function
  //osea al ambito donde esta no a la x anterior.
  /*moverEnX: function(x){this.x +=x},
  moverEnY: function(y){this.y +=y}*/

  moverEnX(x){
    this.x +=x;
  },
  moverEnY(y){
    this.y += y;
  }
};
//se verifica que se podria reutilizar el codifo como
//moverEnx con clases
const p2 ={
  x:3,
  y:0,
  moverEnX:function(x){this.x +=x},
  moverEnY:function(y){this.y +=y}
};

function pitagoras(p1,p2){
  let x= p1.x - p2.x;
  let y= p1.y -p2.y;
  return Math.sqrt(x*x+y*y);
}

//se puede verificar que se puede declarar el objeto dentro
//de la invocacion , pero es necesario repetir los nombres
pitagoras(p1,{x:20,y:-7});
pitagoras(p1,p2);
