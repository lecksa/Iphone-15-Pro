let text = document.querySelector('h3')
let img = document.querySelector('#all')

let btn1 = document.querySelector('#natural')
let btn2 = document.querySelector('#blue')
let btn3 = document.querySelector('#white')
let btn4 = document.querySelector('#black')

// btn1.onclick = () => {
//     // img.setAttribute('src', './img/iphone1.jfif')
//     img.style.backgroundImage = `url(./img/iphone1.jfif)`
// }

btn1.onmouseenter = () => {
    text.innerText = 'Color - Natural Titanium'
}

btn1.onclick = () => {
    img.setAttribute('src', './img/iphone1.jfif')
}

btn2.onmouseenter = () => {
    text.innerText = 'Color - Blue Titanium'
}

btn2.onclick = () => {
    img.setAttribute('src', './img/iphone2.jfif')
}

btn3.onmouseenter = () => {
    text.innerText = 'Color - White Titanium'
}

btn3.onclick = () => {
    img.setAttribute('src', './img/iphone3.jfif')
}

btn4.onmouseenter = () => {
    text.innerText = 'Color - Black Titanium'
}

btn4.onclick = () => {
    img.setAttribute('src', './img/iphone4.jfif')
}

