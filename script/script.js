let myUl = document.querySelector('#myUl');
let myInput = document.querySelector('.myInput');
let myForm = document.querySelector('#form');

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
