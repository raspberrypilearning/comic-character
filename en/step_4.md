## Make items appear/disappear

In this step, you will use JavaScript to make parts of your form appear and disappear. 

<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/comic-character-step4" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### Show the summary section

Your user needs to press a button to show the summary section.

An `onclick` event can be added to the button.

JavaScript can be used to react to this event and show the summary.

--- collapse ---

---
title: Other events
---

Events can be triggered by the user or the browser.

+ User events:
  + Mouse events (click, double click, mouseover).
  + Keyboard events (keypress, keydown, keyup).
  + Touch events (touchstart, touchmove, touchend).

+ Browser events:
  + Page load events (load, unload).
  + Window events (resize, scroll).
  + Time events (setInterval, setTimeout).

--- /collapse ---

--- task ---

Open the `character.html` file.

Add a `<button>` element with the event `onclick="displaySummary()"` below the origin story `div` 

Add the text 'Create' to the `<button>`, so the user knows what the button does.

--- code ---
---
language: html
filename: character.html
line_numbers: true
line_number_start: 35
line_highlights: 40
---

          </div>
          <div id="origin-input">
            <label>Origin Story:</label> 
            <textarea id="origin-text" placeholder="Add your superhero origin story!"></textarea>
          </div>
          <button onclick="displaySummary()">Create</button>
        </section>

--- /code ---

**Test:** Click the **Run** button to see your changes.
+ You will see a Create button below your superhero form.
+ The Create button does not do anything at the moment. 

--- /task ---

Nothing will happen when the user clicks the Create button. 

This is because the summary section has its CSS `display` property set to `none`.

You need to use JavaScript to change the summary section's `display` property to `flex`.

When the summary section is displayed, you will hide the character details form.

### Create constants to refer to each section

Your function will use constants that refer to each section.

--- task ---

Open `script.js`.

Use the `querySelector()` method to find:
+ the summary section element and assign it to the constant `summary`.
+ the character details section element and assign it to the constant `characterDetails`.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 5
line_highlights: 6-7
---
// Create constants for superhero form
const summary = document.querySelector("#summary-section");
const characterDetails = document.querySelector("#character-details");
    
--- /code ---

--- /task ---

### Create constants to refer to each form field

You need to display the three character details to in the summary section.

Set each as a constant, so you can refer to them in your code.

--- task ---

Use `querySelector()` methods to find the form elements and assign each to a constant.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 5
line_highlights: 9-11
---
// Create constants for superhero form
const summary = document.querySelector("#summary-section");
const characterDetails = document.querySelector("#character-details");

const characterName = document.querySelector("#name-text");
const characterAbility = document.querySelector("#ability-choice");
const characterOrigin = document.querySelector("#origin-text");
    
--- /code ---

--- /task ---

### Update the contents of the summary

In `character.html`, you added a `<p>` element with the attribute `id="summary-paragraph"`.

--- collapse ---

---
title: The summary paragraph you created earlier
---

--- code ---
---
language: html
filename: character.html
line_numbers: true
line_number_start: 
line_highlights: 3
---

		<section id="summary-section">
		  <h2>Superhero Summary</h2>
		  <p id="summary-paragraph"></p>
		</section>

--- /code ---

--- /collapse ---

The summary paragraph will display a summary of the character details.

You need a function to update the contents of the summary paragraph.

--- task ---

Create a function `displaySummary()`. 

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 14
line_highlights: 15-17
---
    
// Function to display summary
function displaySummary() {
  
}
    
--- /code ---

--- /task ---
              
The `displaySummary()` function needs to change the `<p>` element with the attribute `id="summary-paragraph"`.

--- task ---

Use the `querySelector()` to find the `<p>` element with the attribute `id="summary-paragraph"`.

Assign the element to the constant `summaryParagraph`.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 14
line_highlights: 16
---
    
// Function to display summary
function displaySummary() {
  const summaryParagraph = document.querySelector("#summary-paragraph");

}
    
--- /code ---

--- /task ---

You have previously changed the `.innerText` property of an HTML element. 

Here, you will change the `.textContent` property of the summary paragraph to include the values entered by the user in each field.

Each value will appear next to text introducing the value (e.g. 'Your superhero name is ')

You can use 'string formatting' to do this.

--- collapse ---

---
title: What is string formatting?
---

A string is a data type in JavaScript and other programming languages. 

A string is a collection of characters between double quotes `" "` or single quotes `' '`.

You can format strings using template literals or concatenation. 

### Template literals

If you want to include the values from constants, variables, or expressions in a string, then you can use template literals.

Instead of using `" "` or `' '`, you use backticks ``` ` ` ``` to indicate a string.

Then use `${}` and place the constant, variable or expression inside the `{}` part.

Here is an example:
+ Include the values held in the constants `heroName` and `age` inside a string.

--- code ---
---
language: js
filename: script.js
line_numbers: false
---
    
const heroName = "Spider Man";
const age = 25;
const message = `Hello, ${heroName}! You are ${age} years old.`;
    
--- /code ---

### Concatenation

Concatenation is the act of joining things together.

You can join strings together using the `+` operator.

Here is an example:

--- code ---
---
language: js
filename: script.js
line_numbers: false
---
    
const superhero = "Iron Man";
const power = "suit of armor";

const description = "The superhero " + superhero + " has a " + power + ".";
    
--- /code ---

--- /collapse ---

--- task ---

Update the `.textContent` of the `summaryParagraph`.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 14
line_highlights: 18-20
---
    
// Function to display summary
function displaySummary() {
  const summaryParagraph = document.querySelector("#summary-paragraph");

  summaryParagraph.textContent = `Your superhero name is ${characterName.value}. 
  Your ability is ${characterAbility.value}. 
  Your origin story is ${characterOrigin.value}.`;

}
    
--- /code ---

--- /task ---

### Hide the character details form

--- task ---

Set the value of the `display` property of the character details `<section>` to `none`.

This will hide the whole form on the page.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 14
line_highlights: 22
---
    
// Function to display summary
function displaySummary() {
  const summaryParagraph = document.querySelector("#summary-paragraph");

  summaryParagraph.textContent = `Your superhero name is ${characterName.value}. 
  Your ability is ${characterAbility.value}. 
  Your origin story is ${characterOrigin.value}.`;

  characterDetails.style.display = "none";

}
    
--- /code ---

--- /task ---

--- task ---

Set the value of the `display` property of the summary `<section>` to `flex`.

This will display the summary section on your page.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 14
line_highlights: 23
---
    
// Function to display summary
function displaySummary() {
  const summaryParagraph = document.querySelector("#summary-paragraph");

  summaryParagraph.textContent = `Your superhero name is ${characterName.value}. 
  Your ability is ${characterAbility.value}. 
  Your origin story is ${characterOrigin.value}.`;

  characterDetails.style.display = "none";
  summary.style.display = "flex";
}
    
--- /code ---

--- /task ---

--- task ---

Open `character.html`.

**Test:** Click the **Run** button to see your changes. 
+ Fill in the character details.
+ When you click the Create button, the form will be hidden and the summary section will be displayed.
+ The summary paragraph will include a summary of your character.

--- /task ---

**Debug step:**
+ Check you have named all constants (`const`) correctly.
+ Check you have used correct syntax when creating the functions, including `()` and `{}`.
+ Check you add the `onclick = "displaySummary()"` as an event on the `<button>` element.
+ Check you have added `;` a semicolon at the end of your declarations.

Well done! You have created an interactive form that shows/hides elements. 

Next, you will allow the user to edit their choices!