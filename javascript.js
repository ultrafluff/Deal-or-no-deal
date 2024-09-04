let body = document.querySelector(".body")
let gamecontainer = document.createElement("div")

gamecontainer.classList.add("gamecontainer")
gamecontainer.classList.add("titlescreen")
body.appendChild(gamecontainer)


let boxisselected

function startgame() {
    gamecontainer.classList.remove("titlescreen")
    gamecontainer.classList.add("gamescreen")
    let boxcontainer = document.createElement("div")
        boxcontainer.classList = "boxcontainer"
        gamecontainer.appendChild(boxcontainer)
    let boxesrightside = document.createElement("div")
    let boxesleftside = document.createElement("div")
    boxesleftside.classList.add("boxesleftside")
    boxesrightside.classList.add("boxesrightside")
    let dealornodealcontainer = document.createElement("div")
    dealornodealcontainer.classList.add("dealornodealconatiner")

    let offertext = document.createElement("div")
    offertext.classList.add("offertext")
    boxcontainer.appendChild(boxesleftside)
    boxcontainer.appendChild(dealornodealcontainer)
    boxcontainer.appendChild(boxesrightside)

    let offerbox = document.createElement("div")
    offerbox.classList.add("offerbox")
    dealornodealcontainer.appendChild(offerbox)
    let offer = document.createElement("input")
    offer.classList.add("offertextbox")
    offerbox.appendChild(offer)
    
    offerbox.style.display = "none"
    
    

    

    let amountcontainer = document.createElement("div")
    
    amountcontainer.classList.add("amountandboxcontainer")
    gamecontainer.appendChild(amountcontainer)
    let boxholder = document.createElement("div")
    boxholder.classList = "boxholder"

    let amountholder = document.createElement("div")
    amountholder.classList = "amountholder"
    amountcontainer.appendChild(amountholder)

    

    let img = document.createElement("img")

    
    
    let box1 = document.createElement("div")
    boxisselected = false

    
  
   


    box1.textContent = "1"
    box1.classList.add("box")
    
    
    boxesleftside.appendChild(box1)
    box1.appendChild(img)
    let box2 = document.createElement("div")
    box2.textContent = "2"
    
    box2.classList.add("box2")
    boxesleftside.appendChild(box2)
    let box3 = document.createElement("div")
    box3.textContent = "3"
    box3.classList.add("box3")
    boxesleftside.appendChild(box3)
    let box4 = document.createElement("div")
    box4.textContent = "4"
    box4.classList.add("box4")
    boxesleftside.appendChild(box4)
    let box5 = document.createElement("div")
    box5.textContent = "5"
    box5.classList.add("box5")
    boxesleftside.appendChild(box5)
    let box6 = document.createElement("div")
    box6.textContent = "6"
    box6.classList.add("box6")
    boxesleftside.appendChild(box6)
    let box7 = document.createElement("div")
    box7.textContent = "7"
    box7.classList.add("box7")
    boxesleftside.appendChild(box7)
    let box8 = document.createElement("div")
    box8.textContent = "8"
    box8.classList.add("box8")
    boxesleftside.appendChild(box8)
    let box9 = document.createElement("div")
    box9.textContent = "9"
    box9.classList.add("box9")
    boxesleftside.appendChild(box9)
    let box10 = document.createElement("div")
    box10.textContent = "10"
    box10.classList.add("box10")
    boxesleftside.appendChild(box10)
    let box11 = document.createElement("div")
    box11.textContent = "11"
    box11.classList.add("box11")
    boxesleftside.appendChild(box11)
    let box12 = document.createElement("div")
    box12.textContent = "12"
    box12.classList.add("box12")
    boxesleftside.appendChild(box12)
    let box13 = document.createElement("div")
    box13.textContent = "13"
    box13.classList.add("box13")
    boxesrightside.appendChild(box13)
    let box14 = document.createElement("div")
    box14.textContent = "14"
    box14.classList.add("box14")
    boxesrightside.appendChild(box14)
    let box15 = document.createElement("div")
    box15.textContent = "15"
    box15.classList.add("box15")
    boxesrightside.appendChild(box15)
    let box16 = document.createElement("div")
    box16.textContent = "16"
    box16.classList.add("box16")
    boxesrightside.appendChild(box16)
    let box17 = document.createElement("div")
    box17.textContent = "17"
    box17.classList.add("box17")
    boxesrightside.appendChild(box17)
    let box18 = document.createElement("div")
    box18.textContent = "18"
    box18.classList.add("box18")
    boxesrightside.appendChild(box18)
    let box19 = document.createElement("div")
    box19.textContent = "19"
    box19.classList.add("box19")
    boxesrightside.appendChild(box19)
    let box20 = document.createElement("div")
    box20.textContent = "20"
    box20.classList.add("box20")
    boxesrightside.appendChild(box20)
    let box21 = document.createElement("div")
    box21.textContent = "21"
    box21.classList.add("box21")
    boxesrightside.appendChild(box21)
    let box22 = document.createElement("div")
    box22.textContent = "22"
    box22.classList.add("box22")
    boxesrightside.appendChild(box22)
    let box23 = document.createElement("div")
    box23.textContent = "23"
    box23.classList.add("box23")
    boxesrightside.appendChild(box23)
    let box24 = document.createElement("div")
    box24.textContent = "24"
    box24.classList.add("box24")
    boxesrightside.appendChild(box24)
  
    let counter = 0
    
        box1.addEventListener("click", () => boxreveal(box1, boxnum1))
    box2.addEventListener("click", () => boxreveal(box2, boxnum2))
    box3.addEventListener("click", () => boxreveal(box3, boxnum3))
    box4.addEventListener("click", () => boxreveal(box4, boxnum4))
    box5.addEventListener("click", () => boxreveal(box5, boxnum5))
    box6.addEventListener("click", () => boxreveal(box6, boxnum6))
    box7.addEventListener("click", () => boxreveal(box7, boxnum7))
    box8.addEventListener("click", () => boxreveal(box8, boxnum8))
    box9.addEventListener("click", () => boxreveal(box9, boxnum9))
    box10.addEventListener("click", () => boxreveal(box10, boxnum10))
    box11.addEventListener("click", () => boxreveal(box11, boxnum11))
    box12.addEventListener("click", () => boxreveal(box12, boxnum12))
    box13.addEventListener("click", () => boxreveal(box13, boxnum13))
    box14.addEventListener("click", () => boxreveal(box14, boxnum14))
    box15.addEventListener("click", () => boxreveal(box15, boxnum15))
    box16.addEventListener("click", () => boxreveal(box16, boxnum16))
    box17.addEventListener("click", () => boxreveal(box17, boxnum17))
    box18.addEventListener("click", () => boxreveal(box18, boxnum18))
    box19.addEventListener("click", () => boxreveal(box19, boxnum19))
    box20.addEventListener("click", () => boxreveal(box20, boxnum20))
    box21.addEventListener("click", () => boxreveal(box21, boxnum21))
    box22.addEventListener("click", () => boxreveal(box22, boxnum22))
    box23.addEventListener("click", () => boxreveal(box23, boxnum23))
    box24.addEventListener("click", () => boxreveal(box24, boxnum24))
    
    function amountandboxdelelte(box, boxnumber) {
        box.textContent = ""
        box.style.backgroundImage = 'none'
       
        
        for (const amount of amountboxes) {
            if (amount.textContent == box.textContent) {
                
            }
        }
    }

       
    
    function offernumber() {
        offerbox.style.display = "flex"
        offerbox.textContent = "offer:"
        offerbox.appendChild(offer)
        addEventListener("keydown", function (e) {
            if (e.code === "Enter") {
                let offeramount = offer.value
                offerbox.removeChild(offer)
                offertext.textContent = offeramount
                offerbox.appendChild(offertext)

            }
        })
        
    }
    function boxreveal(box, boxnumber) {
        if (boxisselected == false) {
            let switchbox = document.createElement("div")
            switchbox.classList = "box"
            switchbox.textContent = box.textContent
            let yourboxtext = document.createElement("div")
            yourboxtext.classList = "yourbox"
            yourboxtext.textContent = "your box"
            boxholder.appendChild(yourboxtext)
            boxholder.appendChild(switchbox)
            box.textContent = ""
            box.style.opacity = 0
            boxisselected = true    
        } else {
        box.textContent = boxnumber
        let deletenumber = boxnumber
        box.style.color = "red"
        setTimeout(() => amountandboxdelelte(box), 5000)
        console.log(deletenumber)
        deleteamount(deletenumber) 
        setTimeout(() => {
            counter++
        }, 5000)
        if (counter == 0) {
            setTimeout(() => {
                offernumber()
            }, 5000)} else if (counter == 8) {
            setTimeout(() => {
            alert("deal or no deal")
            }, 5000)} else if (counter == 11) {
            setTimeout(() => {
            alert("deal or no deal")
            }, 5000)} else if (counter == 14) {
            setTimeout(() => {
            alert("deal or no deal")
            }, 5000)} else if (counter == 17) {
            setTimeout(() => {
            alert("deal or no deal")
            }, 5000)}else if (counter == 19) {
            setTimeout(() => {
            alert("deal or no deal")
            }, 5000)}
            else if (counter == 21) {
            setTimeout(() => {
            alert("deal or no deal")
            }, 5000)} else if (counter == 22) {
                setTimeout(() => {
                alert("deal or no deal")
                }, 5000)}
            
        
        
        console.log(counter)
        
        }
    }

    function deleteamount(number) {
        
        
        for (const amount of amountboxes) {
            if (amount.textContent == number) {
                amount.textContent = ""
                amount.style.opacity = 0
                console.log(boxisselected)
            } else {
                continue
            }
        
        }
    }

    
    
   
    
    


    let amount1 = document.createElement("div")
    amount1.classList.add("amountbox1")
    amountholder.appendChild(amount1)
    amount1.textContent = "1"
    let amount2 = document.createElement("div")
    amount2.classList.add("amountbox2")
    amountholder.appendChild(amount2)
    amount2.textContent = "2"
    let amount3 = document.createElement("div")
    amount3.classList.add("amountbox3")
    amountholder.appendChild(amount3)
    amount3.textContent = "5"
    let amount4 = document.createElement("div")
    amount4.classList.add("amountbox4")
    amountholder.appendChild(amount4)
    amount4.textContent = "10"
    let amount5 = document.createElement("div")
    amount5.classList.add("amountbox5")
    amountholder.appendChild(amount5)
    amount5.textContent = "15"
    let amount6 = document.createElement("div")
    amount6.classList.add("amountbox6")
    amountholder.appendChild(amount6)
    amount6.textContent = "25"
    let amount7 = document.createElement("div")
    amount7.classList.add("amountbox7")
    amountholder.appendChild(amount7)
    amount7.textContent = "50"
    let amount8 = document.createElement("div")
    amount8.classList.add("amountbox8")
    amountholder.appendChild(amount8)
    amount8.textContent = "75"
    let amount9 = document.createElement("div")
    amount9.classList.add("amountbox9")
    amountholder.appendChild(amount9)
    amount9.textContent = "100"
    let amount10 = document.createElement("div")
    amount10.classList.add("amountbox10")
    amountholder.appendChild(amount10)
    amount10.textContent = "250"
    let amount11 = document.createElement("div")
    amount11.classList.add("amountbox11")
    amountholder.appendChild(amount11)
    amount11.textContent = "500"
    let amount12 = document.createElement("div")
    amount12.classList.add("amountbox12")
    amountholder.appendChild(amount12)
    amount12.textContent = "750"
   let  amount13 = document.createElement("div")
    amount13.classList.add("amountbox13")
    amountholder.appendChild(amount13)
    amount13.textContent = "1000"
    let amount14 = document.createElement("div")
    amount14.classList.add("amountbox14")
    amountholder.appendChild(amount14)
    amount14.textContent = "2500"
    let amount15 = document.createElement("div")
    amount15.classList.add("amountbox15")
    amountholder.appendChild(amount15)
    amount15.textContent = "5000"
    let amount16 = document.createElement("div")
    amount16.classList.add("amountbox16")
    amountholder.appendChild(amount16)
    amount16.textContent = "7500"
    let amount17 = document.createElement("div")
    amount17.classList.add("amountbox17")
    amountholder.appendChild(amount17)
    amount17.textContent = "10000"
    let amount18 = document.createElement("div")
    amount18.classList.add("amountbox18")
    amountholder.appendChild(amount18)
    amount18.textContent = "15000"
    let amount19 = document.createElement("div")
    amount19.classList.add("amountbox19")
    amountholder.appendChild(amount19)
    amount19.textContent = "25000"
    let amount20 = document.createElement("div")
    amount20.classList.add("amountbox20")
    amountholder.appendChild(amount20)
    amount20.textContent = "50000"
    let amount21 = document.createElement("div")
    amount21.classList.add("amountbox21")
    amountholder.appendChild(amount21)
    amount21.textContent = "75000"
    let amount22 = document.createElement("div")
    amount22.classList.add("amountbox22")
    amountholder.appendChild(amount22)
    amount22.textContent = "100000"
    let amount23 = document.createElement("div")
    amount23.classList.add("amountbox23")
    amountholder.appendChild(amount23)
    amount23.textContent = "250000"
   let amount24 = document.createElement("div")
    amount24.classList.add("amountbox24")
    amountholder.appendChild(amount24)
    amount24.textContent = "500000"
    const amountboxes = [amount1, amount2, amount3, amount4,
        amount5, amount6, amount7, amount8, amount9, amount10, amount11,
        amount12, amount13, amount14, amount15, amount16, amount17, amount18,
        amount19, amount20, amount21, amount22, amount23, amount24
    ]
    amountcontainer.appendChild(boxholder)
}

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        startgame()
        assignboxes()
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

