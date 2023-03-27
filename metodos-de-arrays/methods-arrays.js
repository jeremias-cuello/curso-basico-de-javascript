var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "Tv", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 }
];

// nos devuelve otro arreglo con los elementos que cumplan la condicion
var articulosfiltrados = articulos.filter(function(a){
  return a.costo > 3000
});
console.log(articulosfiltrados);

// nos devuelve el mismo arreglo modificado
var nombreArticulos = articulos.map(function(a){
  return a.nombre
});
console.log(nombreArticulos);
