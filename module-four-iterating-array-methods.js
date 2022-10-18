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
                                            //   C A L L B A C K

// const fnA = function (a, b, callback) {
//     const result = callback(a, b);
//     console.log(result);
// };

// fnA(5, 5, function (c, d) {
//     return c * d;
// });

// fnA(3, 3, function (e, r) {
//     return e / r;
// });
// -----------------------------------------------------------------------------

// const fnA = function (array,test) {
//     const filteredArray = [];

//     for (const el of array) {
//         const passed = test(el);
//         if (passed) {
//             filteredArray.push(el);
//         }
//     }
//     console.log(filteredArray);
// };

// fnA([1, 2, 3, 4, 5], function (value) {
//     return value > 3;
// });

// fnA([1, 2, 3, 4, 5, 6, 7, 8], function (value) {
//     return value <= 3;
// });

// const fruits = [
//     { name: 'apple', quantity: 200, isFresh: true },
//     { name: 'pear', quantity: 150, isFresh: false },
//     { name: 'banana', quantity: 100, isFresh: true },
// ];

// fnA(fruits, function (fruit) {
//     return fruit.quantity >= 150;
// });

// fnA(fruits, function (fruit) {
//     return fruit.name === 'apple';
// });
// -----------------------------------------------------------------------------------
                                            //    C L O U S U R E 

// const normalizedNumber = function (places) {
//     return function (number) {
//         return Number(number.toFixed(places));
//     };
// }

// const number2 = normalizedNumber(2);

// console.log(number2(1.2334456));


// const normNumber = function (places) {
//     const numbers = function (number) {
//         console.log(Number(number.toFixed(places)));
//     };
//     return numbers;
// };

// const number3 = normNumber(3);

// number3(5.876876);
// ----------------------------------------------------------------------------------

const fnA = (...args)=> {
    console.log(args);
};

fnA(1, 2, 3, 4, 5);