//sem template literal

const book = {
    name: 'Learning Javascript DataStructures and Algorithms'
};
console.log('you are reading ' + book.name + '.,\n and this is a new line\n and so is this.') 


// com template literal
console.log(`you are reading ${book.name},.
    and this is a new line
    and so is this.`);