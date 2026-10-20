// random color genrate

const randomValue = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i < 6; i++){
       color += hex[Math.floor(Math.random() *16 )]
    }
    return color
}

function ColorChanger(){
    document.querySelector('body').style.backgroundColor = randomValue()
}

let interval 

const startChangningColor = function(){
    if(!interval){
    interval = setInterval(ColorChanger,1000)
    }
}

const stopChangingColor = function(){
    clearInterval(interval)
    interval =null
}

document.querySelector('#start').addEventListener('click',startChangningColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor)