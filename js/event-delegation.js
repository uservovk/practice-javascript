//------------------------ADD BUTTON IN THE LIST-------------------

const container = document.querySelector('.js-container');

container.addEventListener('click', onClick);

function onClick(event) { 
    if (event.target.nodeName !== 'BUTTON') {
        return;
    };
    console.log(event.target.textContent);
};

const addBtnRef = document.querySelector('.js-add-btn');

addBtnRef.addEventListener('click', onAddBtnRefClick);

let labelCounter = 6;

function onAddBtnRefClick() {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = `Button ${labelCounter}`;
    
    container.appendChild(btn);
    
    labelCounter += 1;
};
//-------ABLE TO CHOOSE ONE ITEM AND ADD TO IT CLASS----------------------------------------------

// const tagsContainer = document.querySelector('.tags__js-container');

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(event) { 
//     let currentButton = null;

//     if (event.target.nodeName !== 'BUTTON') {
//         return;
//     };
    
//     const currentActiveBtn = document.querySelector('.tags__btn-active');

//     if (currentActiveBtn) {
//         currentActiveBtn.classList.remove('tags__btn-active');
//     };
//     // currentActiveBtn?.classList.remove('tags__btn-active');

//     const nextActiveBtn = event.target;
//     nextActiveBtn.classList.add('tags__btn-active');

//     currentButton = nextActiveBtn.dataset.value;
//     console.log(currentButton);
// };
//-----------ABLE TO CHOOSE MORE THEN ONE ITEM AND ADD CLASS TO THEM-------------------------------------------

const tagsContainer = document.querySelector('.tags__js-container');
const selectedTags = new Set();

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(event) {
    if (event.target.nodeName !== 'BUTTON') {
        return;
    };

    const btn = event.target;
    const tag = event.target.dataset.value;
    const isActive=btn.classList.contains('tags__btn-active');

    if (isActive) {
        selectedTags.delete(tag);
    } else {
        selectedTags.add(event.target.dataset.value);
    }

    event.target.classList.toggle('tags__btn-active');

    console.log(selectedTags);
};