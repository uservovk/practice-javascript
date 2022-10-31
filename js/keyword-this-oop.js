function greetGuests(greeting) {
    console.log(`${greeting}, ${this.guest}!`);
};

const poly = {
    guest: 'Poly',
};
const lilly = {
    guest: 'Lilly',
};
greetGuests.call(poly, 'Good morning');
greetGuests.apply(lilly, ['Good afternoon']);
-------------------------------------------------------------------------------
function fnA() {
    console.log('hello',this.name);
};
const userName = {
    name: 'Bob',
};
userName.addFn = fnA;
userName.addFn();

const user = {
    name: 'Fiona',
    getName() {
        console.log('this is ', this);
    },
};
const outerGetName = user.getName;
console.log(outerGetName === user.getName);
outerGetName();
---------------------------------------------------------------------------

const user = {
    name: 'Ella',
    age: 34,
    occupation:'artist',

    getInfo() {
        console.log(user.name, user.age, user.occupation);
    }
};

function fnA(callback) {
    callback();
};

fnA(user.getInfo);
---------------------------------------------------------------------------------

const Car = function ({brand,model,price}={}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
};

Car.prototype.changePrice = function (newPrice) {
    this.price = newPrice;
};

const myCar2 = new Car({
    brand: 'Toyota',
    model: 'Corolla',
    price: 35000,
});

const myCar = new Car({
    brand: 'Subaru',
    model: 'Forester',
    price: 40000,
});
myCar.changePrice(25000);
------------------------------------------------------------------------------

class Fruit{
    static description = 'description of a fruit';

    static logInfo(fruitObj) {
        console.log(fruitObj);
    }

    #private = 'private';

    constructor({ name, quantity, price } = {}) {
        this._name = name;
        this._quantity = quantity;
        this._price = price;
    }

    set name(newName) {
        this._name = newName;
    }

    get name() {
        return this._name;
    }

    set price(newPrice){
        this._price = newPrice;
    }
    
    get price() {
        return this._price;
    }

    set quantity(newQuantity) {
        this._quantity = newQuantity;
    }

    get quantity() {
        return this._quantity;
    }
};

console.dir(Fruit);

const myFruit = new Fruit({
    name: '🍎',
    quantity: 250,
    price:2,
});

console.log(myFruit.name);
myFruit.name = '🍋';
console.log(myFruit.name);
myFruit.price = 1.5;
console.log(myFruit);
console.log(myFruit.quantity);
console.log(myFruit.price);
----------------------------------------------------------------------------

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

-------------------------------------------------------------------------------
                                                    '🦸‍♂️'
class Hero{
    static description = 'basic hero';

    constructor({name='hero',xp=0}={}) {
        this.name = name;
        this.xp = xp;
    }

    gainXp(value) {
        console.log(`${this.name} gets ${value} xp`);
        this.xp += value;
    }
    getXp() {
        return (`${this.name} has ${this.xp} xp`)
    }

};

const myHero = new Hero({name:'Kiwi',xp:100});

myHero.gainXp(200);
console.log(myHero.getXp());


class Warrior extends Hero{
    constructor({weapon,...restProps}={}) {
        super(restProps);
        this.weapon = weapon;
    }

    attack() {
        console.log(`${this.name} attacks with ${this.weapon}`);
    }
}

const myWarrior = new Warrior({name:'Poly', xp:200, weapon:'sword'});
myWarrior.attack();
myWarrior.gainXp(200);
console.log(myWarrior.getXp());

class Berserk extends Warrior{
    constructor({warcry,...restProps} = {}) {
        super(restProps);
        this.warcry = warcry;
    }
    babyRage() {
        console.log(`${this.name} rages ${this.warcry}`);
    }
}

const myBerserk = new Berserk({ name: 'Ajax', xp: 400, weapon: 'ax', warcry: 'waaaaaa' });

myBerserk.babyRage();
myBerserk.attack();
myBerserk.gainXp(350);
console.log(myBerserk.getXp());
------------------------------------------------------------------------------------------
class Storage{
    constructor(items) {
        this.items = items;
    }

    getItems() {
        return this.items;
    }
    addItems(newItem) {
        this.items.push(newItem);
    }
    removeItems(itemName) {
        this.items = this.items.filter((item) => item !== itemName);
    }
}

