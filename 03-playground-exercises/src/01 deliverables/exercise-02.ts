console.log("************** DELIVERABLE 02 *********************");
const people: string[] = ["Paul", "John", "Lucy", "Becky", "Dan"];
const animals2: string[] = ["cat", "dog", "duck", "butterfly", "bee", "horse"];

console.log("concat function (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators");

const concat = (a: any[], b: any[]) => [...a, ...b];
console.log(concat(people, animals2));

console.log("*Opcional: Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2)");
const concatMulti = (...args: any[]) => {
  const newArray = [];
  args.forEach((element) => newArray.push(...element));
  return newArray;
};
console.log(concatMulti(people, animals2, people));