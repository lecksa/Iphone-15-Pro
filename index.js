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



let modal = document.querySelector('.modal')
let window_wrap = document.querySelector('.window_wrap')
let button = document.querySelector('.close')

modal.onclick = () => {
    window_wrap.style.display = 'flex'
}

button.onclick = () => {
    window_wrap.style.display = 'none'
}

let in_btn = document.querySelector('#in_btn')
let in_btn_2 = document.querySelector('#in_btn_2')
let ter_btn = document.querySelector('#ter_btn')
let ter_btn_2 = document.querySelector('#ter_btn_2')
// let info_btns = document.querySelectorAll('.info_btn')
// let ter_btns = document.querySelectorAll('#ter_btn')

let path = document.querySelectorAll('.path')


in_btn.onclick = () => {
    ter_btn.classList.toggle('active_button')
    path.classList.add('act_2')
}

in_btn_2.onclick = () => {
   ter_btn_2.classList.toggle('active_button')
   path.classList.add('act_2')
}

