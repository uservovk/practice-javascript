// // -------------------------OBJECTS----------------------

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {

// [emailInputName]: "henry.carter@aptmail.com",
// [passwordInputName]: "jqueryismyjam",
// };
// console.log(credentials)

// // ---------------------------------------------------------------

// {/* <input name='color' value='tomato'> */ }

// якщо нам треба отримати дані з input, то:

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//     [inputName]:inputValue,
// }
// console.log(colorPickerData);

// // ---------------------------------------------------------------
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment){
//     keys.push(key);
//     values.push(apartment[key]);
// }

// // ----------------------------------------------------------------------

// const keys = [];
// const values = [];

// const advert = {
//     service: "apt",
// };

// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {

// if(apartment.hasOwnProperty(key)){
//     keys.push(key);
//     values.push(apartment[key]);
// }
// }

// // -------------------------------------------------------------------

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {

//     for (const product of products) {
//     if(productName===product.name){
//     return product.price;
//     }
// }
// return null;
// }

// // -----------------------------------------------------------------------------

// function countTotalSalary(salaries) {
//     let totalSalary = 0;

// const values=Object.values(salaries);
//     for(const value of values){
//     totalSalary+=value;
// }
//     return totalSalary;
// }
// // ------------------------------------------------------------------------

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {

// for(const product of products){
//     if(productName===product.name){
//     return product.price*product.quantity;
//     }
// }
// return 0;
// }
// // --------------------------------------------------------------------------

// const friends = [
//     { name: 'Alex', online: true },
//     { name: 'John', online: false },
//     { name: 'Ella', online: true },
//     { name: 'Stan', online: false },
//     { name: 'Grey', online: true },
// ]

// const getFriendsByStatus = function (allFriends) {
//     const friendsByStatus = {
//         onlineFriends: [],
//         offlineFriends:[],
//     }

//     for (const friend of allFriends) {
//         if (friend.online) {
//             friendsByStatus.onlineFriends.push(friend.name);
//             continue;
//         }
//         friendsByStatus.offlineFriends.push(friend.name);
//     }
//     return friendsByStatus;
// }

// console.log(getFriendsByStatus(friends));
// // --------------------------------------------------------------------------------------

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const {hex,rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// };
// // ----------------------------------------------------------------------------

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// const { today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
//         tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }
//       } = forecast;
// // -------------------------------------------------------------------------------------------------

// function calculateMeanTemperature(forecast) {
//   const{today:{low:todayLow,high:todayHigh},tomorrow:{low:tomorrowLow,high:tomorrowHigh}}=forecast;

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// // ---------------------------------------------------------------------------------------------

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
  
//   const abc={completed,category,priority,...data}
//   console.log(abc)
// };
// makeTask({});
// // ----------------------------------------------------------------------------------------

// function a(...args) {
//   const numbers = [];
//   let total = 0;
//   for (const arg of args) {
    
//     if (args[0] < arg) {
//       numbers.push(arg);
//     }
//   }
//   for (const number of numbers) {
//     total += number;
//   }
//   return total;
// }
// a(10, 1, 9, 1, 3);
// // ------------------------------------------------------------------------------

// function findMatches(array, ...args) {
//   console.log(array);
//   console.log(args);
//   const matches = [];
//   for (const arg of args) {
//     if (array.includes(arg)) {
//       matches.push(arg);
//   }
// }
//   console.log(matches);
// }

// findMatches([1, 2, 3], 1, 4, 5);
// // ----------------------------------------------------------------------------

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {

// const bookIndex=this.books.indexOf(oldName);
// this.books.splice(bookIndex,1,newName);
//   },
// };

// // -------------------------------------------------------------------------------------

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
  
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for(const potion of this.potions){
//       if (potion.name===newPotion.name) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for(let i=0;i<this.potions.length;i+=1){
//       if (this.potions[i].name ===potionName) {
//       this.potions.splice(i, 1);
//     }
//     }
// return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for(const potion of this.potions){
//       if(potion.name===oldName){
//         potion.name=newName;
//       }
//     }
//       return `Potion ${oldName} is not in inventory!`;
//   },
// };

// // -------------------------------------------------------------------------------------------

// const cart = {
//   items: [],
  
//   getItems() {
//     const { items } = this;
//     return items;
//   },
  
//   add(product) {
//     const { items } = this;

//     for (const item of items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }
    
//     const newProduct = {
//       ...product,
//       quantity:1,
//     }
//     items.push(newProduct);
//   },
  
//   remove(productName) {
//     const { items } = this;
//     for (let i = 0; i < items.length; i+=1) {
//       const { name } = items[i];
//       // const item = this.items[i];
//       console.log(name);

//       if (productName === name) {
//         console.log('yahoo! we found it', productName);
//         console.log('index',i);
//         items.splice(i, 1);
//       }
//     }
//   },
  
//   clear() {
//     this.items = [];
//   },
    
//   countTotalPrice() {
//     const { items } = this;
//     let total = 0;
//     for (const {price, quantity} of items) {
//       console.log(price);
//       total += price*quantity;
//     } return total;
//   },
// };

// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'pear', price: 60 });
// cart.add({ name: 'lemon', price: 70 });
// cart.add({ name: 'lemon', price: 70 });
// cart.add({ name: 'strawberry', price: 80 });
// cart.add({ name: 'strawberry', price: 80 });

// console.table(cart.getItems());

// console.log('Total:',cart.countTotalPrice());

// const getProductTotalPrice = function ({ price, quantity }) {
//     return price * quantity;
//   }

// console.log(getProductTotalPrice(cart.items[2] ))


// cart.remove('apple')
// console.table(cart.getItems());
// cart.clear();
// console.log(cart.getItems());
// ----------------------------------------------------------------

// const user = {
//   name: 'Dima',
//   age: 25,
//   hobby: 'football',
// };

// user.age = 26;
// user['mood'] = 'happy';

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// };
// --------------------------------------------------------------------------------------

// const numbers = {
//   one: 53,
//   two: 66,
//   three: 56,
// };
// const values = Object.values(numbers);
// let total = 0;
// for (const number of values) {
//   total += number;
// };

// const sum = values.reduce((sum, number) => sum + number);
// --------------------------------------------------------------------------------------

// const stones = [
//   { name: 'red', price: 234, quantity: 5 },
//   { name: 'yellow', price: 456, quantity: 23 },
//   { name: 'blue', price: 678, quantity: 45 },
// ];

// const balls = [
//   { name: 'red', price: 124, quantity: 2 },
//   { name: 'yellow', price: 136, quantity: 3 },
//   { name: 'blue', price: 148, quantity: 5 },
// ];

// function calcTotalPrice(data, nameCalc) {
//   for (const element of data) {
//     // const name = element.name;
//     // const price = element.price;
//     // const quantity = element.quantity;
//     const { name, price, quantity } = element;
    
//     if (name === nameCalc) {
//       return quantity * price;
//     }
//   }
// };
// ------------------------------------------------------------------------
// const Transaction = {
//   DEPOSIT: 'DEPOSIT',
//   WITHDRAW: 'withdraw',
// };


// const account = {
//   balance: 0,
//   transactions: [],

//   createTransaction(amount, type) {
//     const transaction = {
//       id: this.transactions.length+1,
//       amount,
//       type,
//       date: new Date(),
//     };
//     this.transactions.push(transaction);
//   },

//   deposit(amount) {
//     this.balance += amount;
//     this.createTransaction(amount, 'deposit');
//   },

//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log('sorry, not enough fund');
//       return;
//     };
//     this.balance -= amount;
//     this.createTransaction(amount, 'withdraw');
//   },

//   getBalance() {
//     return this.balance;
//   },

//   getTransactionDetails(id) {
//     for (const tr of this.transactions) {
//       if (tr.id === id) {
//         return tr;
//       };
//     };
//     return 'transaction not found';
//   },

//   getTransactionTotal(type) {
//     let sum = 0;
//     for (const tr of this.transactions) {
//       if (tr.type === type) {
//         sum += tr.amount;
//       };
//     }; return sum;
//   },
// };

// account.deposit(100);
// account.deposit(500);
// account.withdraw(120);
// account.withdraw(68);
// account.deposit(143);
// account.withdraw(234);
// console.log(account.balance);
// console.log(account.transactions);
// console.log(account.getTransactionDetails(6));
// console.log(account.getTransactionTotal('withdraw'));
// account.withdraw(350);
// ------------------------------------------------------------------------------------------
