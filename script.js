// Changing text content
const changeTextButton = document.getElementById('changeTextButton');
changeTextButton.addEventListener('click', () => {
    const textElement = document.getElementById('text');
    textElement.textContent = 'The text has been changed!';
});

// Modifying CSS styles via JavaScript
const toggleColorButton = document.getElementById('toggleColorButton');
toggleColorButton.addEventListener('click', () => {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
});

// Adding a new element dynamically
const addElementButton = document.getElementById('addElementButton');
addElementButton.addEventListener('click', () => {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a newly added paragraph!';
    document.querySelector('section').appendChild(newElement);
});

// Removing an element dynamically
const removeElementButton = document.getElementById('removeElementButton');
removeElementButton.addEventListener('click', () => {
    const lastElement = document.querySelector('section p:last-child');
    if (lastElement) {
        lastElement.remove();
    }
});
