export const getItemTemplate = ({text,isDone}) => 
    `
    <li class="page-item">
        <div>
            <input
            type="checkbox"
            ${isDone ? 'checked' : ''}
            />
            <span>${text}</span>
        </div>
        <button class="btn_close" type="button">x</button>
    </li>
    `
    ;

export const items = [
    {
        text: 'buy a loaf of bread',
        isDone: true,
    },
    {
        text: 'buy a bar of chocolate',
        isDone: false,
    },
    {
        text: 'buy a bottle of milk',
        isDone: false,
    },
];