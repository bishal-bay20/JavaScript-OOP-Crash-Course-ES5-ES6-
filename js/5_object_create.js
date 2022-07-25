// Object Of Protos
const bookProtos = {
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
   getAge: function() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
};

// Creare Object
//const book1 = Object.create(bookProtos);
//book1.title = 'Book One';
//book1.author = 'Subash Chauhan';
//book1.year = '2012';

const book1 = Object.create(bookProtos, {
 title: { value: 'Book One'},
 author: { value: 'Subash Chauhan'},
 year: { value: '2012'}
});

 


console.log(book1);