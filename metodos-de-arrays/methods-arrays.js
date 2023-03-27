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

// .find() es un metodo que encuentra un elemento de un articulo

var encontrado = articulos.find(function(a){
  return a.nombre === 'Laptop';
});
var articulosfiltrados1 = articulos.filter(function(a){
  return a.nombre === 'Laptop'
});

// la diferencia entre filter y find en este caso es que:
// filter nos devuelve un arreglo aunque sea de un elemento, si no lo encuentra nos devuelve []
// find nos devuelve un elemento, si no lo encuentra nos devuelve undefined
console.log(encontrado);
console.log(articulosfiltrados1);

// recorre todo el array, devulve void
articulos.forEach(function(a){
  console.log(a.nombre);
});


// .some() nos devulve boolean. determina si existen elementos dentro del array que cumplan la condicion
var articulosBaratos = articulos.some(function(a){
  return a.costo <= 700
});

console.log(articulosBaratos);
