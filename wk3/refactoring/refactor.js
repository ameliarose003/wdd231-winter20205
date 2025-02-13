// Refactor towards readability

let titleElement = document.querySelector('.title');
let contentElement = document.querySelector('.content');
let inputElement = document.querySelector('input[type=text]');

let inputValue = parseInt(inputElement.value) * 10;
titleElement.innerHTML = 'Welcome to the class';

let doubledValue = inputValue * 2;

contentElement.innerHTML = `The value of inputValue is ${inputValue} and the value of doubleValue is ${doubledValue}`;