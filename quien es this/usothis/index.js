class Toggable {
  constructor(el) { // cuando se hace referencia a lo que se
    // recibe del button se acostumbra a encontrar button,el,element
    // inicializa el estado interno
    this.el = el;
    this.el.innerHTML = 'Off';
    this.actividad = false;
    //this.onClick  = this.onClick.bind(this); una variante
    this.el.addEventListener("click", this.onClick.bind(this));
    //el addEventListener define el this hacia el button no hacia
    //la instancia miBoton y lo que se necesita es hacia este ultimo
  }
  onClick() {
    //cambiar el estado interno
    // llamar a toggleText
    this.activated = !this.activated;
    this.toggleText();
  }
  toggleText() {
    //cambia el texto
    this.el.innerHTML = this.activated ? 'On' : 'Off';
  }
}

const button = document.getElementById("boton");

const miBoton = new Toggable(button);

/*

function saludar(nombre,apellido){
  console.log(`Hola ${nombre} ${apellido}`);
}
otra funcionalidad de bind para establecer un dato que no queremos que cambie
el primero es null pues sirve para referenciar this pero no se usa
y el segundo es el parametro que no cambiara
const saludarCarlos = saludar.bind(null,"Carlos");
*/