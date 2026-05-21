const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list')


// Wait for a button click
button.addEventListener('click', function() {

    // Check if the user has entered something
    if (input.value.trim() !== '') {

        // Create a list item and give it the value of the input
        const li = document.createElement('li');
        // textContent is preferred over innerHTML because it is more secure.
        // However, if you need to include HTML tags, use innerHTML.
        // textContent will not render HTML tags; it will display them as plain text.
        li.textContent = input.value;

        // Create a button
        const deleteButton = document.createElement('button')
        // Add a graphic to it
        deleteButton.textContent = '❌';
        // Add a click event listener for the delete button
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        })

        // Add the button to the end of the list element
        li.append(deleteButton);
        // OUTPUT: Finally display the completed list item to the unordered list
        list.appendChild(li);
        // Clear the user input field
        input.value = '';
    }

    input.focus();
    
})