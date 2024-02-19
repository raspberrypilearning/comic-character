## Show/Hide elements

In this step, you will continue building the functionality of your form. You will use JavaScript to add show/hide elements of your form and show a summary display of your user's superhero character. 
<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/comic-character-step4" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

The `Submit` button on your comicbook page can be used to update each section.

You will create functions that will use the `Submit` buttons as a trigger.

When your user clicks `Submit`, the functions will take the value they enter, hide where they type it, and show a cool display of what they wrote! 

You will use more DOM methods to manipulate your webpage and create interactions.

--- collapse ---

---
title: What are DOM Methods?
---

DOM (Document Object Model) methods are a set of tools used to manipulate the content, style and structure of web documents dynamically using JavaScript.These methods enable developers to manipulate a document while the code is running. 

Here are some common DOM methods:

+ getElementById(id): retrieves an element by its id attribute.
    var element = document.getElementById("myElement");

+ getElementsByClassName(className): Returns a live HTML Collection of elements with the given class name.
    var elements = document.getElementsByClassName("myClass");

+ getElementsByTagName(tagName): Returns a live HTML Collection of elements with the given tag name.
    var paragraphs = document.getElementsByTagName("p");

+ querySelector(selector): Returns the first element that matches the specified CSS selector.
    var element = document.querySelector(".myClass");

+ querySelectorAll(selector): Returns a NodeList of all elements that match the specified CSS selector.
    var elements = document.querySelectorAll("p.myClass");

+ addEventListener(event, callback): Attaches an event listener to an element.
    element.addEventListener("click", function() {
        console.log("Element clicked!");
    });

+ createElement(tagName): Creates a new HTML element with the specified tag name.
    var newDiv = document.createElement("div");

+ appendChild(node): Appends a node as the last child of a parent node.
    parentElement.appendChild(childElement);

+ removeChild(node): Removes a child node from its parent.
    parentElement.removeChild(childElement);

+ setAttribute(attribute, value): Sets the value of an attribute on the specified element.
    element.setAttribute("class", "newClass");

+ getAttribute(attribute): Retrieves the value of the specified attribute on the element.
    var classValue = element.getAttribute("class");

--- /collapse ---

### Update and show the summary section

You will create a function that collects the superhero details, summarises it, and shows the summary. 

--- task ---

Open `script.js`.

 Create a function `displaySummary()`. 
 
 This function will generate and display a summary of superhero information.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 37
line_highlights: 38-40
---
    
      // Function to display summary
      function displaySummary() {

      }
    
--- /code ---

--- /task ---

You will control the `summarySection` so the superhero summary can be displayed.

--- task ---

Create a variable `summaryParagraph`.

Use the DOM to select an HTML element with the id "summary-paragraph" and store it in the variable. 

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 37
line_highlights: 39
---
    
// Function to display summary
function displaySummary() {
    const summaryParagraph = document.getElementById("summary-paragraph");

}
    
--- /code ---

--- /task ---

--- task ---

Use the DOM to search for an HTML element with the id "name-span".  

Use the `textContent` property of the `document.getElementById` method to collect any user input updated in the `name-span`. 

Store it in the variable 'name'. 

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 37
line_highlights: 41
---
    
// Function to display summary
function displaySummary() {
    const summaryParagraph = document.getElementById("summary-paragraph");

    var name = document.getElementById("name-span").textContent;

}
    
--- /code ---

--- /task ---

--- task ---

Repeat the same steps to collect the `textContent` for abilities, appearance, and origin from their respective elements.

Create variables `abilities`, `appearance` and `origins` to store the `textContent`.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 37
line_highlights: 42-44
---
    
// Function to display summary
function displaySummary() {
    const summaryParagraph = document.getElementById("summary-paragraph");

    var name = document.getElementById("name-span").textContent;
    var abilities = document.getElementById("class-span").textContent;
    var appearance = document.getElementById("description-span").textContent;
    var origin = document.getElementById("origin-span").textContent;

}
    
--- /code ---

--- /task ---

