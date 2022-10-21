// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex=fruits.length-1;
// const lastElement = fruits[lastElementIndex];


// const teams = ['Real', 'Barcelona', 'Milan'];
// const teamNameToFind = 'Barcelona';
// let message;
// for (const team of teams) {
//         if (team === teamNameToFind) {
//                 message = 'There is a team that you are looking for';
//                 break;
//         }
//         message = 'There is no such a team';
// } console.log(message);


// const names = ['Ozone', 'Abtin', 'Zetta', 'Ashi', 'Tham'];
// const nameToFind = 'Ozone';
// let message;
// for (const name of names) {
//         if (name === nameToFind) {
//                 message = 'there is such a name';
//                 break;
//         } message = 'sorry,there is no such a name';
// } console.log(message);


// function getExtremeElements(array) {

// const firstElement = array[0];
// const lastElement = array[array.length - 1];
// return array = [firstElement, lastElement];
// }


// const colors = ['red', 'yellow', 'pink', 'green', 'purple', 'orange', 'blue'];
// // console.table(colors);
// // const lastIndex = colors.length - 1;
// for (let i = 0; i <= colors.length-1; i += 1){
//         console.log(colors[i]);
// }


// const colors = ['red', 'yellow', 'pink', 'green', 'purple', 'orange', 'blue'];
// const lastIndex = colors.length - 1;
// for (let i = 0; i <= lastIndex; i += 1){
//         colors[i] += '-1';
//         console.log(colors[i]);
// }


// if you do not need index or do not need to change element of array then use this:
// const colors = ['red', 'yellow', 'pink', 'green', 'purple', 'orange', 'blue'];
// for (const color of colors) {
//         console.log(color);
// }


// const cart = [12,33,99,23,24, 54, 75, 56, 34, 23];
// let total = 0;
// for (let i = 0; i < cart.length; i += 1){
//         // console.log(cart[i]);
//         cart[i] = Math.round(cart[i] * 1.1);
//         total += cart[i];
// }
// console.log(cart);
// console.log('Total:', total);


// const customers = [43, 45, 75, 34, 23];
// let total = 0;
// for (let customer of customers) {
//         total += customer;
// }
// console.log('Total:', total);


// const numbers = [23, 24, 25, 22, 11, 4, 6, 35, 66];
// let total = 0;
// // for (let i = 0; i < numbers.length; i += 1){
// //         // console.log(numbers[i]);
// //         if (numbers[i] % 2 === 0) {
// //                 // console.log('even!!!');
// //                 total += numbers[i];
// //         }
// // }
// for (const number of numbers) {
//         if (number % 2 === 0) {
//                 total += number;
//         }
// }
// console.log('Total:', total);

// --------------------------------------------------------

// const logins = ['dvsdvsv', 'savfv', 'asdfg', 'refrvc'];
// const loginToFind = 'asdfg';
// let message = `There is no login ${loginToFind}`;

// for (let i = 0; i < logins.length; i += 1){
//         const login = logins[i];

//         console.log('Login:', login);
//         console.log(`${login}===${loginToFind}:`, login === loginToFind);
//         if (login === loginToFind) {
//                 console.log('Yahoo!!!');
//                 message = `I found login ${loginToFind}`;
//                 break;
//         }
// }
// console.log(message);


// for (const login of logins) {
//         console.log('Login:', login);
//         console.log(`${login}===${loginToFind}:`, login === loginToFind);
//         if (login === loginToFind) {
//                 console.log('Yahoo!!!');
//                 message = `I found login ${loginToFind}`;
//                 break;
//         }
// }
// console.log(message);


// console.log(logins.includes(loginToFind));


// console.log(logins.includes(loginToFind) ?
//         `I found login ${loginToFind}` :
//         `There is no login ${loginToFind}`);
// ----------------------------------------------------------------------------------------------


// const numbers = [43, 54, 3, 44, 23, 5, 57, 1];
// let smallestNumber = numbers[0];

// for (let number of numbers) {
//         if (number < smallestNumber) {
//                 smallestNumber=number;
//         }
// }
// console.log(smallestNumber);

// -----------------------------------------------------------------

