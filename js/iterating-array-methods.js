const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter(number=>number%2===0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);

-----------------------------------------------------------------------

const books = [
    {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
    },
    {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
    },
    {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
    },
];

const allGenres = books.flatMap(book=>book.genres);
const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);

----------------------------------------------------------------------------------------

const books = [
    {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
    },
    {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
    },
    {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";

const topRatedBooks = books.filter(book=>book.rating>=MIN_RATING);
const booksByAuthor = books.filter(books => books.author === AUTHOR);

----------------------------------------------------------------------------------
                                              C A L L B A C K

const fnA = function (a, b, callback) {
    const result = callback(a, b);
    console.log(result);
};

fnA(5, 5, function (c, d) {
    return c * d;
});

fnA(3, 3, function (e, r) {
    return e / r;
});
-----------------------------------------------------------------------------

const fnA = function (array,test) {
    const filteredArray = [];

    for (const el of array) {
        const passed = test(el);
        if (passed) {
            filteredArray.push(el);
        }
    }
    console.log(filteredArray);
};

fnA([1, 2, 3, 4, 5], function (value) {
    return value > 3;
});

fnA([1, 2, 3, 4, 5, 6, 7, 8], function (value) {
    return value <= 3;
});

const fruits = [
    { name: 'apple', quantity: 200, isFresh: true },
    { name: 'pear', quantity: 150, isFresh: false },
    { name: 'banana', quantity: 100, isFresh: true },
];

fnA(fruits, function (fruit) {
    return fruit.quantity >= 150;
});

fnA(fruits, function (fruit) {
    return fruit.name === 'apple';
});
-----------------------------------------------------------------------------------
                                               C L O S U R E

const normalizedNumber = function (places) {
    return function (number) {
        return Number(number.toFixed(places));
    };
}

const number2 = normalizedNumber(2);

console.log(number2(1.2334456));


const normNumber = function (places) {
    const numbers = function (number) {
        console.log(Number(number.toFixed(places)));
    };
    return numbers;
};

const number3 = normNumber(3);

number3(5.876876);
----------------------------------------------------------------------------------

const players = [
    { id: 'player-1', name: 'Alex', timePlayed: 122, points: 234, online: true },
    { id: 'player-2', name: 'Poly', timePlayed: 142, points: 134, online: true },
    { id: 'player-3', name: 'Jack', timePlayed: 422, points: 204, online: false },
    { id: 'player-4', name: 'John', timePlayed: 124, points: 200, online: true },
    { id: 'player-5', name: 'Stan', timePlayed: 402, points: 104, online: false }
];

const playerNames = players.map(player => player.name);
console.log(playerNames);

const res = players.map(({ name,online }) => ({ name, online }));
console.log(res);

const res2 = players.map(({ id, points }) => ({ id, points }));
console.log(res2);

const updatedPlayers = players.map(player => ({
    ...player,
    points: player.points * 1.1
}));
console.table(updatedPlayers);


const playerIdToUpdate = 'player-1';

const updatedPlayer = players.map(player => {
    if (player.id === playerIdToUpdate) {
        return {
            ...player,
            timePlayed:player.timePlayed+100
        }
    }
    return player;
});

// const updatedPlayer = players.map(player =>
//     player.id === playerIdToUpdate
//         ? { ...player, timePlayed: player.timePlayed + 100, }
//         : player,
// );

console.table(updatedPlayer);
--------------------------------------------------------------------------------------

const getUsersWithEyeColor = (users, color) => users.filter(
    (user) => user.eyeColor === color);
---------------------------------------------------------------------------------------

const getUsersWithFriend = (users, friendName) =>
    users.filter((user) => user.friends.includes(friendName));
----------------------------------------------------------------------------------------

const getFriends = (users) => users.flatMap(user => user.friends).filter((friend, index, array)
    => array.indexOf(friend) === index);
-------------------------------------------------------------------------------------------

const players = {
    mango: 1270,
    poly: 468,
    ajax: 710,
    kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce((previousValue,playtime)=>{
    return previousValue+playtime;
},);

const averagePlayTime = totalPlayTime / playtimes.length;
-----------------------------------------------------------------------------------

const players = [
    { name: "Mango", playtime: 1270, gamesPlayed: 4 },
    { name: "Poly", playtime: 469, gamesPlayed: 2 },
    { name: "Ajax", playtime: 690, gamesPlayed: 3 },
    { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.reduce((total,player)=>{
    return (player.playtime/player.gamesPlayed)+total;
}, 0);
--------------------------------------------------------------------------------------------

const books = [
    {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
    },
    {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
    },
    {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
    },
];
const MIN_BOOK_RATING = 8;

const names = [...books].sort((firstBook, secondBook) =>
    firstBook.author.localeCompare(secondBook.author))
    .filter(book => book.rating > MIN_BOOK_RATING).map(book => book.author);

-----------------------------------------------------------------------------------

const getSortedFriends = users => [...users] .flatMap(user=>user.friends)
.filter((friend,index,users)=>users.indexOf(friend)===index)
.sort((a,b)=>a.localeCompare(b));

----------------------------------------------------------------------------------------

const getTotalBalanceByGender = (users, gender) =>
    [...users]
        .filter(user => user.gender === gender)
        .map(user => user.balance)
        .reduce((totalBalance, number) => totalBalance += number, 0);
-----------------------------------------------------------------------------------------------

function doMath(a, b, callback) {
    const result = callback(a,b);
    console.log(result);
};

// ------------inline----------
doMath(2, 3, function (x, y) { return x + y });

doMath(5, 2, function (x, y) { return x - y });

doMath(4, 5, function (x, y) { return x * y });

doMath(60, 2, function (x, y) { return x / y });
-----------------------------------------------------------

const tweets = [
    { id: 'player-1', likes: 35, tags:['js','nodejs'], points: 234, online: true },
    { id: 'player-2', likes: 345, tags:['java','js'], points: 134, online: true },
    { id: 'player-3', likes: 23, tags: ['python','kotlin'], points: 204, online: false },
    { id: 'player-4', likes: 65, tags:['swift','ruby','php'], points: 200, online: true },
    { id: 'player-5', likes: 25, tags:['php','ruby','C','C++'], points: 104, online: false }
];
const allTags = tweets.reduce((total, tweet) =>
    [...total, ...tweet.tags]
, []);

const tagsStat = allTags.reduce((acc, tag) => {
    console.log(acc)
    if (acc[tag]) {
        return {
            ...acc,
            [tag]: acc[tag] += 1,
        };
    }
    return {
        ...acc,
        [tag]: 1,
    };
}, {});

const tagsStat2 = allTags.reduce((acc, tag) =>
    ({
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
    }),
    {});
------------------------------------------------------------------------------------