var estudiantes = ['Maria', 'Segio', 'Rosa', 'Daniel'];

function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

// con for
for (var i = 0; i < estudiantes.length; i++) {
  // saludarEstudiantes(estudiantes[i]);
}

// con for-of
for (const estudiante of estudiantes) {
  // saludarEstudiantes(estudiante);
}

while (estudiantes.length > 0) {
  var estudiante = estudiantes.shift();
  saludarEstudiantes(estudiante);
}

// while (estudiante = estudiantes.shift()) {
//   saludarEstudiantes(estudiante);
// }

// playground
/**
 * En este desafío tu función solution recibirá 3 parámetros:
 * Tu función debe retornar un array de elementos con las siguientes indicaciones:
 *
 * Si el parámetro deathCount es igual a 0, debes retornar un array con los mismos
 * elementos que tenía el array de estudiantes y agregando el elemento nuevo al final.
 * Si el parámetro deathCount es mayor a 0, debes retornar un array con los mismos
 * elementos del array estudiantes pero eliminando la cantidad de estudiantes que indica
 * el número deathCount y agregando el elemento nuevo al final.
 *
 * @param {String[]} estudiantes nombres de los estudiantes
 * @param {Number} deathCount
 * @param {String} nuevo nombre del nuevo estudiante
 * @returns nuevos estudiantes
 */
function solution(estudiantes, deathCount, nuevo) {
  if (deathCount === 0) {
    estudiantes.push(nuevo);
    return estudiantes;
  } else if (deathCount > 0) {
    for (var i = 0; i < deathCount; i++){
      estudiantes.pop();
    }
    estudiantes.push(nuevo);
    return estudiantes;
  }
}
