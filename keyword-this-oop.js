// function greetGuests(greeting) {
//     console.log(`${greeting}, ${this.guest}!`);
// };

// const poly = {
//     guest: 'Poly',
// };
// const lilly = {
//     guest: 'Lilly',
// };
// greetGuests.call(poly, 'Good morning');
// greetGuests.apply(lilly, ['Good afternoon']);
// -------------------------------------------------------------------------------
// function fnA() {
//     console.log('hello',this.name);
// };
// const userName = {
//     name: 'Bob',
// };
// userName.addFn = fnA;
// userName.addFn();

// const user = {
//     name: 'Fiona',
//     getName() {
//         console.log('this is ', this);
//     },
// };
// const outerGetName = user.getName;
// console.log(outerGetName === user.getName);
// outerGetName();
// ---------------------------------------------------------------------------

// const user = {
//     name: 'Ella',
//     age: 34,
//     occupation:'artist',

//     getInfo() {
//         console.log(user.name, user.age, user.occupation);
//     }
// };

// function fnA(callback) {
//     callback();
// };

// fnA(user.getInfo);
// ---------------------------------------------------------------------------------

// const Car = function ({brand,model,price}={}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// };

// Car.prototype.changePrice = function (newPrice) {
//     this.price = newPrice;
// };

// const myCar2 = new Car({
//     brand: 'Toyota',
//     model: 'Corolla',
//     price: 35000,
// });

// const myCar = new Car({
//     brand: 'Subaru',
//     model: 'Forester',
//     price: 40000,
// });
// myCar.changePrice(25000);
// ------------------------------------------------------------------------------

// class Fruit{
//     static description = 'description of a fruit';

//     static lofInfo(fruitObj) {
//         console.log(fruitObj);
//     }

//     #private = 'private';

//     constructor({ name, quantity, price } = {}) {
//         this._name = name;
//         this._quantity = quantity;
//         this._price = price;
//     }

//     set name(newName) {
//         this._name = newName;
//     }

//     get name() {
//         return this._name;
//     }

//     set price(newPrice){
//         this._price = newPrice;
//     }
    
//     get price() {
//         return this._price;
//     }

//     set quantity(newQuantity) {
//         this._quantity = newQuantity;
//     }

//     get quantity() {
//         return this._quantity;
//     }
// };

// console.dir(Fruit);

// const myFruit = new Fruit({
//     name: '🍎',
//     quantity: 250,
//     price:2,
// });

// console.log(myFruit.name);
// myFruit.name = '🍋';
// console.log(myFruit.name);
// myFruit.price = 1.5;
// console.log(myFruit);
// console.log(myFruit.quantity);
// console.log(myFruit.price);
// ----------------------------------------------------------------------------

class Hero{
    constructor({name='hero',xp=0}={}) {
        this.name = name;
        this.xp = xp;
    }

    gainXp(amount) {
        this.xp += amount;
        console.log(`${this.name} gets ${amount} experience`);
    }
}

class Warrior extends Hero{
    constructor() {
        super();
    }
}
const mango = new Warrior({
    name: 'Mango',
    xp:1000,
})