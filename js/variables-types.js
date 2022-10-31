let elementWidth = "50px";
const result = Number.parseInt(elementWidth);
console.log(typeof result);


let elementHeight = '200.11px';
elementHeight = Number.parseFloat(elementHeight);
console.log(elementHeight);


let salary = 1200.65748;
salary = salary.toFixed(2);
console.log(salary);


const value = 'today is friday';
console.log(Number(value));
console.log(typeof Number(value));


console.log(Math.pow(2,3));
console.log(2**3);


let prac = prompt('give me a number');
prac = Number(prac);
console.log(prac);
let power = prompt('give me a power');
power = Number(power);
console.log(power);
console.log(prac ** power);


const max = 100;
const min = 1;
const result = Math.round(Math.random() * (max - min) + min);
console.log(result);
const message = 'Q: how many symbols in this stroke?';
console.log(message.length);
const firstName = 'Alex';
const lastName = 'Vovk';
console.log(firstName + ' ' + lastName);
function add(a,b,c) {
console.log(`Addition result equals ${a+b+c}`);
}


add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);
const brand = 'Samsung';
const normalizedBrand = brand.toLowerCase(brand);
console.log(normalizedBrand);
const brand = 'SamSung';
const normalizedBrand = brand[0] + brand.slice(1).toLowerCase();
console.log(normalizedBrand);


const blockWord1 = 'spam';
const blockWord2 = 'sale';
const message = 'Do you want to go to Canada? It is not a spam.';
const message2 = 'Black Friday! BIG SALE!!!';


console.log(message.includes(blockWord1));
console.log(message2.includes(blockWord1));
console.log(message2.includes(blockWord2));
const normalizedMessage = message2.toLowerCase();
console.log(normalizedMessage.includes(blockWord2));
console.log(3 && 'NaN' && 34 && 'false' && 'hello' && 'finished');
const brand = 'samsung';
const normalizedBrand = brand[0].toUpperCase()+brand.slice(1);
console.log(normalizedBrand);
const x1 = 10;
const x2 = 30;
const number = 50;
console.log(`The number ${number} is under
    number ${x1}?`, number < x1);
console.log(x1 < number && number < x2);
console.log(number < x1 || number > x2);
const isOnline = true;
const isFriend = true;
const isDnd = false;
const canOpenChat = isOnline && isFriend && !isDnd;
console.log('Can open chat?', canOpenChat);
const sub = 'pro';
const canAccessSite = sub === 'pro' || sub === 'vip';
console.log('Can access the site?', canAccessSite);


function makeMessage (name, price) {
    const message =`You picked ${name}, price per item is ${price} credits`;
    return message;
}


function calculateTotalPrice (orderedQuantity, pricePerItem) {
    const totalPrice = orderedQuantity*pricePerItem;
    return totalPrice;
}


function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    const message=`You ordered droids worth ${orderedQuantity*pricePerDroid+deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`
    return message;
}


function isAdult(age) {
    const passed = age>=18;
    return passed;
}


function isValidPassword(password) {
    const SAVED_PASSWORD = 'jqueryismyjam';
    const isMatch = password===SAVED_PASSWORD;
    return isMatch;
}


function isAdult(age) {
    const canDrinkIf = age>=21;
    return canDrinkIf;
}


function checkAge(age) {
    let message;
    if (age >=18) {
    message = 'You are an adult';
    } else {
    message = 'You are a minor';
    }
    return message;
}


function checkStorage(available, ordered) {
  let message;
if(ordered>available){
  message='Not enough goods in stock!';
} else {
  message='Order is processed, our manager will contact you.';
}
  return message;
}


function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  totalPrice=pricePerDroid*orderedQuantity;
if (customerCredits<totalPrice) {
  message='Insufficient funds!';
} else {
  creditsLeft=customerCredits-totalPrice;
  message=`You ordered ${orderedQuantity} droids, you have ${creditsLeft} credits left`
}
  return message;
}


function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  if (password===null) {
    message =  'Canceled by user!';
  } else if (password==='jqueryismyjam') {
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }
  return message;
}


function checkStorage(available, ordered) {
  let message;
  if(ordered===0) {
    message='There are no products in the order!';
  } else if(ordered>available){
    message='Your order is too large, there are not enough items in stock!';
  } else{
    message='The order is accepted, our manager will contact you';
  }
  return message;
}


function isNumberInRange(start, end, number) {
  const isInRange = number>=start&&number<=end;
  return isInRange;
}


function checkIfCanAccessContent(subType) {
  const canAccessContent = subType==='pro'||subType==='vip';
  return canAccessContent;
}


function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange;
  return isNotInRange;
}


function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
if(totalSpent>=50000){
  discount=GOLD_DISCOUNT;
} else if(totalSpent>=20000&&totalSpent<50000){
  discount=SILVER_DISCOUNT;
} else if(totalSpent>=5000&&totalSpent<20000){
  discount=BRONZE_DISCOUNT;
} else{
  discount=BASE_DISCOUNT;
}
  return discount;
}


function checkStorage(available, ordered) {
  let message;
  message=ordered>available?'Not enough goods in stock!':'The order is accepted, our manager will contact you';
  return message;
}


