//const s1 = 'Hello';
//console.log(typeof s1);

//const s2 = new String('Hello');
//console.log(typeof s2);

//console.log(window);
// alert(1);
//console.log(navigator.appVersion); // This is not work

const book1 = {
    title: 'Book One',
    author: 'Subash Chauhan',
    year: '2020',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

const book2 = {
    title: 'Book Two',
    author: 'Rahul Gupta',
    year: '2022 ',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};
console.log(book2.getSummary());
console.log(Object.values(book2));
console.log(Object.keys(book2));