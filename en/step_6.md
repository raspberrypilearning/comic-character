## Check the user's input

In this step, you will check that the user has completed the form and warn them if they have missed a section.

<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/comic-character-step6" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

At the moment, the user can submit the information even if they have left some form fields empty.

You need to create a new function that checks the user has completed all the form fields before calling the `displaySummary()` function. 

### Change the function for the Create button

--- task ---

Open `character.html`.

Change the function that handles the Create button's `onclick` event. 

--- code ---
---
language: html
filename: character.html
line_numbers: true
line_number_start: 41
line_highlights: 45
---

    <div id="origin-input">
      <label>Origin Story:</label> 
      <textarea id="origin-text" placeholder="Add your superhero origin story!"></textarea>
    </div>
    <button onclick="checkForm()">Create</button>
    
--- /code ---

--- /task ---

### Create an area to show alerts

You need to show an alert to the user if part of the form is blank.

--- task ---

Create an empty `<div>` element with the attribute `id="alert"` below the Create button.

--- code ---
---
language: html
filename: character.html
line_numbers: true
line_number_start: 41
line_highlights: 46-47
---

      <div id="origin-input">
        <label>Origin Story:</label> 
        <textarea id="origin-text" placeholder="Add your superhero origin story!"></textarea>
     </div>
     <button onclick="checkForm()">Create</button>
     <div id="alert"> 
     </div>
    
--- /code ---

--- /task ---

### Create an alert message

You need to update the contents of the alert div with a message.

--- task ---

Open `script.js`.

Use `querySelector()` to find the `<div>` element with the attribute `id="alert"`.

Assign this to a constant `alertBox`.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 31
line_highlights: 32
---
// Function to check the character details form 
const alertBox = document.querySelector("#alert");
    
--- /code ---

--- /task ---

You need a new `checkForm()` function to check each field on your form for an empty value.

If there is an empty value, an alert will be shown to the user in the `alertBox`. 

The `alertBox` div will be hidden until it is needed.

### Create the checkForm() function

--- task ---

Create the function `checkForm()`.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 31
line_highlights: 34-36
---
// Function to check the character details form 
const alertBox = document.querySelector("#alert");

function checkForm(){

}
    
--- /code ---

--- /task ---

### Create a variable to hold an alert message

You need a variable to hold an alert message if the function finds an empty value.

--- task ---

Create the variable `alertMessage` and assign it an empty string(`""`).

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 31
line_highlights: 36
---
// Function to check the character details form 
const alertBox = document.querySelector("#alert");

function checkForm(){

var alertMessage = ""

}
    
--- /code ---

--- /task ---

--- collapse ---

---
title: What is a variable?
---

A variable is a named area of computer memory that holds a value. 

The value can be changed by the program.

For example, `var age = 10;` `age` is the name of the variable. It is assigned the value `10`.

--- /collapse ---

### Check the user has entered a character name


You need to check each field to decide if it is empty.

Start with the first field: `characterName`, which holds the HTML element with the attribute `id="name-text"`.

The `.value` property of a form field will be empty if the user has missed it.

--- task ---

Use an `if` statement to check if the value of `characterName` is empty.

**Notice:** The operator `==` is used. It is means 'is the same as'.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 31
line_highlights: 38
---
// Function to check the character details form 
const alertBox = document.querySelector("#alert");

function checkForm(){

  var alertMessage = ""

  if (characterName.value == "")

}
    
--- /code ---

--- /task ---

Inside the `if` statement, you need code to run if the result is **true** (meaning `characterName` **is** empty).

--- task ---

Assign `alertMessage` a string if the condition is true.

The string needs to be a message that tells the user what to if the **character name** field has been left blank.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 31
line_highlights: 39
---
// Function to check the character details form 
const alertBox = document.querySelector("#alert");

function checkForm(){

  var alertMessage = ""

  if (characterName.value == ""){
    alertMessage = "Please enter a name"; 
  }

}
    
--- /code ---

--- /task ---

### Show an alert

You only need to show an alert if a message for the user has been assigned to `alertMessage`.

When you created `alertMessage`, you assigned it an empty string (`""`).

You need to check if `alertMessage` is **not** an empty string now.

--- task ---

Use an `if` statement to check if the variable `alertMessage` is not an empty string (meaning it has been assigned a message for the user).

**Notice:** The operator `!=` is used. It is means 'is **not** the same as'.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 31
line_highlights: 42-44
---
// Function to check the character details form 
const alertBox = document.querySelector("#alert");

function checkForm(){

  var alertMessage = ""

  if (characterName.value == ""){
    alertMessage = "Please enter a name"; 
  }

  if (alertMessage != ""){  
        
  }
}
    
--- /code ---

--- /task ---

If `alertMessage` contains a message for the user, you need to set the `.innerText` content of `alertBox` to be that message.

--- task ---

Set the `.innerText` content of `alertBox` to the string held in `alertMessage`.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 31
line_highlights: 43
---
// Function to check the character details form 
const alertBox = document.querySelector("#alert");

