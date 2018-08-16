class Persona {
  constructor(nombre, amigos = []) {
    this.nombre = nombre;
    //this.amigos = amigos || []  sino se le envia parametros, se asignara un array vacio
    this.amigos = amigos;
  }
  //primera solucion para casos que requieran manipular this
  listarAmigos() {
    //muchos desarrolladores en vez de _this usan self
    const _this = this; //si se comenta esta linea generara error por un tema de contexto(detallar en cuaderno)
    this.amigos.forEach(function(amigo) {
      console.log(`Hola, mi nombre es ${_this.nombre} y soy amigo de ${amigo}`);
    });
  }
}

//segunda solucion
listarAmigos() {
  this.amigos.forEach(function(amigo) {
    console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`);
  }.bind(this)); //con este metodo que tienen todas las
  //funciones se puede recordarle el this del constructor
}
}

//tercera solucion
listarAmigos() {
  this.amigos.forEach((amigo) => {
    console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`);
  }); //en el funcionamiento de las arrows functions el this.nombre
  //apunta al this exterior, osea del cosntructor
}
}


const carlos = new Persona("Carlos", ["Pedro", "Juan", "Pepe"]);