let boxnum1 = undefined
let boxnum2 = undefined
let boxnum3 = undefined
let boxnum4 = undefined
let boxnum5 = undefined
let boxnum6 = undefined
let boxnum7 = undefined
let boxnum8 = undefined
let boxnum9 = undefined
let boxnum10 = undefined
let boxnum11 = undefined
let boxnum12 = undefined
let boxnum13 = undefined
let boxnum14 = undefined
let boxnum15 = undefined
let boxnum16 = undefined
let boxnum17 = undefined
let boxnum18 = undefined
let boxnum19 = undefined
let boxnum20 = undefined
let boxnum21 = undefined
let boxnum22 = undefined
let boxnum23 = undefined
let boxnum24 = undefined

function randomselector() {
    let amount = (amounts[Math.floor(Math.random()*amounts.length)]);
    amounts.splice(amounts.indexOf(amount), 1);
    
    if (boxnum1 == undefined) {
        boxnum1 = amount
        return
    } else if (boxnum2 == undefined) {
        boxnum2 = amount
        return
    } else if (boxnum3 == undefined) {
        boxnum3 = amount
        return
    } else if (boxnum4 == undefined) {
        boxnum4 = amount
        return
    } else if (boxnum5 == undefined) {
        boxnum5 = amount
        return
    } else if (boxnum6 == undefined) {
        boxnum6 = amount
        return
    } else if (boxnum7 == undefined) {
        boxnum7 = amount
        return
    } else if (boxnum8 == undefined) {
        boxnum8 = amount
        return
    } else if (boxnum9 == undefined) {
        boxnum9 = amount
        return
    } else if (boxnum10 == undefined) {
        boxnum10 = amount
        return
    } else if (boxnum11 == undefined) {
        boxnum11 = amount
        return
    } else if (boxnum12 == undefined) {
        boxnum12 = amount
        return
    } else if (boxnum13 == undefined) {
        boxnum13 = amount
        return
    } else if (boxnum14 == undefined) {
        boxnum14 = amount
        return
    } else if (boxnum15 == undefined) {
        boxnum15 = amount
        return
    } else if (boxnum16 == undefined) {
        boxnum16 = amount
        return
    } else if (boxnum17 == undefined) {
        boxnum17 = amount
        return
    } else if (boxnum18 == undefined) {
        boxnum18 = amount
        return
    } else if (boxnum19 == undefined) {
        boxnum19 = amount
        return
    } else if (boxnum20 == undefined) {
        boxnum20 = amount
        return
    } else if (boxnum21 == undefined) {
        boxnum21 = amount
        return
    } else if (boxnum22 == undefined) {
        boxnum22 = amount
        return
    } else if (boxnum23 == undefined) {
        boxnum23 = amount
        return
    } else if (boxnum24 == undefined) {
        boxnum24 = amount
        return
    }
}
function assignboxes() {
    for (let i = 0; i < 24; i++) {
    randomselector()
    }
}