## Check the user's input

In this step, you will check that the user has completed the form and warn them if they have missed a section.

<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/comic-character-step6?page=character.html" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

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
line_number_start: 33
line_highlights: 35
---

        <label for="origin-text">Origin Story:</label>
        <textarea id="origin-text" placeholder="Add your superhero origin story!"></textarea>
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
line_number_start: 33
line_highlights: 35-36
---

        <label for="origin-text">Origin Story:</label>
        <textarea id="origin-text" placeholder="Add your superhero origin story!"></textarea>
        <div id="alert"> 
        </div>
        <button onclick="checkForm()">Create</button>
      </section>
    
--- /code ---

--- /task ---

### Create an alert message

You need to update the contents of the alert `<div>` with a message.

--- task ---

Open `scripts.js`.

Use `querySelector()` to find the `<div>` element with the attribute `id="alert"`.

Assign this to a constant `alertBox`.

--- code ---
---
language: js
filename: scripts.js
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

The `alertBox` `<div>` will be hidden until it is needed.

### Create the checkForm() function

--- task ---

Create the function `checkForm()`.

--- code ---
---
language: js
filename: scripts.js
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
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 36
---
// Function to check the character details form 
const alertBox = document.querySelector("#alert");

function checkForm(){

var alertMessage = "";

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

### Check the user has entered a superhero name

You need to check each field to decide if it is empty.

Start with the first field, `characterName`, which holds the HTML element with the attribute `id="name-text"`.

The `.value` property of a form field will be empty if the user has missed it.

--- task ---

Use an `if` statement to check if the value of `characterName` is empty.

**Notice:** The operator `==` is used. It means 'is the same as'.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 38-40
---
// Function to check the character details form 
const alertBox = document.querySelector("#alert");

function checkForm(){

  var alertMessage = "";

  if (characterName.value == ""){

  }

}
    
--- /code ---

--- /task ---

Inside the `if` statement, you need code to run if the result is **true** (meaning `characterName` **is** empty).

--- task ---

Assign `alertMessage` a string if the condition is true.

The string needs to be a message that tells the user what to if the **Superhero Name** field has been left blank.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 39
---
// Function to check the character details form 
const alertBox = document.querySelector("#alert");

function checkForm(){

  var alertMessage = "";

  if (characterName.value == ""){
    alertMessage = "Please enter a name"; 
  }

}
    
--- /code ---

--- /task ---

### Show an alert

When you created `alertMessage`, you assigned it an empty string (`""`).

If the **Superhero Name** field is blank, then you set `alertMessage` to a message to alert the user.

You only want to show the alert if there is a message in `alertMessage`.

So you need to check if `alertMessage` is **not** an empty string now.

--- task ---

Use an `if` statement to check if the variable `alertMessage` is **not** an empty string (meaning it has been assigned a message for the user).

**Notice:** The operator `!=` is used. It means 'is **not** the same as'.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 42-44
---
// Function to check the character details form 
const alertBox = document.querySelector("#alert");

function checkForm(){

  var alertMessage = "";

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
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 43
---
// Function to check the character details form 
const alertBox = document.querySelector("#alert");

function checkForm(){

  var alertMessage = "";

  if (characterName.value == ""){
    alertMessage = "Please enter a name"; 
  }

  if (alertMessage != ""){
    alertBox.innerText = alertMessage;
        
  }
}
    
--- /code ---

--- /task ---

The `display` property for the `#alert` selector is set by default to `none`, so the alert box is hidden when the page loads.

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
  color: var(--text-colour-alert);
  display: none;
}
    
--- /code ---

--- /collapse ---

If there is a message to show to the user, you need to make the alert box appear.

--- task ---

In your new `if` statement, set the `display` property for the `#alert` selector to `block`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 44
---
// Function to check the character details form 
const alertBox = document.querySelector("#alert");

function checkForm(){

  var alertMessage = "";

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

--- task ---

**Click Run**
+ Leave the Superhero Name field blank
+ Click the Create button
+ The alert message will show 

--- /task ---

### Hide the alert and show the summary

You need to use an `else` statement to hide the alert (and show the summary) if `alertMessage` is still set to an empty string (`""`).

This is another way to think about how the `else` statement works with the `if` statement:

    If the alert message is not ""
      - show the alert.
    Otherwise (else)
      - hide the alert
      - show the summary.

--- task ---

Use an `else` statement to set the `display` property for the `#alert` selector to `none` and call the `displaySummary()` function.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 45-48
---
// Function to check the character details form 
const alertBox = document.querySelector("#alert");

function checkForm(){

  var alertMessage = "";

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

**Click Run** 
+ Fill in the Superhero Name field
+ Click the Create button
+ The alert message will **not** show 
+ The summary will show
**Notice:** The ability and origin story sections will be blank

--- collapse ---

---
title: The summary section is not showing
---

+ Check you have used brackets`()` e.g. `if (characterName.value == "")` in your `if` and `else` statements
+ Check you have called the `displaySummary()` function in your `else` block

--- /collapse ---

--- /task ---

### Check the Ability field

You have used an `if` statement to check if the value of `characterName` is empty.

If it is **not** empty, you need to use `else if` statements to check the other form fields.

This is another way to think about how `else if` statements work with the `if` statement:

    If characterName is ""
      - set an alert.
    Otherwise (else) if characterAbility is ""
      - set an alert.
    Otherwise (else) if characterOrigin is ""
      - set an alert.

--- collapse ---

---
title: Why not use three if statements?
---

**Tip:** Using `if` with `else if` statements means that if any condition is 'true', subsequent `else if` statements are ignored. This saves resources and time. If multiple `if` statements are used, all `if` statements are checked, even if one condition is met.

In this form, the user is alerted about the first blank field.

--- /collapse ---

--- task ---

Use an `else if` statement to check if the value of `characterAbility` is empty.

If it is, assign `alertMessage` a string.

The string needs to be a message that tells the user what to if the **Ability** field has been left blank.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 40-42
---
// Function to check the character details form 
const alertBox = document.querySelector("#alert");

function checkForm(){

  var alertMessage = "";

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

--- task ---

### Check the Origin Story field

Use another `else if` statement to check the value of `characterOrigin`.

Add an alert message to show the user if it is blank.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 42-44
---
// Function to check the character details form 
const alertBox = document.querySelector("#alert");

function checkForm(){

  var alertMessage = "";

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

--- /task ---

--- task ---

**Click Run** 
+ Type values into some of the form fields, but leave some blank.
+ Click the Create button. An alert message will show for any field you have left blank.
+ Test this a few times with a different form fields.
+ Complete all form fields. Click 'Create' to see the summary.

--- collapse ---

---
title: I should be getting alerts but I am not
---

+ Check you have added `.value` after `characterName`, `characterAbility`, and `characterOrigin`.

--- /collapse ---

--- /task ---

Great effort! You have created checks and alerts to help the user create their superhero!

Next, you will create a switch so the user can change between light and dark mode!
