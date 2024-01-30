## Show/Hide elements

Create an interactive hero slider for your webpage, so users can navigate through different hero images with next and previous buttons.
<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/comic-character-step4" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

--- task ---


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
    
// Function to display summary
function displaySummary() {
   
}
    
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
    
// Function to display summary
function displaySummary() {
    var summaryParagraph = document.getElementById("summary-paragraph");

}
    
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


