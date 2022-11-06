function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('#controls>input');
const btnCreateRef = inputRef.nextElementSibling;
const btnDestroyRef = btnCreateRef.nextElementSibling;
const boxOfCreatedElements=document.querySelector('#boxes')

function createBoxes(amount){
  const createdBox = document.createElement('div');
  
  return createdBox*amount;
}
createBoxes()
document.boxOfCreatedElements.append()