function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('#controls>input');
const btnCreateRef = inputRef.nextElementSibling;
const btnDestroyRef = btnCreateRef.nextElementSibling;
const boxOfCreatedElements=document.querySelector('#boxes')

// createBoxes()
// document.boxOfCreatedElements.append();

// btnCreateRef.addEventListener('click', createBoxes);

inputRef.addEventListener('input',onInputRefInput)

let amount = 0;

function onInputRefInput(event) {
    // console.log(event.target);
    const amount= event.target.value;
    return amount;
    
};
// console.log(amount);
// console.log(onInputRefInput());
// btnCreateRef.addEventListener('click',createBoxes)

// function createBoxes(amount) {
//     const boxes = document.createElement('div');
//     return boxes * amount;
// };