## Show/Hide elements

In this step, you will continue building the functionality of your superhero character creation form. You will use JavaScript to add interactivity and a summary display. 
<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/comic-character-step4" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

The submit buttons on your comicbook page can be used to update each section.

You will create functions that will use the `submit` buttons as a trigger.

You will use more DOM methods to manipulate your web page and create interactions.

--- collapse ---

---
title: What are DOM Methods?
---



--- /collapse ---

--- task ---

Open the `script.js` file.

Create a JavaScript function named `changeDisplay` that takes a parameter `id`.

This function will update the display based on the provided id.


--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 15
line_highlights: 17
---
    
    // Update Create Comic Display function 
function changeDisplay(id) {
    

}
      
--- /code ---

--- /task ---

--- task ---

Use the `document.querySelector` method to select an HTML element with the specified id. The selected element is stored in the variable `input`.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 15
line_highlights: 17
---
    
    // Update Create Comic Display function 
function changeDisplay(id) {
    var input = document.querySelector("#" + id);
    

}
      
--- /code ---

--- /task ---

--- task ---

this selects an element with an id derived from the provided id parameter by appending -input. The selected element is stored in the variable inputSection.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 15
line_highlights: 17
---
    
    // Update Create Comic Display function 
function changeDisplay(id) {
    var input = document.querySelector("#" + id);
    var inputSection = document.querySelector("#" + id + "-input");
   
}
      
--- /code ---

--- /task ---

--- task ---

this line selects an element with an id derived from the provided id parameter by appending -display. The selected element is stored in the variable displaySection.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 15
line_highlights: 17
---
    
    // Update Create Comic Display function 
function changeDisplay(id) {
    var input = document.querySelector("#" + id);
    var inputSection = document.querySelector("#" + id + "-input");
    var displaySection = document.querySelector("#" + id + "-display");
    
}
      
--- /code ---

--- /task ---

--- task ---

this selects an element with an id derived from the provided id parameter by appending -span. The selected element is stored in the variable valueDisplay.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 15
line_highlights: 17
---
    
    // Update Create Comic Display function 
function changeDisplay(id) {
    var input = document.querySelector("#" + id);
    var inputSection = document.querySelector("#" + id + "-input");
    var displaySection = document.querySelector("#" + id + "-display");
    var valueDisplay = document.querySelector("#" + id + "-span");

}
      
--- /code ---

--- /task ---

--- task ---

This line sets the text content of the valueDisplay element to the value of the input element. This is typically used to update the displayed content based on user input.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 15
line_highlights: 17
---
    
    // Update Create Comic Display function 
function changeDisplay(id) {
    var input = document.querySelector("#" + id);
    var inputSection = document.querySelector("#" + id + "-input");
    var displaySection = document.querySelector("#" + id + "-display");
    var valueDisplay = document.querySelector("#" + id + "-span");

    valueDisplay.textContent = input.value;
    
}
      
--- /code ---

--- /task ---

--- task ---

This line changes the CSS display property of the inputSection element to "none", effectively hiding it from view.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 15
line_highlights: 17
---
    
    // Update Create Comic Display function 
function changeDisplay(id) {
    var input = document.querySelector("#" + id);
    var inputSection = document.querySelector("#" + id + "-input");
    var displaySection = document.querySelector("#" + id + "-display");
    var valueDisplay = document.querySelector("#" + id + "-span");

    valueDisplay.textContent = input.value;
    inputSection.style.display = "none";

}
      
--- /code ---

--- /task ---

--- task ---

This line changes the CSS display property of the displaySection element to "flex", making it visible. This is often used to reveal a new section of the form after the user has completed a previous section.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 15
line_highlights: 17
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


}
      
--- /code ---

**Click the Run button** to see your changes.

--- /task ---

This function essentially gathers information about the superhero from specific elements, constructs a summary string, updates the content of a designated paragraph, and then makes the summary section visible. It is typically called after the user has completed entering information in various form sections.

--- task ---

 Create a function named `displaySummary`. This function will generate and display a summary of superhero information.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 15
line_highlights: 17
---
    
// Function to display summary
function displaySummary() {
   
}
    
--- /code ---

--- /task ---

--- task ---

This line selects an HTML element with the id "summary-paragraph" and stores it in the variable summaryParagraph. This element is presumably a paragraph where the summary will be displayed.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 15
line_highlights: 17
---
    
// Function to display summary
function displaySummary() {
    var summaryParagraph = document.getElementById("summary-paragraph");

}
    
--- /code ---

--- /task ---

--- task ---

This line selects an HTML element with the id "name-span" and retrieves its text content, storing it in the variable name. Similar lines are used to retrieve text content for abilities, appearance, and origin from their respective elements.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 15
line_highlights: 17
---
    
// Function to display summary
function displaySummary() {
    var summaryParagraph = document.getElementById("summary-paragraph");

    var name = document.getElementById("name-span").textContent;
    var abilities = document.getElementById("class-span").textContent;
    var appearance = document.getElementById("description-span").textContent;
    var origin = document.getElementById("origin-span").textContent;

}
    
--- /code ---

--- /task ---

--- task ---

This line sets the text content of the summaryParagraph element to a formatted string using the retrieved values of name, abilities, appearance, and origin. This string forms the superhero summary.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 15
line_highlights: 17
---
    
// Function to display summary
function displaySummary() {
    var summaryParagraph = document.getElementById("summary-paragraph");

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

--- task ---

This line selects an HTML element with the id "summary-section" and sets its CSS display property to "block". This makes the summary section visible, as it was initially hidden or set to a different display style.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 15
line_highlights: 17
---
    
// Function to display summary
function displaySummary() {
    var summaryParagraph = document.getElementById("summary-paragraph");

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

if (id === "origin") {: This line checks if the provided id is equal to the string "origin". If true, the following block of code is executed.

displaySummary();: This line calls the displaySummary function. This function is presumably responsible for showing a summary of the user's inputs. It is called after all the actions in the changeDisplay function are completed.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 15
line_highlights: 17
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

// Check if all changeDisplay actions are completed
    if (id === "origin") {
        displaySummary(); // Call displaySummary after all changeDisplay actions
    }

}
      
--- /code ---

**Click the Run button** to see your changes.

--- /task ---


--- task ---

Open comicbook.html.


--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 20
line_highlights: 24-25
---

     <footer>
            <p> Ⓒ <span id="currentYear"></span> - All Rights Reserved</p>
    </footer>
    
--- /code ---

--- /task ---

--- task ---

Open index.html.


--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 20
line_highlights: 24-25
---

     <footer>
            <p> Ⓒ <span id="currentYear"></span> - All Rights Reserved</p>
    </footer>
    
--- /code ---

--- /task ---

--- task ---


--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 15
line_highlights: 17
---
    
// Update Copyright Year function 
const currentYear = new Date();
document.querySelector("#currentYear").innerHTML = `${currentYear.getFullYear()}`;
      
--- /code ---

--- /task ---


