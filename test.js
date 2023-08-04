const items = [
    {
        id:0, 
        name:'cupid',
        amount:1,
    },
    {
        id:1,
        name:'messi',
        amount:2
    }
];

console.log( {...{id:0, name:'cupid', amount:1}, ...{id:1}} );