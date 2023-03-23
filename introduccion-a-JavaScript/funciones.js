/**
 * Conjunto de sentencias que usamos para generar ciertas acciones
 * con las variables.
 * Procedimiento o tareas para hacer ciertos pasos calculos, etc.
 */

// Declarativas
function miFuncion(){ // declaro una funcion con nombre miFuncion
  return 3;
}

// function es una palabra reservada para declara funciones
// la funcion de igual forma va a guardar ciertos valores, asique
// los motores de JavaScript van a guardar otro valor, una funcion,
// utilizan el nombre de la funcion como palabra reservada para acceder
// al valor: Function. Guarda el calculo o la operacion que estemos guardando

// Expresion
var miFuncion = function (a, b) { // declaro una variable con nombre mi Funcion y le asigno una funcion anonima
  return a + b;
}

function saludarEstudiantes(estudiante){
  console.log(estudiante);
}

saludarEstudiantes("Jeremias");

function saludarEstudiantes(estudiante){
  console.log(`Hola ${estudiante}`);
}

saludarEstudiantes("Natanael");

// return es una palabra reservada para retornar los resultados de las funciones
function sumar(a, b) {
  var resultado = a + b;
  return resultado;
}

console.log(sumar(1, 2));

function sumar(a, b) {
  return a + b;
}

console.log(sumar(5, 8));

// cual es la diferencia entre una funcion declarativa y otra de expresion?
// podemos encontrarla en un concepto llamado Hoisting (Izar, o llamado burbujear)
// significa poder llamar una funcion y luego definirla

miFunction2();

function miFunction2() {
  console.log("Funcion statement");
}

// del modo de expresion no se puede hacer esto

miFunction3();

var miFunction3 = function() {
  console.log("Funcion expressions");
}

console.log(typeof miFunction2); // function

// ¿Porque pasa esto?
// las declaraciones de variable var lo que hacen es encerrarse en una
// burbuja y elevarse hasta arriba de todo el codigo asentando que se
// declaran primero, luego se utilizan, function tambien es un tipo de dato: Function
// y tiene ésta misma caracteristica que tiene var

var nombre = "Jeremias";
// los motores hacen:
var nombre;
nombre = "Jeremias";

// es por eso que se crachea el programa en Function Expression:

miFunction3();
var miFunction3 = function() { console.log("Funcion expressions"); }

// Luego
miFunction3();
var miFunction3;
miFunction3 = function() { console.log("Funcion expressions"); }

// Luego por causa de "burbujear el var"
var miFunction3; // miFunction: undefined
miFunction3(); // miFunction3 is not a Function. taraaan!
miFunction3 = function() { console.log("Funcion expressions"); }


// Luego con Funcion statement

miFunction2();

function miFunction2() {
  console.log("Funcion statement");
}

// Se aplica Hoisting y...

function miFunction2() {
  console.log("Funcion statement");
}
// miFunction2: Funcion
miFunction2();
