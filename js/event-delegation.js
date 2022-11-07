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