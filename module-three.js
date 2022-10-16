// -------------------------OBJECTS----------------------

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {

// [emailInputName]: "henry.carter@aptmail.com",
// [passwordInputName]: "jqueryismyjam",
// };
// console.log(credentials)

// ---------------------------------------------------------------

{/* <input name='color' value='tomato'> */ }

// якщо нам треба отримати дані з input, то:

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//     [inputName]:inputValue,
// }
// console.log(colorPickerData);

// ---------------------------------------------------------------
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

// ----------------------------------------------------------------------

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

// -------------------------------------------------------------------

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

// -----------------------------------------------------------------------------

// function countTotalSalary(salaries) {
//     let totalSalary = 0;

// const values=Object.values(salaries);
//     for(const value of values){
//     totalSalary+=value;
// }
//     return totalSalary;
// }
// ------------------------------------------------------------------------

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
// --------------------------------------------------------------------------

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
// --------------------------------------------------------------------------------------

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
// ----------------------------------------------------------------------------

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
// -------------------------------------------------------------------------------------------------

// function calculateMeanTemperature(forecast) {
//   const{today:{low:todayLow,high:todayHigh},tomorrow:{low:tomorrowLow,high:tomorrowHigh}}=forecast;

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// ---------------------------------------------------------------------------------------------

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
  
//   const abc={completed,category,priority,...data}
//   console.log(abc)
// };
// makeTask({});
// ----------------------------------------------------------------------------------------

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
// ------------------------------------------------------------------------------

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
// ----------------------------------------------------------------------------

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {

// const bookIndex=this.books.indexOf(oldName);
// this.books.splice(bookIndex,1,newName);
//   },
// };

// -------------------------------------------------------------------------------------

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for(const potion of this.potions){
      if (potion.name===newPotion.name) {
      return `Error! Potion ${newPotion.name} is already in your inventory!`;
    }
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for(let i=0;i<this.potions.length;i+=1){
      if (this.potions[i].name ===potionName) {
      this.potions.splice(i, 1);
    }
    } 
return `Potion ${potionName} is not in inventory!`; 
  },
  updatePotionName(oldName, newName) {
    for(const potion of this.potions){
      if(potion.name===oldName){
        potion.name=newName;
      }
    }
      return `Potion ${oldName} is not in inventory!`;
  },
};

// -------------------------------------------------------------------------------------------

// const cart = {
//     items: [],
//   getItems() {
//     return this.items;
//     },
//   add(product) {
//     this.items.push(product);
//     },
//     remove(productName) { },
//     clear() { },
//     countTotalPrice() { },
//     increaseQuantity(productName) { },
//     decreaseQuantity(productName) { },
// };

// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'pear', price: 60 });
// cart.add({ name: 'lemon', price: 70 });
// cart.add({ name: 'strawberry', price: 80 });

// console.table(cart.getItems());