const storage = new Storage(['🍎', '🍐', '🍍', '🥭']);

console.log(storage.getItems());
storage.addItems('🥝');
console.log(storage.getItems());
storage.removeItems('🍍');
console.log(storage.getItems());
------------------------------------------------------------------------

class Notes{
    static Priority = {
        LOW: 'low',
        NORMAL: 'normal',
        HIGH: 'high',
    };

    constructor(items) {
        this.items = items;
    }

    addNotes(item){
            this.items.push(item);
    }
    
    removeNote(noteText) {
        this.items = this.items.filter(({ text }) => text !== noteText);
    }
    
    updateNote(text,priority) {
        this.items = this.items.map((item) => item.text === text
            ? { ...item, priority }
            : item);
    }
}

const myNotes = new Notes([]);

myNotes.addNotes({text:'On Friday morning learn js',priority:Notes.Priority.HIGH,})
myNotes.addNotes({text:'In the afternoon i have to go shopping',priority:Notes.Priority.NORMAL,})
myNotes.removeNote('On Friday morning learn js');
console.log(myNotes.items);
myNotes.updateNote('In the afternoon i have to go shopping', Notes.Priority.LOW);
console.log(myNotes.items);
---------------------------------------------------------------------------------------

class Toggle{
    constructor({ on = false } = {}) {
        this.on = on;
    }

    toggle() {
        this.on = !this.on;
    }
    // toggle() {
    //     this.on = this.on === true ? false : true;
    // }
}

const firstToggle = new Toggle({ on: true });
console.log(firstToggle.on);
firstToggle.toggle();
console.log(firstToggle.on);
firstToggle.toggle();
console.log(firstToggle.on);
firstToggle.toggle();
console.log(firstToggle.on);
firstToggle.toggle();

---------------------------------------------------------------------------
class StringBuilder{
    constructor(initialValue){
    this.value=initialValue;
    }
    getValue(){
    return this.value;
    }
    padEnd(str){
    this.value=this.value+str;
    }
    padStart(str){
    this.value=str+this.value;
    }
    padBoth(str){
    this.value=str+this.value+str;
    }
        padBoth(str) {
            this.padStart(str);
            this.padEnd(str);
            }
}

const builder = new StringBuilder(".");
console.log(builder.getValue());
builder.padStart("^");
console.log(builder.getValue());
builder.padEnd("^");
console.log(builder.getValue());
builder.padBoth("=");
console.log(builder.getValue());
----------------------------------------------------------------------------
class Storage {
    #items=[];
    constructor(items) {
    this.#items = items;
    }

    getItems() {
    return this.#items;
    }

    addItem(newItem) {
    this.#items.push(newItem);
    }

    removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems());
storage.addItem("Droid");
console.log(storage.getItems());
storage.removeItem("Prolonger");
console.log(storage.getItems());
-----------------------------------------------------------------------------

class Car {
    static #MAX_PRICE = 50000;
    static checkPrice (price){
    return price<=Car.#MAX_PRICE?"Success! Price is within acceptable limits":"Error! Price exceeds the maximum";
    }

    constructor({ price }) {
    this.price = price;
    }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price));
console.log(Car.checkPrice(bmw.price));
-----------------------------------------------------------------------------

class User {
    email;

    constructor(email) {
        this.email = email;
    }

    get email() {
        return this.email;
    }

    set email(newEmail) {
        this.email = newEmail;
    }
}
class Admin extends User {

    static AccessLevel = {
        BASIC: "basic",
        SUPERUSER: "superuser",
    };

    constructor({ email, accessLevel }) {
        super(email);
        this.accessLevel = accessLevel;
    }

    blacklistedEmails=[];
    
    blacklist(email) {
        this.blacklistedEmails.push(email);
    }

    isBlacklisted(email){
        return this.blacklistedEmails.includes(email);
    }
}

const mango = new Admin({
    email: "mango@mail.com",
    accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); 
console.log(mango.accessLevel); 

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails);
console.log(mango.isBlacklisted("mango@mail.com")); 
console.log(mango.isBlacklisted("poly@mail.com")); 
