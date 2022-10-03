const fruits = ["apple", "peach", "pear", "banana"];
const lastElementIndex=fruits.length-1;
const lastElement = fruits[lastElementIndex];


const teams = ['Real', 'Barcelona', 'Milan'];
const teamNameToFind = 'Barcelona';
let message;
for (const team of teams) {
        if (team === teamNameToFind) {
                message = 'There is a team that you are looking for';
                break;
        }
        message = 'There is no such a team';
} console.log(message);


const names = ['Ozone', 'Abtin', 'Zetta', 'Ashi', 'Tham'];
const nameToFind = 'Ozone';
let message;
for (const name of names) {
        if (name === nameToFind) {
                message = 'there is such a name';
                break;
        } message = 'sorry,there is no such a name';
} console.log(message);