// const friends = ['Alex', 'Tom', 'Ella', 'Mike'];
// // let string = '';
// // for (const friend of friends) {
// //         string += friend + ',';
// // }
// // string = string.slice(0, string.length - 1);

// const string = friends.join(', ');
// console.log(string);

// ---------------------------------------------------------------

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';
// console.log(letters);
// for (const letter of letters) {
//         console.log(letter);
//         invertedString += letter === letter.toLowerCase()
//                 ? letter.toUpperCase()
//                 : letter.toLowerCase();

//         // if (letter === letter.toLowerCase()) {
//         //         console.log('it is a lowercase letter -', letter);
//         //         invertedString += letter.toUpperCase();
//         // } else {
//         //         console.log('it is an uppercase letter - ', letter);
//         //         invertedString += letter.toLowerCase();
//         // }
// }

// console.log('Inverted string:', invertedString);

// --------------------------------------------------------------------------------

// const title = 'Top 5 benefits of React Framework';

// // const normalizedTitle = title.toLowerCase();
// // console.log(normalizedTitle);
// // const words = normalizedTitle.split(' ');
// // console.log(words);
// // const slug = words.join('-');
// // console.log(slug);

// const slug1 = title.toLowerCase().split(' ').join('-');
// console.log(slug1);

// ----------------------------------------------------------------------------------

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [6, 7, 8, 9, 10, 11, 12];
// let total = 0;
// const numbers = array1.concat(array2);
// for (const number of numbers) {
//         total += number;
// }
// console.log(total);

// let total1 = 0;
// let total2 = 0;
// let total = 0;
// for (const array of array1){
//         total1 += array;
// }
// for (const array of array2) {
//         total2 += array;
// }
// console.log(total=total1+total2);

// ----------------------------------------------------------------------------

// const cards = [
//         'card-1',
//         'card-2',
//         'card-3',
//         'card-4',
//         'card-5'
// ];
// const cardToRemove = 'card-3';
// const index = cards.indexOf(cardToRemove);
// cards.splice(index, 1);
// console.table(cards);
// cards.splice(1, 0, 'cards-extra', 12);
// console.table(cards);
// cards.splice(2, 1, 555);
// console.table(cards);

// ---------------------------------------------------------------------------------


// function splitMessage(message, delimiter) {
//         let words;
//         words=message.split(delimiter);
//         return words;
// }
// -----------------------------------------------------------

// function calculateEngravingPrice(message, pricePerWord) {

// let number;
// number=message.split(' ').length*pricePerWord;
// return number;
// }
// ------------------------------------------------------------------------------------

// function createArrayOfNumbers(min, max) {

// const numbers = [];
// for(let i=min; i<=max; i+=1){
//         numbers.push(i);
// }
//         return numbers;
// }

// --------------------------------------------------------------------------------

// function filterArray(numbers, value) {

// const list=[];

//         for (const number of numbers) {
//         if (number > value) {
//         list.push(number);
// }
// }       return list;
// }

// -------------------------------------------------------------------------------

// function checkFruit(fruit) {
// const fruits = ["apple", "plum", "pear", "orange"];

// return fruits.includes(`${fruit}`);
// }

// -----------------------------------------------------------------------------

// function getCommonElements(array1, array2) {
// const common=[];
// for(const number of array1){
// if(array2.includes(number)){
//         common.push(number);
//         console.log(common)
// }
// }
//         return common;
// }

// ----------------------------------------------------------------------------------

// function compare(value) {
//     if (value > 50) {
//         return 'number bigger then 50';
//     } return 'number smaller then 50';
// }
// console.log('result is:', compare(40));
// console.log('result is:', compare(55));
// -----------------------------------------------------------------------

// const fnA = function () {
//     console.log('Function A is running');
//     fnB();
// }

// const fnB = function () {
//     console.log('Function B is running');
//     fnC();
// }

// const fnC = function () {
//     console.log('Function C is running');
// }

// fnA();

// ------------------------------------------------------------------------

// const calculateTotalPrice = function (items) {
//     console.log('items inside function:', items);
//     let total = 0;
//     for (const item of items) {
//         total += item;
//     }
//     return total;
// }
// const result = calculateTotalPrice([1, 2, 3, 4, 5]);
// console.log(`Sum: ${result}`);
// console.log(calculateTotalPrice([6, 7, 8, 9, 10]));
// console.log(calculateTotalPrice([11, 12, 13, 14, 15]));

