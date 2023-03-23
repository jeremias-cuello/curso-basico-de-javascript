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
