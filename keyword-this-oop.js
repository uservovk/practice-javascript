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

const Car = function ({brand,model,price}={}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
};

const myCar = new Car({
    brand: 'Honda',
    model: 'Civic',
    price: 30000,
});

Car.prototype.changePrice = function (newPrice) {
    this.price = newPrice;
};
myCar.changePrice(25000);

const myCar2 = new Car({
    brand: 'Toyota',
    model: 'Corolla',
    price: 35000,
});

const myCar3 = new Car({
    brand: 'Subaru',
    model: 'Forester',
    price: 40000,
});

