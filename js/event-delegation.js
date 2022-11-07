const container = document.querySelector('.js-container');

container.addEventListener('click', onClick);

function onClick(event) { 
    console.log(event.target);
};