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

    let img = document.createElement("img")

    
    
    let box1 = document.createElement("div")
    
    
    box1.textContent = "1"
    box1.classList.add("box")
    
    boxcontainer.appendChild(box1)
    box1.appendChild(img)
    let box2 = document.createElement("div")
    box2.textContent = "2"
    box2.classList.add("box2")
    boxcontainer.appendChild(box2)
    let box3 = document.createElement("div")
    box3.textContent = "3"
    box3.classList.add("box3")
    boxcontainer.appendChild(box3)
    let box4 = document.createElement("div")
    box4.textContent = "4"
    box4.classList.add("box4")
    boxcontainer.appendChild(box4)
    let box5 = document.createElement("div")
    box5.textContent = "5"
    box5.classList.add("box5")
    boxcontainer.appendChild(box5)
    let box6 = document.createElement("div")
    box6.textContent = "6"
    box6.classList.add("box6")
    boxcontainer.appendChild(box6)
    let box7 = document.createElement("div")
    box7.textContent = "7"
    box7.classList.add("box7")
    boxcontainer.appendChild(box7)
    let box8 = document.createElement("div")
    box8.textContent = "8"
    box8.classList.add("box8")
    boxcontainer.appendChild(box8)
    let box9 = document.createElement("div")
    box9.textContent = "9"
    box9.classList.add("box9")
    boxcontainer.appendChild(box9)
    let box10 = document.createElement("div")
    box10.textContent = "10"
    box10.classList.add("box10")
    boxcontainer.appendChild(box10)
    let box11 = document.createElement("div")
    box11.textContent = "11"
    box11.classList.add("box11")
    boxcontainer.appendChild(box11)
    let box12 = document.createElement("div")
    box12.textContent = "12"
    box12.classList.add("box12")
    boxcontainer.appendChild(box12)
    let box13 = document.createElement("div")
    box13.textContent = "13"
    box13.classList.add("box13")
    boxcontainer.appendChild(box13)
    let box14 = document.createElement("div")
    box14.textContent = "14"
    box14.classList.add("box14")
    boxcontainer.appendChild(box14)
    let box15 = document.createElement("div")
    box15.textContent = "15"
    box15.classList.add("box15")
    boxcontainer.appendChild(box15)
    let box16 = document.createElement("div")
    box16.textContent = "16"
    box16.classList.add("box16")
    boxcontainer.appendChild(box16)
    let box17 = document.createElement("div")
    box17.textContent = "17"
    box17.classList.add("box17")
    boxcontainer.appendChild(box17)
    let box18 = document.createElement("div")
    box18.textContent = "18"
    box18.classList.add("box18")
    boxcontainer.appendChild(box18)
    let box19 = document.createElement("div")
    box19.textContent = "19"
    box19.classList.add("box19")
    boxcontainer.appendChild(box19)
    let box20 = document.createElement("div")
    box20.textContent = "20"
    box20.classList.add("box20")
    boxcontainer.appendChild(box20)
    let box21 = document.createElement("div")
    box21.textContent = "21"
    box21.classList.add("box21")
    boxcontainer.appendChild(box21)
    let box22 = document.createElement("div")
    box22.textContent = "22"
    box22.classList.add("box22")
    boxcontainer.appendChild(box22)
    let box23 = document.createElement("div")
    box23.textContent = "23"
    box23.classList.add("box23")
    boxcontainer.appendChild(box23)
    let box24 = document.createElement("div")
    box24.textContent = "24"
    box24.classList.add("box24")
    boxcontainer.appendChild(box24)
    box1.addEventListener("click", () =>alert("hi"))
    box2.addEventListener("click", () =>alert("hi"))
    box3.addEventListener("click", () =>alert("hi"))
    box4.addEventListener("click", () =>alert("hi"))
    box5.addEventListener("click", () =>alert("hi"))
    box6.addEventListener("click", () =>alert("hi"))
    box7.addEventListener("click", () =>alert("hi"))
    box8.addEventListener("click", () =>alert("hi"))
    box9.addEventListener("click", () =>alert("hi"))
    box10.addEventListener("click", () =>alert("hi"))
    box11.addEventListener("click", () =>alert("hi"))
    box12.addEventListener("click", () =>alert("hi"))
    box13.addEventListener("click", () =>alert("hi"))
    box14.addEventListener("click", () =>alert("hi"))
    box15.addEventListener("click", () =>alert("hi"))
    box16.addEventListener("click", () =>alert("hi"))
    box17.addEventListener("click", () =>alert("hi"))
    box18.addEventListener("click", () =>alert("hi"))
    box19.addEventListener("click", () =>alert("hi"))
    box20.addEventListener("click", () =>alert("hi"))
    box21.addEventListener("click", () =>alert("hi"))
    box22.addEventListener("click", () =>alert("hi"))
    box23.addEventListener("click", () =>alert("hi"))
    box24.addEventListener("click", () =>alert("hi"))
  
}

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        startgame()
    }
  })
  

   


const amounts = 
[1, 2, 5, 10, 15,
25, 50, 75, 100, 250,
500, 750, 1000, 2500, 5000,
7500, 10000, 15000, 25000,
50000, 75000, 100000, 250000,
500000
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