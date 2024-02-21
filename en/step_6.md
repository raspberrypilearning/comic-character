## Validate your user's input

In this step, you will continue building the functionality of your form. You will use JavaScript to show/hide elements of your form. and show a summary display of your user's superhero character. 
<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/comic-character-step6" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

--- task ---

Open `script.js`.


--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 5
line_highlights: 6-7
---
     // Function to validate the character creation form 
const alertBox = document.querySelector("#alert");
    
--- /code ---

--- /task ---

--- task ---

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 5
line_highlights: 6-7
---
     // Function to validate the character creation form 
const alertBox = document.querySelector("#alert");

function validateForm(){

    var alertMessage = ""

    if (name.value == ""){
        alertMessage = "Please enter a name"; 
    }

}
    
--- /code ---

--- /task ---

--- task ---

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 5
line_highlights: 6-7
---
     // Function to validate the character creation form 
const alertBox = document.querySelector("#alert");

function validateForm(){

    var alertMessage = ""

    if (name.value == ""){
        alertMessage = "Please enter a name"; 
    }

    if (alertMessage != ""){
        alertBox.innerHTML = alertMessage;
        alertBox.style.display = "block";
    } else {
        alertBox.style.display = "none";
        displaySummary();
    }

}
    
--- /code ---

--- /task ---

--- task ---

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 5
line_highlights: 6-7
---
     // Function to validate the character creation form 
const alertBox = document.querySelector("#alert");

function validateForm(){

    var alertMessage = ""

    if (name.value == ""){
        alertMessage = "Please enter a name"; 
    } else if (ability.value == "") {
        alertMessage = "Please choose an ability";
    } else if (appearance.value == "") {
        alertMessage = "Please describe the appearance";
    } else if (origin.value == "") {
        alertMessage = "Please write the origin story";
    } 

    if (alertMessage != ""){
        alertBox.innerHTML = alertMessage;
        alertBox.style.display = "block";
    } else {
        alertBox.style.display = "none";
        displaySummary();
    }

}
    
--- /code ---

--- /task ---