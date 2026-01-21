// To select an HTML element named article:
const article = document.querySelector('article');

// To change an HTML element which has been selected and named article:
article.innerHTML = 'innerHTML supports <strong>HTML<strong> tags. The textContent property does not.';
// innerHTML is not as secure as textContent, but textContent will not render HTML tages but display 
// them as text
// article.textContent = input.'value'

// To change the inline CSS style of an element:
article.style.textAlign = 'right';

// To change an attribute of an element named article:
article.setAttribute('class', 'active');
// Alternatively, specifically changing the class attribute:
articleElement.classList.add('active');

// To create a new p element:
const paragraph = document.createElement('p');

// To append the named element paragraph with additional content or elements
article.appendChild(paragraph);
// This one adds multiple elements in a specific order:
article.append(paragraph, 'Hello World!');

// To remove the named element paragraph from a document:
article.removeChild(paragraph);

// To remove the named element article itself:
article.remove();


// DOM event concepts/use cases
// Click Event: When a user clicks an element
buttonElement.addEventListener('click', function() {
    // Code to execute when an element is clicked

    // addEventListener is a method that takes two arguments:
    // the event name and a function to execute when the event
    // is triggered.
})

// Keyup Event: Triggeres when a key is released
buttonElement.addEventListener('keyup', function() {
    // Code to execute when a key is released
})

// DOMContentLoaded Event: Triggered when the HTML document 
// has been completely parsed and all deferred scripts executed
document.addEventListener("DOMContentLoaded", function() {
    // Code to execute when the DOM is parsed
})