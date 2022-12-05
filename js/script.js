"use strict";
console.log('============================================================================= Function');
//========================================================================================================================================================
// Function in JS
//========================================================================================================================================================
let showMessage;
if (2 > 1) {
    showMessage = function showMessage() {
        console.log('Yes');
    }
}
showMessage();

console.log('============================================================================= Array');
//========================================================================================================================================================
// Array in JS
//========================================================================================================================================================
// task 2
let users = ['Ваня', 'Іштван',];
console.log(users);
users.push('Оля');
console.log(users);
let findUsersItem = users.indexOf('Іштван');
users.splice(findUsersItem, 1, 'Петро');
console.log(users);
console.log(users.splice(0, 1));
users.unshift('Маша', 'Паша');
console.log(users);

// task 3
let arr = ['Іван', 'Іштван', 'Оля',];
let deletesItem = arr.splice(1, 1);
console.log(deletesItem);

// task 4
let str = 'Іван,Іштван,Оля';
let arrStr = str.split(',');
console.log(arrStr);

let number = [9, 2, 8,];
let reduceValue = number.reduce(function (previosValue, item, index, array) {
    console.log(previosValue);
})
console.log('============================================================================= DOM');
//========================================================================================================================================================
// DOM!
//========================================================================================================================================================
// task 1
let elementSetHi = document.querySelector('div[data-sey-hi]');
console.log(elementSetHi.getAttribute('data-sey-hi'));

// task 2
let ionchi = document.querySelector('ul li:last-child');
console.log(ionchi);

// task 3
let likes = document.querySelectorAll('.like');
console.log(likes);
//========================================================================================================================================================
console.log('============================================================================= scroll');
//========================================================================================================================================================
// Scroll
//========================================================================================================================================================
// task 1
const mainElement = document.documentElement;
const windowWithScrollWidth = window.innerWidth;
const windowWithoutScrollWidth = mainElement.clientWidth;
const scrollbarWidth = (windowWithScrollWidth - windowWithoutScrollWidth);

console.log(`Ширина полоси прокрутки дорівнює: ${scrollbarWidth}px`);

// task 2
function setScrollToOptions() {
    window.scrollTo({
        top: 100,
        left: 0,
        behavior: "smooth",
    });
}

setTimeout(setScrollToOptions, 1000);

// task 3
const firstItem = document.querySelector('.first-item');
const secondItem = document.querySelector('[data-sey-hi]');
const thirdtItem = document.querySelector('.subscribe');

function getItemCoord (a) {
    let getItemTopCoord = a.getBoundingClientRect().top;
    let getItemLeftCoord = a.getBoundingClientRect().left;
    console.log(`Координати об'єкту віносно окна браузера: x = ${getItemLeftCoord}, y = ${getItemTopCoord}`);
}

getItemCoord (firstItem);
getItemCoord (secondItem);
getItemCoord (thirdtItem);