// -----------------------------------------------------------------------------

// const logins = ['qwer', 'asdf', 'zxcv', 'qaz'];

// const findLogin = function (allLogins, loginToFind) {

//     for (const login of allLogins) {
//         if (login === loginToFind) {
//             return `Login ${loginToFind} is found`;
//         }
//     }
//     return `Login ${loginToFind} is not found`;
// }

// const findLogin = function (allLogins, loginToFind) {
//     const message = allLogins.includes(loginToFind) ?
//         `Login ${loginToFind} is found` :
//         `Login ${loginToFind} is not found`;
//     return message;
// }

// const findLogin = function (allLogins, loginToFind) {
//     return allLogins.includes(loginToFind) ?
//         `Login ${loginToFind} is found` :
//         `Login ${loginToFind} is not found`;
// }

// console.log(findLogin(logins,'eqew'));
// console.log(findLogin(logins,'asdf'));
// console.log(findLogin(logins,'qwaszx'));
// console.log(findLogin(logins,'zxcv'));
// --------------------------------------------------------------------------


// const compare = function (numbers) {
//     let smallestNumber = numbers[0];

//     for (const number of numbers) {
//         if (number < smallestNumber) {
//             smallestNumber = number;
//         }
//     }
//     return smallestNumber;
// }
// console.log(compare([12, 32, 42]));
// -----------------------------------------------------------------------------

// const changeCase = function (string) {
//     const letters = string.split('');
//     let invertedString = '';

//     for (const letter of letters) {

//         invertedString += letter === letter.toLowerCase()
//             ?letter.toUpperCase()
//             :letter.toLowerCase();
//     }
//     return invertedString;
// }

// console.log(changeCase('jAVAsCRIPT'));
// --------------------------------------------------------------------------------

// const slugify = function (title) {

//     return title.toLowerCase().split(' ').join('-');
// }

// console.log(slugify('Top 5 benefits of React Framework'));
// ----------------------------------------------------------------------------------



// ///////////////// псевдоелемент (...rest)


// this is old-school method //

// const fn = function () {
//     const args = Array.from(arguments);
//     console.log(args);
// }

// this is new method //

// const fn = function (...args) {
//     console.log(args);
// }


// const fn = function (a, b, c, ...args) {
//     console.log(`${a} ${b} ${c}`);
//     console.log(args);
// }

// fn('hello:', 1, 2, 3, 4);
// fn('aloha:', 4, 5, 6, 7, 8);
// fn('hi:', 7, 8, 9, 10, 11, 12);
// ------------------------------------------------------------------------

// const add = function (...args) {
//     console.log(args);
//     let total = 0;
//     for (const arg of args) {
//         total += arg;
//     }
//     return total;
// }


// console.log(add(1, 2, 3, 4, 5));
// console.log(add(6, 7, 8, 9, 10, 11, 12));
// console.log(add(13, 14, 15, 16, 17, 18, 19));
// ---------------------------------------------------------------------------

// const filterNumbers = function (array, ...args) {
//     // console.log('array:',array);
//     // console.log('args:', args);
//     const uniqueElement = [];

//     for (const element of array) {
//         if (args.includes(element)) {
//             uniqueElement.push(element);
//         }
//     }
//     return uniqueElement;
// }

// console.log(filterNumbers([1,2,3],4,3,6,7));
// console.log(filterNumbers([2,9,10,11],2,13,14,15));
// console.log(filterNumbers([16,17,18,19],20,21,17,23,24));
// -------------------------------------------------------------------

// const string = 'welcome to the school';
// let reversedString = '';

// for (let i = string.length - 1; i >= 0; i -= 1){
//         reversedString += string[i];
// };

// console.log(reversedString);
// --------------------------------------------------------------------------------------

// const prog = ['python', 'java', 'c++', 'java script', 'php', 'kotlin'];

// for (let i = 0; i < prog.length-1; i +=1){
//         for (let j = i + 1; j < prog.length; j += 1){
//                 const word1 = prog[i];
//                 const word2 = prog[j];

