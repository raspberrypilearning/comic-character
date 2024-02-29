## Make items appear/disappear

In this step, you will continue building the functionality of your form. You will use JavaScript to make parts of your form appear and disappear. You will also show a summary display of your user's superhero character. 
<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/comic-character-step4" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

You will use DOM functions to manipulate your web page and create interactions.

### Create constants to store your form fields

At the moment, users can complete the form fields on your `character.html ` but nothing will happen when they click the Create button. 

You will need to retrieve the HTML element with the attribute `id="summary-section"` because its' CSS display property is currently set to `none;` and you need to change this.

You will also need to retrieve the HTML element with the attribute `id="character-sheet"` because its' CSS display property is currently set to `flex;` and you need to make it disappear.

--- task ---

Open `script.js`.

Use the DOM function `querySelector()` to find the HTML elements for the form and the summary section using their respective attributes.

Assign these elements to two new constants.

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

Create four more constants `name`, `ability`, `appearance` and `origin` to store their values.

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

Functions break your code into particular tasks so it is easier to understand. Especially when you have tasks that need to be done multiple times. They're like tools you can use over and over in different parts of your code.

+ Writing a Function: 
    + start with the function keyword to indicate the creation of a function. Give your function a name (e.g., addNumbers).
    + include brackets `()` after the function name for parameters (inputs) your function needs.
    + use open curly braces `{` to define the block of code that the function will execute.
    + close the curly braces `}` to show the end of the function.

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

+ Using a Function:

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

You call the function `addNumbers()` with values 5 and 8, and it gives back the sum, which you can then use or display.

--- /collapse ---

The function `displaySummary()` will be called as an event handler providing a response when your user clicks the Create button.

--- collapse ---

---
title: What is an event handler?
---

Event handling means assigning a function to respond to certain events. JavaScript allows you to define functions, known as event handlers, that are executed when a specific event occurs. 

You can assign event handlers directly in HTML using attributes such as `onclick`, `onmouseover`.

--- /collapse ---

You will need to be able to collect the information your users complete and then show the summary when they click the `<button>` element provided.

You can do this by changing the element with the attribute `id="summary-paragraph"`.

--- task ---

Use the `querySelector()` to find the HTML element with the attribute `id="summary-paragraph"`.

Assign the element to a constant: `summaryParagraph`.

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

You have previously used a text property to change an HTML element. 

You will use another property `.textContent` which finds and changes only the text content of an HTML element.

--- task ---

Append the `.textContent` property to your `summaryParagraph` constant.

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

When your user completes information on your form, you want to be able to retrieve this information. 

The `.value` property is used to retrieve the current value of the user input.

You also want to be able to show your user a friendly message alongside the information they have completed.

You can use "string" formatting to do this.

--- task ---

Use "string" formatting to write a user friendly message and combine this with the constant storing the HTML element with the attribute `id="name-text"`.

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

--- collapse ---

---
title: What is string formatting?
---

A "string" is a data type in JavaScript and other programming languages. Data types are groups of data that tell the program how to use data.
You can format strings using template literals or concatenation. 

Here are examples of how they work:
+ Use backticks (` `) to embed variables within ${} inside the string. This is called a template literal.

--- code ---
---
language: js
filename: script.js
line_numbers: true
---
    
   const name = "Spider-Man";
   const age = 25;
   // Example using template literals
   const message = `Hello, ${name}! You are ${age} years old.`;
   console.log(message);
    
--- /code ---

+ Concatenation: you can combine strings together using the + operator.

--- code ---
---
language: js
filename: script.js
line_numbers: true
---
    
   const superhero = "Iron Man";
   const power = "suit of armor";
   // Example using concatenation
   const description = "The superhero " + superhero + " possesses a " + power + ".";
   console.log(description);
    
--- /code ---

--- /collapse ---

--- task ---

Write more user friendly messages to create your summary and combine them with the other constants storing your form field attributes.

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

You previously added an HTML element to your form with the attribute `id="summary-section"`.

The property of the `summary-section` CSS selector is currently set to `none;`.

The property of the `character-sheet` CSS selector is currently set to `flex;`.

In JavaScript, you can manipulate the display properties of these elements using the style property.

--- task ---

Use the `.style.display` property to change your "characterSheet" constant to `"none";`

THis will hide the HTML element (the whole form) on the page.

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

}
    
--- /code ---

--- /task ---

--- collapse ---

---
title: How does the display property work in CSS?
---

In CSS, the display property is used to control the layout behaviour of an element. It determines how an element is shown in terms of its box type, whether it's block-level, inline, inline-block, or other variations. 

The values for the display property include:
+ None: If you set an element to display: none;, it becomes invisible and doesn't affect the space around it. It's like it's not even there.
+ Grid: This provides a grid of boxes. It helps you arrange things in rows and columns, making it easier to design complex layouts.
+ Flex: This provides flexible box. It helps you control how things inside it are arranged. It's useful for making responsive layouts.
+ Block: This provides a whole box that starts on a new line and takes up the whole width.
+ Inline: This provides a box that stays on the same line and only takes up as much space as it needs.
+ Inline-block: This is a mix of the block and inline. It provides a box that sits in a line, not taking up the whole width.

--- /collapse ---

--- task ---

Use the `.style.display` property to change your "summary" constant to `flex;`.

This will display the sumamry section on your page.

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

Open `character.html`.

**Test:** Click the **Run** button. 

+ Type in a superhero name or any other details on the form.

+ When you click the Create button, the form will be hidden and the summary section will be displayed.

+ You should see the whole paragraph get updated to show your user their superhero summary.

--- /task ---

**Debug step:**
+ Ensure you have created all constants `const` correctly using the right keywords.
+ Ensure your constant names are written correctly.
+ Ensure you have used the right syntax when creating the functions including `()` and `{}`.
+ Ensure you add the `onclick = "displaySummary"` as an attribute to the `<button>` element on your form.
+ Ensure you have added `;` a semicolon at the end of your declarations.

Well done! You have created an interactive form that shows/hides elements. Next, you will allow users to edit their choices on the superhero form.