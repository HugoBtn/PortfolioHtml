/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.ligne-par-ligne p');

    elements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = '';
        text.split('').forEach(char => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.opacity = 0;
            element.appendChild(span);
        });
    });

    animateText();
});

function animateText() {
    const spans = document.querySelectorAll('.ligne-par-ligne p span');
    let index = 0;

    function fadeInNextChar() {
        if (index < spans.length) {
            spans[index].style.opacity = 1;
            index++;
            setTimeout(fadeInNextChar, 20); // Ajustez la durée entre chaque caractère
        }
    }

    fadeInNextChar();
}
