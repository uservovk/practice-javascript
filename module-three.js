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

const keys = [];
const values = [];

const advert = {
    service: "apt",
};

const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {

if(apartment.hasOwnProperty(key)){
    keys.push(key);
    values.push(apartment[key]);
}
}

// -------------------------------------------------------------------

