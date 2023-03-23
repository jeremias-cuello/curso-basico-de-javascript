// coercion significa la forma en que podemos cambiar un tipo de valor a otro tipo de valor
// hay dos tipos: coersiones implicitas y coerciones explicitas
// coersion implicita: cambia de un tipo de valor a otro tipo de valor
// coersion explicita: es al forma en que nosotros obligamos a que un valorde un tipo cambie a otro a valor de otro tipo si necesitamos que ese valor sea de otro valor distinto

var a = 4 + "7"; // concatenacion
console.log(typeof a); // string

var b = 4 * "7"; // coercion implicita, convierte "7" -> 7
console.log(typeof b); // number

var a = 20;
var b = a + "";

console.log(typeof b); // string

// coersion explicita
var c = String(a);

console.log(typeof c);

var d = Number(c);

console.log(typeof d);
