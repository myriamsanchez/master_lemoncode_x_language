console.log("************** DELIVERABLE 04 *********************");
console.log("Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro.");
console.log("Un libro es un objeto con `title` como string y `isRead` como booleano. En caso de no existir el libro devolver `false`");
console.log("TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.");
console.log("Opcional: Utiliza Typescript para añadir los tipos adecuados.");

interface Books {
  title: string,
  isRead: boolean,
}

const books: Books[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

function isBookRead(books: Books[], titleToSearch: string) {
  return books.find((element) => (element.title === titleToSearch))?.isRead ?? false;
}

console.log(isBookRead(books, "Los Juegos del Hambre"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Harry Potter y la piedra filosofal"));