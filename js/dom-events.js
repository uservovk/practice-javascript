const navRef = document.querySelector('li');
// console.log(navRef);
const navLinksRef = document.querySelectorAll('.site-nav_link');
// console.log(navLinksRef);

const imgRef = document.querySelector('img');
// console.log(imgRef);
imgRef.src = './photos/pexels-cats-coming-1444321.jpg';
// -------------------------------------------------------
// console.log(imgRef.getAttribute('alt'));
// console.log(imgRef.getAttribute('src'));
// console.log(imgRef.getAttribute('width'));
// console.log(imgRef.height);
// console.log(imgRef.hasAttribute('alt'));
imgRef.removeAttribute('alt');
imgRef.alt = 'Sweet kitten';
// console.log(imgRef);


const titleRef = document.querySelector('.page-title');
// console.log(titleRef.textContent);
titleRef.textContent = 'I am a little cupcake';

const textRef = document.querySelector('.description');
// console.log(textRef.textContent);


// console.log(titleRef.classList);
titleRef.classList.add('qweqwe');
console.log(titleRef);
titleRef.classList.remove('page-title');
console.log(titleRef);
titleRef.classList.toggle('main-title');
console.log(titleRef);
titleRef.classList.toggle('main-title');
console.log(titleRef);
titleRef.classList.replace('qweqwe', 'title');
console.log(titleRef.classList.contains('qweqwe'));

const currentPageUrl = '/portfolio';
const linkRef = document.querySelector(`.site-nav_link[href='${ currentPageUrl }']`);
