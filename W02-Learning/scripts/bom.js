const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const deletebutton = document.createElement('button');
const li = document.createElement('li');

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        
        li.textContent = input.value;
        
        deletebutton.textContent = '❌';
					
        list.appendChild(li);
        list.appendChild(deletebutton);
    }
    else {
        const emptywarning = document.createElement('p')
        article.append(emptywarning, 'Please fill in a response')
    }
})

deletebutton.addEventListener('click', function() {
    list.removeChild(li);
    input.focus();
})

input.value = '';

input.focus();