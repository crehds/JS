/*function Punto(x,y){
  this.x =x;
  this.y=y;
}
Punto.prototype.moverEnX=function moverEnX(x){
  this.x+=x;
  console.log(x);
}
Punto.prototype.moverEnY=function moverEnY(y){
  this.y+=y;
}
Punto.prototype.distancia=function distancia(p){
  const x =this.x-p.x;
  const y=this.y-p.y;
 return Math.sqrt(x*x+y*y);
}
const p1 =new Punto(0,4);
const p2 =new Punto(3,0);
*/

//punto es un objeto porque esta entre llaves
const Punto = {
  //sera como el constructor
  ini: function (x, y) {
    this.x = x;
    this.y = y;
  },

  moverEnX: function moverEnX(x) {
    this.x += x;
  },

  moverEnY: function moverEnY(y) {
    this.y += y;
  },

  distancia: function distancia(p) {
    const x = this.x - p.x;
    const y = this.y - p.y;
    return Math.sqrt(x * x + y * y);
  },

};

const p1 = Object.create(Punto);
const p2 = Object.create(Punto);
p1.ini(0, 4);
p2.ini(3, 0);

console.log(p1.distancia(p2));
console.log(p2.distancia(p1));
p1.moverEnX(10);
console.log(p1.distancia(p2));
p2.moverEnY(-4);
console.log(p1.distancia(p2));
