// Constructor
function  Book(title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;

   this.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

// Instatiate an Object
const book1 = new Book('Book One','Subash Chauhan','2020');
const book2 = new Book('Book One','Rahul Gupta','2022');

console.log(book1) ;