You can use "string" formatting to combine all the `textContent` into one paragraph.

You can also add your own message you want the user to see.

--- collapse ---

---
title: What is "string"?
---

A "string" is a data type in JavaScript and other programming languages.

Data types are groups of data tell the program how we want to use data.

JavaScript has several primitive data types including:

+ Number: represents numeric values. Examples: 10, 3.14.
+ String: represents sequences of characters. Examples: "Hello", 'JavaScript'.
+ Boolean: represents true or false values.
+ Undefined: represents a variable that has been declared but not assigned a value.
+ Null: represents the intentional absence of any object value.

--- /collapse ---

--- collapse ---

---
title: What is string formatting?
---

In JavaScript, you can format strings using template literals or concatenation. Here are examples of how they work:

+ Template Literals (String Interpolation): Use backticks (` `) to define a template literal. Embed variables or expressions within ${} inside the template literal.

    const name = "Spider-Man";
    const age = 25;
    // Example using template literals
    const message = `Hello, ${name}! You are ${age} years old.`;
    console.log(message);

+ Concatenation: concatenate strings using the + operator.

    const superhero = "Iron Man";
    const power = "suit of armor";
    // Example using concatenation
    const description = "The superhero " + superhero + " possesses a " + power + ".";
    console.log(description);

String Methods: utilise string methods like concat(), slice(), toUpperCase(), toLowerCase(), etc.

    const city = "Gotham";
    const capitalizedCity = city.toUpperCase();
    // Example using string methods
    const result = `Welcome to ${capitalizedCity}!`;
    console.log(result);

--- /collapse ---

--- task ---

Create a variable `summaryParagraph.textContent`.

Store all the superhero display field elements.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 37
line_highlights: 46-48
---
    
// Function to display summary
function displaySummary() {
    const summaryParagraph = document.getElementById("summary-paragraph");

    var name = document.getElementById("name-span").textContent;
    var abilities = document.getElementById("class-span").textContent;
    var appearance = document.getElementById("description-span").textContent;
    var origin = document.getElementById("origin-span").textContent;

    summaryParagraph.textContent = `Your superhero name is ${name}. 
    Your abilities are ${abilities}. Your appearance is ${appearance}. 
    Your origin story is ${origin}.`;

}
    
--- /code ---

--- /task ---

Control the summary section to make it visible, as it has been set to `none` in the CSS styles to hide it initially.

--- task ---

Select an HTML element with the id `summary-section`.

Set the CSS display property to "block"

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 37
line_highlights: 50
---
    
// Function to display summary
function displaySummary() {
    const summaryParagraph = document.getElementById("summary-paragraph");

    var name = document.getElementById("name-span").textContent;
    var abilities = document.getElementById("class-span").textContent;
    var appearance = document.getElementById("description-span").textContent;
    var origin = document.getElementById("origin-span").textContent;

    summaryParagraph.textContent = `Your superhero name is ${name}. 
    Your abilities are ${abilities}. Your appearance is ${appearance}. 
    Your origin story is ${origin}.`;

    document.getElementById("summary-section").style.display = "block";
}
    
--- /code ---

--- /task ---

--- task ---

Find your `changeDisplay()` function.

Add the `displaySummary()` function inside it, below all the existing code.

This will call the function.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 25
line_highlights: 36
---
    
    // Update Create Comic Display function 
function changeDisplay(id) {
    var input = document.querySelector("#" + id);
    var inputSection = document.querySelector("#" + id + "-input");
    var displaySection = document.querySelector("#" + id + "-display");
    var valueDisplay = document.querySelector("#" + id + "-span");

    valueDisplay.textContent = input.value;
    inputSection.style.display = "none";
    displaySection.style.display = "flex";
    
    displaySummary(); // Call displaySummary after all changeDisplay actions
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

**Debug step:**
+ Ensure you have added `displaySummary()`to your `changeDisplay()` function.
+ Ensure you have used the correct `id` names in your `comicbook.html` file.

--- /task ---

Well done! You have created an interactive form that shows/hides elements. Next, you will allow users change their theme colours on your website.