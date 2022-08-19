const path = require("path");

const notes = '/users/joe/notes.txt';

console.log(path.dirname(notes)) // /users/joe
console.log(path.basename(notes)); // notes.txt
console.log(path.extname(notes)); // .txt

console.log(path.basename(notes, path.extname(notes)))

console.log(path.resolve('path-module'))