//                 if (word1[0] > word2[0]) {
//                         prog[i] = word2;
//                         prog[j] = word1;
//                 }
//         }
// };
// console.log(prog);
// ---------------------------------------------------------------------------------------------

// const bmi = calcBMI('88,4', '1.75');

// function calcBMI(weight, height) {
//         const weightNum = Number(weight.replace(',','.'));
//         const heightNum = Number(height.replace(',','.'));
        
//         return Number((weightNum / Math.pow(heightNum, 2)).toFixed(1));
// }
// console.log(bmi);
// -------------------------------------------------------------------------------------

// function fnA(a, b) {
//         if (a > b) {
//                 return a;
//         } return b;
// };
// console.log(fnA(234, 765));

// function fnB(a, b) {
//         return a > b? a : b;
// };
// console.log(fnB(323, 643));


// const fnC=(a, b) => a > b? a : b;

// console.log(fnC(323, 143));
// -----------------------------------------------------------------------------

// function calc (string) {
//         const arr = string.split(' ');
        
//         // const a = arr[0];
//         // const b = arr[1];
//         const [a, b] = arr;
//         return Number(a) * Number(b);
// };

// console.log(calc('11 8'));
// ----------------------------------------------------------------------------------

/**
 * log items passed in array
 * @param {string[]} items 
 */



// function logItems(items) {
//         for (let i = 0; i < items.length; i += 1){
//                 console.log(`${i+1}-${items[i]}`);
//         }
// };

// logItems(['mango', 'kiwi', 'lemon', 'peach']);
// -----------------------------------------------------------------------------

// function fnC(names,numbers) {
//         const namesArr = names.split(',');
//         const numbersArr = numbers.split(',');
//         for (let i = 0; i < namesArr.length; i += 1){
//                 console.log(namesArr[i] , numbersArr[i])
//         }
// }

// function fnC(names, numbers) {
//         const namesArr = names.split(',');
//         const numbersArr = numbers.split(',');
//         let i = 0;
//         for (const name of namesArr) {
//                 console.log(name, numbersArr[i++]);
//         }
// }


// fnC('Sam,Billy,Jerry', '8564576,4947676,116767');
// ----------------------------------------------------------------------------

/**find the largest number in an array
//  * @param {number[]} numbers
 */

// function findLargestNumber(numbers) {
//         let max = numbers[0];
//         for (const number of numbers) {
//                 if (number > max) {
//                         max=number;
//                 }
//         } console.log(max)
// };


// function findLargestNumber(numbers) {
//         console.log(Math.max(...numbers));
// }

// findLargestNumber([56, 34, 87, 56, 34, 76]);
// --------------------------------------------------------------------------------

// function calcAverage() {
//         let sum = 0;
//         for (const element of arguments) {
//                 sum += element;
//         }
//         console.log(sum/arguments.length)
// }
// calcAverage(1, 2, 3, 4, 5);
// ----------------------------------------------------------------------------

// function formatTime(totalMinutes) {
//     const hours = Math.floor(totalMinutes / 60);
//     const minutes = totalMinutes % 60;
//     const doubleDigitHours = String(hours).padStart(2, 0);
//     const doubleDigitMinutes = String(minutes).padStart(2, 0);
//     return `${doubleDigitHours}:${doubleDigitMinutes}`;
// }

// console.log(formatTime(100));
// console.log(formatTime(350));
// console.log(formatTime(750));
// ---------------------------------------------------------------------------------------

const names = ['alex', 'john', 'felix', 'tom', 'jerry'];

// function addName(newName) {
//         if (names.includes(newName)) {
//             console.log(`there is ${newName} in the list`);
//             return;
//         } 
//         names.push(newName);
// };

// addName('tom');

// function removeName(nameRemove) {
//     const idx = names.indexOf(nameRemove);
//     if (idx === -1) {
//         console.log(`there is no name ${nameRemove}`);
//     }
//     names.splice(idx, 1);
// };

// removeName('alice');



// function updateNames(oldName, newName) {
//     const idx = names.indexOf(oldName);
//     if (idx === -1) {
//         console.log(`there is no name ${oldName}`);
//     }
//     names.splice(idx, 1,newName);
// }
// --------------------------------------------------------------------------------------