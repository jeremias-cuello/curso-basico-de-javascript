/**
 * un objeto es un concepto del paradigma POO (Programacion Orientado a Objetos)
 * este paradigma surge de la necesidad de la abstraccion de la realidad a la programacion.
 * entonces se implementa esta abstraccion modelandola con un enfoque orientado a objetos.
 * un objeto es un tipo de dato que tiene:
 *  + propiedades. variables.
 *  + metodos (una funcion). un metodo es una funcion cuando pertenece a un objeto.
 * los atributos son el conjunto de propiedades y metodos.
 */

// sintaxis
var object = {};
// un objeto es un conjunto de atributos cuales se acceden por claves (o keys)
// los atributos se pueden entender por pares (clave-valor)
var object = {
  clave: 'valor',
  metodo: function (parametro) { // clave: 'metodo', valor: funcion
    return parametro + 1; // ejemplo
  }
};

// que es el this? es una variable que hace referencia al objeto del scope actual en donde estara this.
// a veces, algunas funciones van a tener this suelto y JS hara lo que pueda, pero para forzar
// a qué objeto referenciar, existe el operador `new` para referenciar a qué sera el objeto this

var miAuto = {
  marca: 'Toyota',
  modelo: 'Corolla',
  annio: 2020,
  antiguedad: function(){
    return Date().split(" ")[3] - this.annio;
  },
  detelleDelAuto: function () {
    return `Auto ${this.modelo} - ${this.annio}`;
  }
};

console.log(miAuto);
console.log('miAuto.marca: ' + miAuto.marca);
console.log('miAuto.annio: ' + miAuto.annio);
console.log('miAuto.antiguedad: ' + miAuto.antiguedad());
console.log('miAuto.detalleDelAuto: ' + miAuto.detelleDelAuto());

// funcion constructora
// es una funcion que fabrica los objectos en base al molde del objecto que le dimos (atributos)
function Auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

console.log(Auto);

// new hace atribuirle autoNuevo el this interno de Auto.
var autoNuevo = new Auto('Tesla', 'Model 3', 2020);
var autoNuevo2 = new Auto('Tesla', 'Model X', 2018);
var autoNuevo3 = new Auto('Tesla', 'Corolla', 2020);
console.log(autoNuevo);
console.log(autoNuevo2);
console.log(autoNuevo3);
