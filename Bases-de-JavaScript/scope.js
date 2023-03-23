/**
 * Scope: alcance que tienen las variables. Depende mucho de donde declares e inicialices la variable
 * para determinar si tenes acceso o no a las variables
 */
/**
 * Cuando un archivo y codigo de js se inicializa en el navegador, se genera
 * algo llamado scope global.
 * Hay dos tipos de scope, uno global y otro local. Los scopes locales
 * se anidan dentro del scope global.
 * En el Scope Global van a estar todas las variables, todas las validaciones,
 * todas las funciones que tengamos.
 * Una vez que inicializemos una funcion, dentro de éste se inicializa
 * un scope local. Esto quiere decir que todo lo que esta adentro de la funcion
 * va a tener acceso a eso mismo, todo lo que este adentro de la funcion y afuera.
 * Pero es diferente cuando desde el global se quiere acceder al local, no se puede.
 */

var nombre = "Jeremias";

function fun() {
  var apellido = "Cuello";
  return `${nombre} ${apellido}`;
}

console.log(fun());

// --------- //

var nombre = "Jeremias";

function fun() {
  var apellido = "Cuello";
  return `${nombre} ${apellido}`;
}

console.log(apellido); // ERROR: apellido is not defined

