--- question ---

---
legend: Question 3 of 3
---

You used JavaScript to manipulate the Document Object Model (DOM) in your superhero project.

Look at the code using a few DOM method tools. 

What does this code do when the element with the attribute "submit-button" is clicked?

--- code ---
---
language: JavaScript
filename: script.js
line_numbers: true
line_number_start: 
line_highlights: 
---

    document.querySelector("#submit-button").addEventListener("click", function() {
      var inputValue = document.getElementById("user-input").value;
      document.querySelector("#output-paragraph").textContent = "You entered: " + inputValue;
    });

--- /code ---

--- choices ---

- () Displays an alert box with the message "You entered:" followed by the user's input.

  --- feedback ---

  Incorrect. The code updates the text content of a paragraph, but it doesn't use an alert box.

  --- /feedback ---
  
- (x) Updates the text content of the paragraph with the id "output-paragraph" to "You entered: " followed by the user's input.

  --- feedback ---

  Correct! The code listens for a click on the "submit-button," collects the user's input from the element with the id "user-input," and updates the text content of the paragraph with the id "output-paragraph".
 
  --- /feedback ---

- ( ) Changes the background colour of the web page to the user's input.

  --- feedback ---

 Not quite! The code will not change the background colour of the web page baseed on user's input.

  --- /feedback ---

--- /choices ---

--- /question ---