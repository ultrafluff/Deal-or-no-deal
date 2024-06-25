let body = document.querySelector(".body")
let gamecontainer = document.createElement("div")

gamecontainer.classList.add("gamecontainer")
gamecontainer.classList.add("titlescreen")
body.appendChild(gamecontainer)



function startgame() {
    gamecontainer.classList.remove("titlescreen")
    gamecontainer.classList.add("gamescreen")
    let boxcontainer = document.createElement("div")
        boxcontainer.classList = "boxcontainer"
        gamecontainer.appendChild(boxcontainer)
    let numbercontainer = document.createElement("div") 
    numbercontainer.classList.add("numbercontainer")
    body.appendChild(numbercontainer)
    
    
    for (let i = 1; i < 25; i++) {
        let box = document.createElement("div")
        
        
        let boximg = document.createElement("img")
        boximg.classList.add("img")
        boximg.src = "images/boxoutsideempty.png"
    box.classList.add("box")
    boxcontainer.appendChild(box)
        box.appendChild(boximg)
        let number = document.createElement("h1")
        number.classList.add("number")
        number.textContent = i
        box.appendChild(number)
        console.log(number)

    
       
    }
    
}

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        startgame()
    }
  })



const amounts = 
[.25, 1, 2, 5, 10,
20, 50, 100, 250, 500,
1000, 2500, 5000, 7500, 10000,
15000, 25000, 50000, 100000, 250000
]

let box1 = undefined
let box2 = undefined
let box3 = undefined
let box4 = undefined
let box5 = undefined
let box6 = undefined
let box7 = undefined
let box8 = undefined
let box9 = undefined
let box10 = undefined
let box11 = undefined
let box12 = undefined
let box13 = undefined
let box14 = undefined
let box15 = undefined
let box16 = undefined
let box17 = undefined
let box18 = undefined
let box19 = undefined
let box20 = undefined
let box21 = undefined
let box22 = undefined
let box23 = undefined
let box24 = undefined

function randomselector() {
    let amount = (amounts[Math.floor(Math.random()*amounts.length)]);
    amounts.splice(amounts.indexOf(amount), 1);
    
    if (box1 == undefined) {
        box1 = amount
        return
    } else if (box2 == undefined) {
        box2 = amount
        return
    } else if (box3 == undefined) {
        box3 = amount
        return
    } else if (box4 == undefined) {
        box4 = amount
        return
    } else if (box5 == undefined) {
        box5 = amount
        return
    } else if (box6 == undefined) {
        box6 = amount
        return
    } else if (box7 == undefined) {
        box7 = amount
        return
    } else if (box8 == undefined) {
        box8 = amount
        return
    } else if (box9 == undefined) {
        box9 = amount
        return
    } else if (box10 == undefined) {
        box10 = amount
        return
    } else if (box11 == undefined) {
        box11 = amount
        return
    } else if (box12 == undefined) {
        box12 = amount
        return
    } else if (box13 == undefined) {
        box13 = amount
        return
    } else if (box14 == undefined) {
        box14 = amount
        return
    } else if (box15 == undefined) {
        box15 = amount
        return
    } else if (box16 == undefined) {
        box16 = amount
        return
    } else if (box17 == undefined) {
        box17 = amount
        return
    } else if (box18 == undefined) {
        box18 = amount
        return
    } else if (box19 == undefined) {
        box19 = amount
        return
    } else if (box20 == undefined) {
        box20 = amount
        return
    } else if (box21 == undefined) {
        box21 = amount
        return
    } else if (box22 == undefined) {
        box22 = amount
        return
    } else if (box23 == undefined) {
        box23 = amount
        return
    } else if (box24 == undefined) {
        box24 = amount
        return
    }
}
function assignboxes() {
    for (let i = 0; i < 24; i++) {
    randomselector()
    }
}