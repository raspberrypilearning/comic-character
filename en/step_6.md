## Validate your users input

In this step, you will use JavaScript functionality to validate your users input. 
<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/comic-character-step6" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

At the moment, your users are able to complete the superhero creation form and submit it.
However, they are able to submit the information even if they have left some form fields blank.

You can ensure that users complete all the form fields before submitting it by using validation. 

For example, when you register on some websites, your registration form will be validated to check you have completed certain fields such as your username or password. Some forms can also validate the length and characters contained within your password input.

### Create an area to show your validation alerts

--- task ---

Open `comicbook.html`.

Change the event handler function in the `<button>` element with the attribute `onclick="changeSummary()` to `onclick="validateForm()`.

--- code ---
---
language: html
filename: comicbook.html
line_numbers: true
line_number_start: 41
line_highlights: 45
---

      <div id="origin-input">
        <label>Origin Story: </label> 
        <textarea id="origin-text" placeholder="Type your superhero origin story here...."></textarea>
     </div>
     <button onclick="validateForm()">Submit</button>
    
--- /code ---

--- /task ---

You will need a section on your form page to show validation messages (alerts) to your user.

--- task ---

Add a `<div>` element with the attribute `id="alert"` below the `<button>` element with the attribute  `onclick="validateForm()`.

--- code ---
---
language: html
filename: comicbook.html
line_numbers: true
line_number_start: 41
line_highlights: 45
---

      <div id="origin-input">
        <label>Origin Story: </label> 
        <textarea id="origin-text" placeholder="Type your superhero origin story here...."></textarea>
     </div>
     <button onclick="validateForm()">Submit</button>
     <div id="alert"> 
     </div>
    
--- /code ---

--- /task ---

### Create validation messages

--- task ---

Open `script.js`.

Use the DOM function `querySelector()` to find the `<div>` element with the attribute `id="alert"`.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 32
line_highlights: 33
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
line_number_start: 32
line_highlights: 35-37
---
     // Function to validate the character creation form 
      const alertBox = document.querySelector("#alert");

    function validateForm(){

}
    
--- /code ---

--- /task ---

--- task ---

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 32
line_highlights: 35-39
---
     // Function to validate the character creation form 
    const alertBox = document.querySelector("#alert");

    function validateForm(){

    var alertMessage = ""

}
    
--- /code ---

--- /task ---

--- task ---

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 33
line_highlights: 41
---
     // Function to validate the character creation form 
const alertBox = document.querySelector("#alert");

function validateForm(){

    var alertMessage = ""

    if (name.value == "")

}
    
--- /code ---

--- /task ---

--- task ---

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 33
line_highlights: 41-42
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
line_number_start: 32
line_highlights: 45-51
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
line_number_start: 32
line_highlights: 43-45
---
     // Function to validate the character creation form 
const alertBox = document.querySelector("#alert");

function validateForm(){

    var alertMessage = ""

    if (name.value == ""){
        alertMessage = "Please enter a name"; 
    } else if (ability.value == "") {
        alertMessage = "Please choose an ability";
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
line_number_start: 32
line_highlights: 45-50
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