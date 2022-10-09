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


const numbers = [43, 54, 3, 44, 23, 5, 57];
let smallestNumber = numbers[0];

for (let number of numbers) {
        if (number < smallestNumber) {
                smallestNumber=number;
        }
}
console.log(smallestNumber);