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