function checkForm(){

  var alertMessage = ""

  if (characterName.value == ""){
    alertMessage = "Please enter a name"; 
  }

  if (alertMessage != ""){
    alertBox.innerText = alertMessage;
        
  }
}
    
--- /code ---

--- /task ---

The `display` property for the `#alert` selector has been set to `none`, so the alert box is hidden.

--- collapse ---

---
title: View the alert CSS selector
---

--- code ---
---
language: css
filename: style.css
line_numbers: false
line_number_start: 
line_highlights: 4
---

#alert {
  text-align: center;
  color: red;
  display: none;
}
    
--- /code ---

--- /collapse ---

If there is a message to show the user, you need to make alertBox appear.

--- task ---

Set the `display` property for the `#alert` selector to `block`

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 31
line_highlights: 44
---
// Function to check the character details form 
const alertBox = document.querySelector("#alert");

function checkForm(){

  var alertMessage = ""

  if (characterName.value == ""){
    alertMessage = "Please enter a name"; 
  }

  if (alertMessage != ""){
    alertBox.innerText = alertMessage;
    alertBox.style.display = "block";
  }
}
    
--- /code ---

--- /task ---

### Hide the alert

You need to use an `else` statement. This will let you do this:

    If the alert message is not `""`, then show the alert.
    Otherwise (else), hide the alert.

--- task ---

Use an `else` statement to set the `.style.display` property of  `alertBox` to `"none";`

Call the `displaySummary()` function to be executed if there is no validation message displayed to the user.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 32
line_highlights: 45-51
---
     // Function to check the character details form 
const alertBox = document.querySelector("#alert");

function checkForm(){

    var alertMessage = ""

    if (characterName.value == ""){
        alertMessage = "Please enter a name"; 
    }

    if (alertMessage != ""){
        alertBox.innerText = alertMessage;
        alertBox.style.display = "block";
    } else {
        alertBox.style.display = "none";
        displaySummary();
    }

}
    
--- /code ---

--- /task ---

--- task ---

Open `character.html`.

**Test:** Click the **Run** button to see your changes. 

+ Do not type in a superhero name on the form because this is the only validation check you have created.
+ Click 'Create' to submit the form; a validation message should be shown.
+ You can then type in a superhero name on the form. Click 'Create', a character summary should be shown.

--- /task ---

**Debug step:**
+ Ensure you have used brackets`()` e.g.`if (characterName.value == "")` when checking a condition in an `if`, `if-else`, statement.
+ Ensure you have added the block of code to be executed within curly braces `{}` if your condition is true.
+ Ensure you have called the `displaySummary()` function within your `else` condition block.

### Create more alert messages

You have created a validation message to be shown to the user, if the form field with the attribute `id="name-text"`(held in the constant `characterName`) is left empty. 

However, you need to create more validation messages for the other form field elements.
These have been held in the constants `characterAbility`, and `origin`.

This means there are more than two conditions to check. 
You can use an `if-else if-else` statement when checking multiple conditions.

--- task ---

Open `script.js`.

Use an `else if` statement to check if the value of `characterAbility` is empty.

Inside the `else if` statement, add the block of code to be executed if the condition is true.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 32
line_highlights: 43-45
---
     // Function to check the character details form 
const alertBox = document.querySelector("#alert");

function checkForm(){

    var alertMessage = ""

    if (characterName.value == ""){
        alertMessage = "Please enter a name"; 
    } else if (characterAbility.value == "") {
        alertMessage = "Please choose an ability";
    }

    if (alertMessage != ""){
        alertBox.innerText = alertMessage;
        alertBox.style.display = "block";
    } else {
        alertBox.style.display = "none";
        displaySummary();
    }

}
    
--- /code ---

--- /task ---

Note that `characterAbility` is currently holding the HTML element with the attribute `id="ability-choice"`.

So you have changed the validation message to match the content of the form field.

--- task ---

Use another `else if` statement to check the value of `characterOrigin`.

Add an alert message to show the user if it is blank.

--- collapse ---

---
title: Solution for else if statements
---

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 32
line_highlights: 43-44
---
     // Function to check the character details form 
const alertBox = document.querySelector("#alert");

function checkForm(){

    var alertMessage = ""

    if (characterName.value == ""){
        alertMessage = "Please enter a name"; 
    } else if (characterAbility.value == "") {
        alertMessage = "Please choose an ability";
    } else if (characterOrigin.value == "") {
        alertMessage = "Please write the origin story";
    } 

    if (alertMessage != ""){
        alertBox.innerText = alertMessage;
        alertBox.style.display = "block";
    } else {
        alertBox.style.display = "none";
        displaySummary();
    }

}
    
--- /code ---

--- /collapse ---

--- /task ---

--- task ---

Open `character.html`.

**Test:** Click the **Run** button to see your changes. 

+ Type values into some of the form fields, while leaving some blank.
+ Click "Create" to submit the form; a validation message should be shown for the form field you have left blank.
+ Test this a few times with a different form field.
+ You can then complete the whole form. Click 'Create', a character summary should be shown.

--- /task ---

Great effort, you have created validation checks to ensure the user completes all the form fields to create their superhero. Next, you will create a toggle switch that will allow the user to switch between light and dark mode.