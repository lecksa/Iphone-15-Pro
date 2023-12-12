let img1 = document.querySelector('.1')
let img2 = document.querySelector('.2')
let img3 = document.querySelector('.3')
let img4 = document.querySelector('.4')

let text = document.querySelector('h3')

let btn1 = document.querySelector('#one')
let btn2 = document.querySelector('#two')
let btn3 = document.querySelector('#three')
let btn4 = document.querySelector('#four')

btn1.onmouseenter = () => {
    text.innerText = 'Color - Natural Titanium'
}

btn2.onmouseenter = () => {
    text.innerText = 'Color - Blue Titanium'
}

btn3.onmouseenter = () => {
    text.innerText = 'Color - White Titanium'
}

btn4.onmouseenter = () => {
    text.innerText = 'Color - Black Titanium'
}