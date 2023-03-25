/**
 * reglas para determinar instrucciones en funcion de condiciones
 */

if(true){
  // ejecutará esto
  console.log('Primer if. Caso true');
} else {
  // esto no
  console.log('Primer if. Caso false');
}

if(false){
  // esto no
  console.log('Segundo if. Caso true');
} else {
  // ejecutará esto
  console.log('Segundo if. Caso false');
}

// if(/*condicion1*/){
//   // ejecuta esto y continua con el programa
// } else if(/*condicion2*/) {
//   // si es falsa condicion1 y si es verdadera condicion2
//   // ejecuta esto
// } else {
//   // si condicion1 y condicion2 es falsa
// }

// example
var edad = 18;

if(edad === 18){
  console.log('Podes votar, sera tu primera votacion');
} else if(edad > 18) {
  console.log('Podes votar.');
} else {
  console.log('No podes votar.');
}

// y se pueden anidar siguientes else if(){}

// operador ternario
// condicion ? true : false;

var numero = 2;
var resultado = numero === 1 ? "Si soy un uno" : "No soy un uno";

console.log(resultado);

// reto

var piedra = 'Piedra';
var papel = 'Papel';
var tijera = 'Tijera';

var yo = tijera;
var compu = tijera;

function determinarJuego(usuario, computadora) {
  // if(usuario === computadora) return 'Empate';
  // else if(usuario === piedra){
  //   if(computadora === papel) return 'Gana la computadora';
  //   else return 'Gana el usuario';
  // } else if(usuario === papel){
  //   if(computadora === tijera) return 'Gana la computadora';
  //   else return 'Gana el usuario';
  // } else if(usuario === tijera){
  //   if(computadora === piedra) return 'Gana la computadora';
  //   else return 'Gana el usuario';
  // }

  return usuario === compu ? 'Empate'
  :usuario === piedra ?
    computadora === papel ? 'Gana la computadora'
    : 'Gana el usuario'
  :usuario === papel ?
    computadora === tijera ? 'Gana la computadora'
    : 'Gana el usuario'
  : usuario === tijera ?
    computadora === piedra ? 'Gana la computadora'
    : 'Gana el usuario'
  : null;
}

var resultado = determinarJuego(yo, compu);

console.log(resultado);
