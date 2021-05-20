"use strict";

const $ = name => document.querySelector(name);
const slides = document.querySelectorAll(`.slide`);

// Returns an array with elements and their order values.
function getArrAllSlides() {
    let arr = [];
    // Filling the object with slides and their original orders.
    for (let i = 0; i < slides.length; i++) {
        arr.push({
            div: slides[i],
            order: (i + 1) === slides.length ? 0 : (i + 1)
        });
    }
    // Assigning initial positions to slides.    
    for (let i = 0; i < arr.length; i++) {
        slides[i].style.order = arr[i][`order`];
    }

    return arr;
}

// Returns the minimum width of the img.
function getMinWidth(arr) {
    let min = null;

    for (let e of arr) {
        let width = e[`div`].querySelector(`img`).getAttribute(`width`);
        min = min ? (min < width ? min : width) : width;
    }

    return min;
}

// Returns the number of slides that fit in the scope.
function getAmoutSlides(width, min_width) {
    let amount = 0;
    let total_length = 0;

    while (total_length < width) {
        total_length += +min_width;

        if (total_length < width) {
            width -= 32;
            amount++;
        }
    }

    return amount;
}

// Calculating and assigning width to slides.
function getWidthSlides(width, amount) {
    let indents = 32 * (amount - 1);
    let slide = ( (width - indents) / amount ).toFixed(1) ;

    for (let e of slides) e.style.width = `${slide}px`; 

    $(`.slides`).style.transform = `translateX(-${+slide + 32}px)`;
}

let time = 0;
let obj = getArrAllSlides(); // Object for storing slides and their order values.
let width = $(`.slider`).offsetWidth; // Visibility width.
let min_width = getMinWidth(obj);
let slides_amount = getAmoutSlides(width, min_width);

getWidthSlides(width, slides_amount);

// Button Prev.
$(`.arrows:first-child`).onclick = function () {
    if (time === 0) {
        time = 1;
        this.style.animation = `click .5s ease`;
        setTimeout( () => { 
            this.style.animation = `none`;
            time = 0;
        }, 500);

        for (let e of obj) {
            e[`order`] = e[`order`] === slides.length - 1 ? 0 : e[`order`] + 1;
            e[`div`].style.order = e[`order`];
            e[`div`].style.animation = `prev .5s ease`;
            setTimeout( function () { e[`div`].style.animation = `none`; }, 500);
        }
    }
}

// Button next.
$(`.arrows:last-child`).onclick = function () {
    if (time === 0) {
        time = 1;
        this.style.animation = `click .3s ease`;
        setTimeout( () => { 
            this.style.animation = `none`;
            time = 0;
        }, 500);
        
        for (let e of obj) {
            e[`order`] = e[`order`] === 0 ? slides.length - 1 : e[`order`] - 1;
            e[`div`].style.order = e[`order`];
            e[`div`].style.animation = `next .5s ease`;
            setTimeout( function () { e[`div`].style.animation = `none`; }, 500);
        }
    }
}

window.onresize = function () {
    width = $(`.slider`).offsetWidth;
    slides_amount = getAmoutSlides(width, min_width);

    getWidthSlides(width, slides_amount);
}
