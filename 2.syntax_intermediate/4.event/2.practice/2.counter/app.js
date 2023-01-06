const buttonDecrease = document.getElementById('button-decrease');
const buttonReset = document.getElementById('button-reset');
const buttonIncrease = document.getElementById('button-increase');



const counter = document.getElementById('counter');

buttonDecrease.addEventListener('click', () => {
    counter.textContent = parseAndColorCounter() - 1;
    parseAndColorCounter();
});

buttonReset.addEventListener('click', () => {
    counter.textContent = '0';
    parseAndColorCounter();
});

buttonIncrease.addEventListener('click', () => {
    counter.textContent = parseAndColorCounter() + 1;
    parseAndColorCounter();
});

function parseAndColorCounter() {
    const count = counter.textContent;
    const parsed = parseInt(count);
    if (isNaN(parsed)) { 
        return 0;
    } else if (parsed < 0) {
        counter.style.color = 'red';
    } else if (parsed > 0) {
        counter.style.color = 'mediumseagreen';
    } else {
        counter.style.color = 'gray';
    }
    return parsed;
}