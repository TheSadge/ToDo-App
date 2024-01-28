# ToDo List 

A web based toDo list made with Vanilla Java Script

## Features

- U can Remove a List item by clicking on each
- input field reset automatically
- ...

## JavaScript Usage

used to add what the user type in input box and add a style to list items when user clicked on them 

```javascript
myForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Check if the input is not empty
    if (myInput.value.trim() !== '') {
        let myLi = document.createElement('li');
        myLi.innerHTML = myInput.value;
        myUl.appendChild(myLi);

        myLi.addEventListener('click', function() {
            // Toggle the 'text-decoration' style between 'none' and 'line-through'
            if (myLi.style.textDecoration === 'line-through') {
                myLi.style.textDecoration = 'none';
            } else {
                myLi.style.textDecoration = 'line-through';
            }
        });

        // Clear the input field 
        myInput.value = '';
    } else {
        // Alert the user if he press Enter while the field is Empthy
        alert(' I Cannot Add Nothing...');
    }
});
