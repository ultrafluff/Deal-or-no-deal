const amounts = 
[.25, 1, 2, 5, 10,
20, 50, 100, 250, 500,
1000, 2500, 5000, 7500, 10000,
15000, 25000, 50000, 100000, 250000
]

function randomselector() {
    let amount = (amounts[Math.floor(Math.random()*amounts.length)]);
    let index = amounts.indexOf(amount)
    amounts.splice(amounts.indexOf(amount), 1);
}