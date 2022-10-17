// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number=>number%2===0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// -----------------------------------------------------------------------

// const books = [
//     {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//     },
//     {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//     },
//     {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//     },
// ];

// const allGenres = books.flatMap(book=>book.genres);
// const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);

// ----------------------------------------------------------------------------------------

// const books = [
//     {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//     },
//     {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//     },
//     {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books.filter(book=>book.rating>=MIN_RATING);
// const booksByAuthor = books.filter(books => books.author === AUTHOR);

// ----------------------------------------------------------------------------------

