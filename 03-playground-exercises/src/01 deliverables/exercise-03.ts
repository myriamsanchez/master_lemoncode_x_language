console.log("************** DELIVERABLE 03 *********************");
console.log("Implementa una función `clone` que, a partir de un objeto de entrada `source` devuelva un nuevo objeto con las propiedades de `source`:");
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function clone(source: object) {
  return {...source}
}

const newObject = clone(a);
console.log(newObject, (newObject === a));

console.log("Implementa una función `merge` que, dados dos objetos de entrada `source` y `target`, devuelva un nuevo objeto con todas las propiedades de `target` y de `source`, y en caso de propiedades con el mismo nombre, `source` sobreescribe a `target`.");


function merge(source: object, target: object) {
  return {...target, ...source};
}

console.log(merge(a, b));