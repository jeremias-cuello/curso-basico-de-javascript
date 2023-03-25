var numero = 1;

switch (numero) {
  case 1:
    console.log('Soy uno');
    break;
  case 10:
    console.log('Soy un diez');
    break;
  case 100:
    console.log('Soy un cien');
    break;
  default:
    console.log('No soy nada');
}

// reto: el reto anterior pero usando un switch

function determinarJuego(yo, compu) {
  if(yo === compu) return 'Empate';

  switch (yo) {
    case 'piedra':
      return compu === 'papel' ? 'Gana la compu.' :'Gana el usuario.';
    case 'papel':
      return compu === 'tijera' ? 'Gana la compu.' : 'Gana el usuario.';
    case 'tijera':
      return compu === 'piedra' ? 'Gana la compu.' : 'Gana el usuario.';
  }
}

var usuario = "tijera";
var computadora = "tijera";

var result = determinarJuego(usuario, computadora);
console.log(result);
