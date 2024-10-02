
let count = 0;

const counterElement = document.getElementById('counter');
const addButton = document.getElementById('add');
const resetButton = document.getElementById('reset');
const subtractButton = document.getElementById('subtract');

// add button
addButton.addEventListener('click', function() {
    count++;
    counterElement.innerText = count;
});

// subtract button
subtractButton.addEventListener('click', function() {
    count--;
    counterElement.innerText = count;
});

// reset button
resetButton.addEventListener('click', function() {
    count = 0;
    counterElement.innerText = count;
});
