/**
 * es un estructura de dato de tipo objecto(object). es un valor que va a guardar mas valores adentro.
 * se pueden guardar numero, strings incluso objectos.
 */

// forma sintaxica de escribir un array
var frutas = ['banana', 'frutilla', 'manzana', 'cereza'];
console.log(frutas);
console.log('longitud del arreglo: ' + frutas.length);
// como acceder a manzana, banana, etc.?
console.log('accediendo a frutas[0]: '+ frutas[0]); // array[index] -> element
console.log('accediendo a frutas[2]: '+ frutas[2]);
// methods

console.log('agregando al final uvas y ciruelas');
// Array.push() es un metodo que agrega "al final" un elemento
var masFrutas = frutas.push('uvas', 'ciruelas');
console.log(frutas);

console.log('extrayendo el ultimo elemento');
// Array.pop() extrae el ultimo elemento del array. por lo tanto se puede entender que retorna el ultimo elemento. No tiene parametros (MDN)
var ultimo = frutas.pop();
console.log(frutas);
console.log('ultimo elemento extraido: ' + ultimo);


// Array.unshift() agrega nuevos elementos al principio del array y retorna nueva longitud
console.log('agregando al principio platano, nispero');
var nuevaLongitud = frutas.unshift("platano", "nispero");
console.log('nuevaLongitud: ' + nuevaLongitud);
console.log(frutas);

// Array.shift() es lo mismo que Array.pop() pero en vez de extraer el elemento del final, extrae el elemento del inicio
console.log('extrayendo el primer elemento');
var extraerFruta = frutas.shift();
console.log(frutas);
console.log('primer elemento extraido: ' + extraerFruta);

// resumiendo... todo se parece a tratar con pilas... como un cilindro sin tapas
// donde los elementos estan en el cuerpo del cilindro.
// los metodos con shift son para el principio del array.
// los otros (push y pop) son para el final del array.

// cada uno (los que operan al final y al princio) agregan y sacan elementos
// los que agregan: retornan la nueva logitud
// los que sacan: retornan el elemento que sacaron

// indexOf retorna el indice del elemento del array
var posicion = frutas.indexOf('manzana');
console.log('indice de \'manzana\': ' + posicion);
