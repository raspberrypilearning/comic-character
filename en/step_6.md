## Validate the user's input

In this step, you will check that the user has completed the form and warn them if they have missed a section.

<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/comic-character-step6" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

At the moment, the user can submit the information even if they have left some form fields empty.

You can check the user completes all the form fields before submitting it by using validation. 

For example, when you register on some websites, your registration form will be validated to check you have completed certain fields such as the username or password. Some forms can also validate the length and characters contained within your password input.

### Create an area to show your validation alerts

--- task ---

Open `character.html`.

Change the event handler function in the `<button>` element with the attribute `onclick="changeSummary()` to `onclick="validateForm()`.

--- code ---
---
language: html
filename: character.html
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

You will need a section on your form page to show validation messages (alerts) to the user.

--- task ---

Create a `<div>` element with the attribute `id="alert"`.

This should be placed below the `<button>` element with the attribute  `onclick="validateForm()`.

--- code ---
---
language: html
filename: character.html
line_numbers: true
line_number_start: 41
line_highlights: 46
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

### Create validation message

--- task ---

Open `script.js`.

Use the `querySelector()` to find the `<div>` element with the attribute `id="alert"`.

Assign this element to a constant `alertBox`.

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

You previously created a function `displaySummary()` which would be used as an event handler when the user clicks the "Create" button.

However, you have changed this event attribute to `validateForm()` which will handle the response first, to check if the user has completed all the details on the superhero form.

--- task ---

Create a function `validateForm()` which will be the new event handler.

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

This function will check the fields on your form for any empty values. If there are empty values, a validation message will be shown to the user in the alert box. The alert box will be hidden until the `validateForm()` function is run.

--- task ---

Assign a variable `alertMessage` to store an empty string represented by two speech marks ("").

This will be used later to store validation messages when the function runs.

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

--- collapse ---

---
title: What is a variable?
---

A variable in programming is a named area of memory that holds a value. The value can be changed when the program runs.
For example, `var age = 30;` `age` is the variable storing the value `30`.

In this example `var alertMessage = ""`; `alertMessage` is the variable storing an empty string value.
You will be able to change the value of this variable as the function is executed.

--- /collapse ---

To check the data inputted on your form, you can use the `.value` property to retrieve the current value of the user's input.

You will also need to use a conditional statement to check if the current value of the fields is empty or blank.

Conditional statements are used to make decisions in your code based on different criteria. 
There are three main types of conditional statements in JavaScript: `if`, `if-else`, `if-else if-else`.

An `if` statement is used to check if a certain critera is true or false.

--- task ---

Use an `if` statement and the `.value` property to check if the value of the constant, `name` is empty.

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

    if (characterName.value == "")

}
    
--- /code ---

Note that `name` is currently storing the HTML element with the attribute `id="name-text"`.
So you will be checking if this form field has been left empty by the user.

--- /task ---

--- collapse ---

---
title: How do conditional statements work?
---

In JavaScript, conditional statements are used to make decisions in your code based on certain criteria. These conditions are checked to either be true or false, and the code is then executed based on these choices. There are three main types of conditional statements in JavaScript:

+ if statement: this is used to execute a block of code if a specified condition is checked to be true.
    
--- code ---
---
language: js
filename: script.js
line_numbers: true
---
    if (condition) {
        // Code to be executed if the condition is true
    }
    
--- /code ---

+ if-else statement: this is an extension of the if statement. It allows you to set an alternative block of code to be executed if the initial condition is false.
    
--- code ---
---
language: js
filename: script.js
line_numbers: true
---

    if (condition) {
      // Code to be executed if the condition is true
    } else {
    // Code to be executed if the condition is false
    }
    
--- /code ---

+ if-else if-else statement: this is used when you have multiple conditions to check. It allows you to execute different blocks of code based on the checks.
    

--- code ---
---
language: js
filename: script.js
line_numbers: true
---

    if (condition1) {
    // Code to be executed if condition1 is true
    } else if (condition2) {
    // Code to be executed if condition2 is true
    } else {
    // Code to be executed if none of the conditions is true
    }
    
--- /code ---

--- /collapse ---

You have used a comparison operator `==` to check if the value of the form field is equal to an empty string. 

--- collapse ---

---
title: What are comparison operators?
---

Comparison operators in JavaScript are used to compare two values and return a Boolean result (either `true` or `false`). These are some commonly used comparison operators:

+ Equal (==) Operator: this operator checks if two values are equal, and it converts the data types to be the same if they are different.

--- code ---
---
language: js
filename: script.js
line_numbers: true
---
    var num1 = 5;
    var num2 = "5";
    console.log(num1 == num2); // Outputs: true
    
--- /code ---

    In this example, num1 and num2 are considered equal because the values are the same after data type conversion.

+ Strict Equal (===) Operator: this operator checks if two values are equal without converting them to be the same data type. It also checks if the data types are the same.

--- code ---
---
language: js
filename: script.js
line_numbers: true
---

    var num1 = 5;
    var num2 = "5";
    console.log(num1 === num2); // Outputs: false
    