function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
message=password===ADMIN_PASSWORD?'Access is allowed':'Access denied, wrong password!';
  return message;
}


function getSubscriptionPrice(type) {
  let price;
 switch (type) {
    case 'starter':
      price = 0;
      break;

    case 'professional':
      price = 20;
      break;

   case 'organization':
      price = 50;
      break;
  }
  return price;
}


function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  switch(password) {
  case null:
    message= "Canceled by user!";
    break;
  case ADMIN_PASSWORD:
    message = "Welcome!";
    break;
  default:
    message = "Access denied, wrong password!";
  }
  return message;
}


function getShippingCost(country) {
  let message;
switch(country){
  case 'China':
    price=100;
    message=`Shipping to ${country} will cost ${price} credits`;
    break;
  case 'Chile':
    price=250;
    message=`Shipping to ${country} will cost ${price} credits`;
    break;
  case 'Australia':
    price=170;
    message=`Shipping to ${country} will cost ${price} credits`;
    break;
  case 'Jamaica':
    price=120;
    message=`Shipping to ${country} will cost ${price} credits`;
    break;
  default:
    message='Sorry, there is no delivery to your country';
}
  return message;
}


function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`;
  return message;
}


const courseTopic = "JavaScript essentials";
const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];


function getSubstring(string, length) {
  const substring = string.slice(0, length) ;
  return substring;
}


function formatMessage(message, maxLength) {
  let result;
if(message.length<=maxLength){
  result=message;
} else{
  result=message.slice(0, maxLength)+'...';
}
  return result;
}


function normalizeInput(input) {
  const normalizedInput = input.toLowerCase();
  return normalizedInput;
}


function checkForName(fullName, name) {
  const result = fullName.includes(name);
  return result;
}


function checkForSpam(message) {
  let result;
  const normalizedMessage=message.toLowerCase();
  result=normalizedMessage.includes('sale')||normalizedMessage.includes('spam');
  return result;
}


  const option=323;
  let message;
  switch (option) {
    case 1:
      message = 'You can pick up your perchase from 12 o`clock tomorrow at our office';
      break;
    case 2:
      message = 'Courier will deliver your purchase between 9 a.m. and 6 p.m. tomorrow';
      break;
    case 3:
      message = 'Parcel will be send today';
      break;
    default:
      message = 'Our manager will call you back';
}
console.log(message);


function checkAge(age) {
  if (age>=18) {
    return "You are an adult";
  }
  return "You are a minor";
}


function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  }
  return "Access denied, wrong password!";
}


for (let i = 0; i < 5; i += 1){
  console.log(i);
}
console.log('abc');
for (let i = 12; i < 100; i += 10){
  console.log(i);
}
console.log('finished');


const minSalary = 500;
const maxSalary = 5000;
const employees = 4;
let totalSalary = 0;
for (let i = 1; i < employees; i += 1){
  const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
  console.log(`Salary of employee number ${i} - ${salary}`);
  totalSalary += salary;
}
console.log('Total salary:', totalSalary);


const min = 6;
const max = 13;
let total = 0;
for (let i = min; i <= max; i += 1){
  console.log(i);
  if (i % 2 === 0) {
    console.log('Even:', i);
  }
  total += i;
}
console.log('Total:', total);


function checkStorage(available, ordered) {
  if (ordered === 0) {
    return "Your order is empty!";
  } if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  }
    return "The order is accepted, our manager will contact you";
}


let balance = 10000;
const payment = 2000;
console.log(`Total price is ${payment}. Checking your balance`);
if (payment <= balance) {
    console.log('ok');
    balance -= payment;
    console.log(`Your balance is ${balance}.`);
} else {
    console.log('Not enough funds');
}
console.log('Operation completed!');


----------------------------------------GAME-----------------------------------------

const x = Math.round(Math.random() * 100 + 1);
let userInput;
do {
userInput = Number(prompt('Enter a number (1-100).'));
if (x > userInput) {
    console.log('x >', userInput);
} else if (x < userInput) {
    console.log('x <', userInput);
}
} while(x !==userInput)
console.log('You guessed!!!');
-----------------------------------------------------------------------------------------


const a = 120;
const b = 170;
if (a > 100 && b > 100) {
    console.log(a > b ? a : b);
    // console.log(Math.max(a, b));
} else {
    console.log(b + 323);
}


let link = 'https://my-site.com/about';
if (!link.endsWith('/'))
    // (link[link.length-1]!=='/')
        link += !link.endsWith('/') ? '/' : '';
    {
    link += '/';
}
console.log(link);


let link = 'https://somesite.com/about';
if (!link.endsWith('/') && link.includes('my-site')) {
    link += '/';
}
console.log(link);


const max = 100;
const min = 20;
for (i = min; i <= max; i += 1){
    if (i % 5 === 0) {
        console.log(i);
    }
}


const login = prompt('enter login');
if (login !== null) {
    if (login === 'admin') {
        const password = prompt('enter password');
        if (password === 'it is admin') {
            console.log('welcome');
        } else {
            console.log('wrong password');
        }
} else {
    console.log('I do not know you');
}
} else {
    console.log('canceled');
}