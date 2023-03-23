/**
 * Hoisting es cuando las variuables y las funciones se declaran antes que se procese cualquier tipo de codigo.
 */
/**
 * De versiones anterios de ECMAScript5 el Hoisting se aplica a var y function, pero como eran las unicas,
 * existia hoisting porque solo existia var y function, como tal sin execpciones.
 * De versiones despues de ECMAScript6 el Hoisting se aplica solo a var y function, let y const no.
 */

console.log(miNombre);
var miNombre = "Jeremias";

// es lo mismo que:
console.log(miNombre2);
var miNombre2; // se debería elevar
miNombre2 = "Jeremias";

// entonces
var miNombre3;
console.log(miNombre3); // undefined
miNombre3 = "Jeremias";

// ---- con let o const ---- //

// console.log(miApellido); // ERROR: miapellido is not defined
// let miApellido = "Cuello";

// console.log(miApellido2); // ERROR: miapellido2 is not defined
// const miApellido2 = "Cuello";

hey();

function hey() { // burbujea, bubble up, hoisting = izar
  console.log(`Hola ${miNombre}`);
}

// saludar();

// var saludar = function () {
//   console.log(`Hola ${miNombre}`);
// }

// Para evitar el Hoisting debemos primero definir las funciones
// arriba de todo y luego abajo debemos llamarlas.