--- /code ---

     In this example, num1 and num2 are not strictly equal because their data types are different

+ Not Equal (!=) Operator: this operator checks if two values are not equal and converts them to the same data type if they are different.

--- code ---
---
language: js
filename: script.js
line_numbers: true
---

    var num1 = 5;
    var num2 = "5";
    console.log(num1 != num2); // Outputs: false
    
--- /code ---

    In this example, num1 and num2 are equal after the data types are converted. It will return as false.

+ Strict Not Equal (!==) Operator: this operator checks if two values are not equal, without converting them to the same data type. It also checks if the data types are different.

--- code ---
---
language: js
filename: script.js
line_numbers: true
---

    var num1 = 5;
    var num2 = "5";
    console.log(num1 !== num2); // Outputs: true
  
--- /code ---

    In this example, num1 and num2 have different data types. So it will return as true.

+ Greater Than (>) Operator: this operator checks if the value on the left is greater than the value on the right

--- code ---
---
language: js
filename: script.js
line_numbers: true
---

    var num1 = 10;
    var num2 = 5;
    console.log(num1 > num2); // Outputs: true
  
--- /code ---

    In this example, num1 is greater than num2 so it will return as true.

+ Less Than (<) Operator: this operator checks if the value on the left is less than the value on the right.

--- code ---
---
language: js
filename: script.js
line_numbers: true
---

    var num1 = 10;
    var num2 = 15;
    console.log(num1 < num2); // Outputs: true
  
--- /code ---

     In this example, num1 is less than num2 so it will return as true.

--- /collapse ---

Inside the `if` statement, you can set the block of code that will be executed if the condition is true (in this case you are checking if the form field is left empty by the user).

--- task ---

Change the value of the variable `alertMessage` to store a user friendly validation message if the `name-text` input field has been left blank.

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

    if (characterName.value == ""){
        alertMessage = "Please enter a name"; 
    }

}
    
--- /code ---

--- /task ---

You have now updated the variable `alertMessage` to store a validation message.
Therefore, it no longer stores an empty string.

You will now need the program to check two conditions:
+ if `alertMessage` is not an empty string (it now contains the validation message you have created earlier).
+ or `alertMessage` is empty (there is no validation message, the form field is not empty).

You can use an `if-else` statement to set these conditions.

--- task ---

Use an `if` statement to set what happens if the variable `alertMessage` is not an empty string, using a not equals operator.

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

    if (characterName.value == ""){
        alertMessage = "Please enter a name"; 
    }

    if (alertMessage != ""){
    
        
    }
}
    
--- /code ---

--- /task ---

You will need to manipulate the content of the element, to display your validation message.

--- task ---

Inside the `if` statement, add the block of code that will be executed if the condition is true.

Use the `.innerText` property to update the HTML element stored in the `alertBox` constant to the value of the current `alertMessage`.

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

    if (characterName.value == ""){
        alertMessage = "Please enter a name"; 
    }

    if (alertMessage != ""){
        alertBox.innerText = alertMessage;
        
    }
}
    
--- /code ---

--- /task ---

The display property of the `<div>` element with the attribute `id="alert"` is currently set to `none;` 

You will need to change this to make it appear, when there is a validation message to show the user.

--- task ---

Use the `.style.display` property to change your `alertBox` constant to `"block";`

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

You have set a decision to make `alertBox` appear, if `alertMessage `is not equal to an empty string.

But what happens if `alertMessage` is equal to an empty string? This means the condition is false!

You want the HTML element stored in the constant `alertBox` to disappear because there is no validation message to show the user. 
This means there are no empty fields and the form can then be submitted.

You can use an `else` statement to set a decision for this. 

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
     // Function to validate the character creation form 
const alertBox = document.querySelector("#alert");

function validateForm(){

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

### Create more validation messages

You have created a validation message to be shown to the user, if the form field with the attribute `id="name-text"`(stored in the constant `name` ) is left empty. 

However, you will need to create more validation messages for the other form field elements.
These have been stored in the constants `ability`, `appearance` and `origin`.

This means there are more than two conditions to check. 
You can use an `if-else if-else` statement when checking multiple conditions.

--- task ---

Open `script.js`.

Use an `else if` statement to check if the value of `ability` is empty.

Inside the `else if` statement, add the block of code to be executed if the condition is true.

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

Note that `ability` is currently storing the HTML element with the attribute `id="ability-choice"`.

So you have changed the validation message to match the content of the form field.

--- task ---

Use two more `else if` statements to check the values of `appearance` and `origin`.

Add two more validation messages to show the user inside your `else if` statements.

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
line_highlights: 45-50
---
     // Function to validate the character creation form 
const alertBox = document.querySelector("#alert");

function validateForm(){

    var alertMessage = ""

    if (characterName.value == ""){
        alertMessage = "Please enter a name"; 
    } else if (characterAbility.value == "") {
        alertMessage = "Please choose an ability";
    } else if (characterAppearance.value == "") {
        alertMessage = "Please describe the appearance";
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