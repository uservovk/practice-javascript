const navRef = document.querySelector('li');
// console.log(navRef);
const navLinksRef = document.querySelectorAll('.site-nav_link');
// console.log(navLinksRef);
// -------------------------------------------------------------
const imgRef = document.querySelector('img');
// console.log(imgRef);
// imgRef.src = './photos/pexels-cats-coming-1444321.jpg';
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
// titleRef.classList.add('qweqwe');
// console.log(titleRef);
// titleRef.classList.remove('page-title');
// console.log(titleRef);
// titleRef.classList.toggle('main-title');
// console.log(titleRef);
// titleRef.classList.toggle('main-title');
// console.log(titleRef);
// titleRef.classList.replace('qweqwe', 'title');
// console.log(titleRef.classList.contains('qweqwe'));

// const currentPageUrl = '/portfolio';
// const linkRef = document.querySelector(`.site-nav_link[href='${ currentPageUrl }']`);
// -------------------------------------------------------------------------------------------
const navLinkRef = document.querySelector('.site-nav_link');
const parent = navLinkRef.parentNode;
const ancestorRef = parent.parentNode;

const childRef = document.querySelector('.site-nav');
const descendantsRef = childRef.children;
// ------------------------------------------------------------------
const textCreateRef = document.createElement('p');
textCreateRef.classList.add('site-nav_text');
textCreateRef.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, laborum tempora sint quibusdam neque deleniti. Ducimus ad saepe, hic amet nihil quasi rem ratione harum excepturi a dolorem, laboriosam architecto.';
// console.log(textCreateRef);

const titleCreateRef = document.createElement('h2');
titleCreateRef.textContent = '...where is my food :( ?';
titleCreateRef.classList.add('site-nav_title');
// console.log(titleCreateRef);

const imgCreateRef = document.createElement('img');
imgCreateRef.classList.add('site-nav_image');
imgCreateRef.alt = 'little cat';
imgCreateRef.width = 310;
imgCreateRef.height = 250;
imgCreateRef.src = './photos/pexels-cats-coming-1444321.jpg';
// console.log(imgCreateRef);


const itemRef = document.createElement('li');
itemRef.classList.add('site-nav_item');

document.body.append(titleCreateRef,textCreateRef,imgCreateRef);
// ------------------------------------------------------------------

const siteNavRef = document.querySelector('.site-nav');
const itemEl = document.createElement('li');
itemEl.classList.add('site-nav_item');

const linkEl = document.createElement('a');
linkEl.classList.add('site-nav_link');
linkEl.href = '/about';
linkEl.textContent = 'About me';

itemEl.appendChild(linkEl);
siteNavRef.insertBefore(itemEl, siteNavRef.firstElementChild);
// ------------------------------------------------------------------

const colorPickerOptions = [
    { label: 'f', color: '#FF0000' },
    { label: 'o', color: '#808000' },
    { label: 'o', color: '#FFA500' },
    { label: 'd', color: '#FFFF00' },
];

// const elements = colorPickerOptions.map((option) => {
//     const buttonRef = document.createElement('button');

//     buttonRef.type = 'button';
//     buttonRef.textContent = option.label;
//     buttonRef.style.backgroundColor = option.color;
    
//     return buttonRef;
// });

// for (let i = 0; i < colorPickerOptions.length; i += 1){
//     const option = colorPickerOptions[i];
//     const buttonRef = document.createElement('button');

//     buttonRef.type = 'button';
//     buttonRef.textContent = option.label;
//     buttonRef.style.backgroundColor = option.color;

//     elements.push(buttonRef);
// };

const makeColorPickerOptions = options => {
    return options.map((option) => {
        const buttonRef = document.createElement('button');

        buttonRef.type = 'button';
        buttonRef.textContent = option.label;
        buttonRef.style.backgroundColor = option.color;
    
        return buttonRef;
    }
    )
};
const elements = makeColorPickerOptions(colorPickerOptions);
const colorPickerContainerRef = document.querySelector('.color-picker');
colorPickerContainerRef.append(...elements);
// --------------------------------------------------------------------------

const products = [
    {
        name: 'fish in sauce',
        description: 'yummy fish for your cat',
        price: 2,
    },
    {
        name: 'meat in sauce',
        description: 'meat for your cat',
        price: 3,
    },
];

const makeProductCard = ({name,description,price}) => {
    const productEl = document.createElement('article');
    productEl.classList.add('product');

    const nameEl = document.createElement('h2');
    nameEl.textContent = name;
    nameEl.classList.add('product_name');

    const descrEl = document.createElement('p');
    descrEl.textContent = description;
    descrEl.classList.add('product_descr');

    const priceEl = document.createElement('p');
    priceEl.textContent = `Price: ${price} credits`;
    priceEl.classList.add('product_price');

    productEl.append(nameEl, descrEl, priceEl);

    return productEl;
};

const cards = products.map(makeProductCard);

const productsForYourCatRef = document.querySelector('.js-products');
productsForYourCatRef.append(...cards);
// ----------------------------------------------------------------------------------

const transactions = [
    {
        id: '1.1',
        amount: '100',
        date: '2022-11-01',
        business: 'Bogan',
        name: 'Auto Loan',
        type: 'deposit',
        account: '12345',
    },
    {
        id: '1.2',
        amount: '200',
        date: '2022-11-02',
        business: 'Legros',
        name: 'Personal Loan',
        type: 'invoice',
        account: '54321',
    },
    {
        id: '1.3',
        amount: '300',
        date: '2022-11-03',
        business: 'Beatty',
        name: 'Savings account',
        type: 'withdrawal',
        account: '15243',
    },
];

const makeTransactionTableRowMarkup = ({id,amount,date,business,name,type,account}) => {
    return `
    <tr>
        <td>${id}</td>
        <td>${amount}</td>
        <td>${date}</td>
        <td>${business}</td>
        <td>${name}</td>
        <td>${type}</td>
        <td>${account}</td>
    </tr>
    `;
};
// const makeTransactionTableRowMarkup = ({ id, amount, date, business, name, type, account }) => {
//     const tableRowRef = document.createElement('tr');

//     const tdIdTransactionRef = document.createElement('td');
//     tdIdTransactionRef.textContent = id;

//     const tdAmountRef = document.createElement('td');
//     tdAmountRef.textContent = amount;

//     const tdDateRef = document.createElement('td');
//     tdDateRef.textContent = date;

//     const tdBusinessRef = document.createElement('td');
//     tdBusinessRef.textContent = business;

//     const tdNameRef = document.createElement('td');
//     tdNameRef.textContent = name;

//     const tdTypeRef = document.createElement('td');
//     tdTypeRef.textContent = type;

//     const tdAccountRef = document.createElement('td');
//     tdAccountRef.textContent = account;

//     tableRowRef.append(tdIdTransactionRef, tdAmountRef, tdDateRef, tdBusinessRef, tdNameRef, tdTypeRef, tdAccountRef);

//     return tableRowRef;
// };

// console.log(makeTransactionTableRowMarkup(transactions));

const makeTransactionTableRows = transactions
    .map(makeTransactionTableRowMarkup)
    .join('');

const tableRef = document.querySelector('.js-transaction-table');
tableRef.insertAdjacentHTML('beforeend', makeTransactionTableRows);
// -------------------------------------------------------------------

const getItemTemplate = (text) =>`
    <li class="page-item">
        <div>
            <input type="checkbox" checked>
            <span>${text}</span>
        </div>
        <button type="button">x</button>
    </li>
    `

const items = ['Item 1', 'Item 2', 'Item 3'];