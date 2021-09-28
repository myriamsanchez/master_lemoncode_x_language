console.log("************** DELIVERABLE 01 *********************");
const animals: string[] = ["cat", "dog", "duck", "butterfly", "bee", "horse"];
console.log ("original array: ", animals);

console.log("head function (immutable), that returns first array element. Use destructuring");
const head = ([head]: string[]) => head;
console.log(head(animals));

console.log("tail function (immutable), that returns all array elements but first. Use rest operator");
const tail = ([,...tail]: string[]) => tail;
console.log(tail(animals));

console.log("init function(immutable), that returns all array elements but last");
const init = (array: string[]) => array.slice(0, array.length-1);
console.log(init(animals));

console.log("last function(immutable), that returns last array element");
const last = (array: string[]) => array.slice(-1)[0];
console.log(last(animals));