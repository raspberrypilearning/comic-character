## Show/Hide elements

In this step, you will continue building the functionality of your form. You will use JavaScript to show/hide elements of your form. and show a summary display of your user's superhero character. 
<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/comic-character-step4" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

You will use an event listener to activate the `<button>` element.

You will use DOM functions to manipulate your webpage and create interactions.

### Create contants to store your form fields

At the moment users can complete the form fields on your `comicbook.html ` but nothing will happen when they click the Submit button. 

You will need to retrieve the HTML element with the attribute `id="summary-section"` because its CSS display property is currently set to `none;` and you need to change this.

--- task ---

Open `script.js`.

Use the DOM function `querySelector()` to find the HTML elements for the form and the summary section using their respective attributes.

Create constants to store the values of the `querySelector()` function.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 5
line_highlights: 6-7
---
      // Create constants for superhero form
      const characterSheet = document.querySelector("#character-sheet");
      const summary = document.querySelector("#summary-section");
    
--- /code ---

By retrieving the elements with the attributes `id="character-sheet"` and `id="summary-section"`, you will be able to manipulate them.

--- /task ---


You can also learn about other DOM functions you can use in this and other projects.

--- collapse ---

---
title: What can you do with the DOM?
---

DOM (Document Object Model) functions are a set of tools used to manipulate the content, style and structure of web documents dynamically using JavaScript.

These methods enable developers to manipulate a document while the code is running. 

Here are some common DOM functions:

+ getElementById(id): retrieves an element by its id attribute.
    var element = document.getElementById("myElement");

+ getElementsByClassName(className): Returns a collection of elements with the given class name.
    var elements = document.getElementsByClassName("myClass");

+ getElementsByTagName(tagName): Returns a collection of elements with the given tag name.
    var paragraphs = document.getElementsByTagName("p");

+ querySelector(selector): Returns the first element that matches the specified CSS selector.
    var element = document.querySelector(".myClass");

+ querySelectorAll(selector): Returns a list of all elements that match the specified CSS selector.
    var elements = document.querySelectorAll("p.myClass");

+ addEventListener(event, callback): Attaches an event listener to an element.
    element.addEventListener("click", function() {
        console.log("Element clicked!");
    });

--- /collapse ---

--- task ---

Use the DOM function `querySelector()` to find the HTML elements with the attributes `id="name-text"`, `id="ability-choice"`, `id="appearance-text"` and `id="origin-text"`.

Create four more constants "name", "ability", "appearance" and "origin" to store their values.

--- /task ---

--- collapse ---

---
title: Solution for creating more constants
---

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 5
line_highlights: 9-12
---
       // Create constants for superhero form
      const characterSheet = document.querySelector("#character-sheet");
      const summary = document.querySelector("#summary-section");

      const name = document.querySelector("#name-text");
      const ability = document.querySelector("#ability-choice");
      const appearance = document.querySelector("#appearance-text");
      const origin = document.querySelector("#origin-text");
    
--- /code ---

--- /collapse ---

### Create the form content summary

You will need a function that will generate and display a summary of the information your user has completed on the superhero form.

A function is a reusable block of code that performs a specific task.

--- task ---

Create a function `displaySummary()`. 

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 14
line_highlights: 15
---
    
      // Function to display summary
      function displaySummary() {

      }
    
--- /code ---

--- /task ---

--- collapse ---

---
title: What is a function and how are they used in JavaScript?
---

Functions make your code modular and easier to understand, especially when you have tasks that need to be done multiple times. They're like tools you can use over and over in different parts of your code.
Writing a Function:

--- code ---
---
language: js
filename:
line_numbers: true
line_number_start:
line_highlights:
---
       function addNumbers(a, b) {
           return a + b;
       }
    
--- /code ---


Here, addNumbers is a function that takes two inputs (a and b) and returns their sum.

Using a Function:

--- code ---
---
language: js
filename:
line_numbers: true
line_number_start:
line_highlights:
---
       let result = addNumbers(5, 8);
       console.log(result); // Outputs: 13
    
--- /code ---

You call the function addNumbers with values 5 and 8, and it gives back the sum, which you can then use or display.

--- /collapse ---

You will need to be able to collect the information your users complete and then show the summary when they click the `<button>` element provided.

You can do this by changing the element with the attribute `id="summary-paragraph"`.

--- task ---

Use the `querySelector()` to find the HTML element with the attribute `id="summary-paragraph"`.

Create a constant "summaryParagraph" to store its value.

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

You can use "string" formatting to combine all the form fields into one paragraph.

You can also add your own message you want the user to see.

--- task ---

Select an HTML element with the id `summary-section`.

Set the CSS display property to "block"

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 14
line_highlights: 18
---
    
// Function to display summary
function displaySummary() {
    const summaryParagraph = document.querySelector("#summary-paragraph");

    summaryParagraph.textContent = `Your superhero name is ${name.value}. 

}
    
--- /code ---

--- /task ---

--- task ---

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 14
line_highlights: 19-20
---
    
// Function to display summary
function displaySummary() {
    const summaryParagraph = document.querySelector("#summary-paragraph");

    summaryParagraph.textContent = `Your superhero name is ${name.value}. 
    Your abilities are ${ability.value}. Your appearance is ${appearance.value}. 
    Your origin story is ${origin.value}.`;

}
    
--- /code ---

--- /task ---

### Change CSS property 

--- task ---

Set the CSS display property to "block"

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

    summaryParagraph.textContent = `Your superhero name is ${name.value}. 
    Your abilities are ${ability.value}. Your appearance is ${appearance.value}. 
    Your origin story is ${origin.value}.`;

    characterSheet.style.display = "none";
    summary.style.display = "flex";

}
    
--- /code ---

--- /task ---

--- task ---

Set the CSS display property to "flex"

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

    summaryParagraph.textContent = `Your superhero name is ${name.value}. 
    Your abilities are ${ability.value}. Your appearance is ${appearance.value}. 
    Your origin story is ${origin.value}.`;

    characterSheet.style.display = "none";
    summary.style.display = "flex";

}
    
--- /code ---

--- /task ---

--- task ---

Open `comicbook.html`.

**Click the Run button** to see your changes.

Type in a superhero name or any other details on the form.

When you click the `Submit` button on each section, the summary section will be updated.

Complete the whole form and click `Submit` on all the sections.

You should see the whole paragraph get updated to show your user their superhero summary.

--- /task ---

**Debug step:**
+ Ensure you have added `displaySummary()`to your `changeDisplay()` function.
+ Ensure you have used the correct `id` names in your `comicbook.html` file.

Well done! You have created an interactive form that shows/hides elements. Next, you will allow users change their theme colours on your website.