## Change the summary content

In this step, you will allow users to change their form choices.

<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/comic-character-step5" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### Add the changeSummary() function

You need a function that shows the form and hides the summary when the user clicks an Edit button.

--- task ---

Open `script.js`.

Find the comment `// Function to edit form content`

Add the function `changeSummary()`

In your function:
+ Set the value of the `display` property of the character details `<section>` to `flex`
+ Set the value of the `display` property of the summary `<section>` to `none`

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 26
line_highlights: 27-30
---
// Function to edit form content
function changeSummary() {
  characterDetails.style.display = "flex";
  summary.style.display = "none";
}   
    
--- /code ---

--- /task ---

### Create an Edit button

You need to create a new button to call the `changeSummary()` function.

--- task ---

Open `character.html`.

Add a `<button>` element with the event `onlick="changeSummary()` to the summary section.

Add the text 'Edit' to the `<button>`, so users know what the button does.

--- code ---
---
language: html
filename: character.html
line_numbers: true
line_number_start: 48
line_highlights: 51
---

    <section id="summary-section">
      <h2>Superhero Summary</h2>
      <p id="summary-paragraph"></p>
      <button onclick="changeSummary()">Edit</button>
    </section>
    
--- /code ---

--- /task ---

--- task ---

**Test:** Click the **Run** button to see your changes. 
+ Complete the form again.
+ When you click the Create button, the form will be hidden and the summary section will be displayed.
+ You should see an Edit button. Click on it to edit your form.

--- /task ---

Well done! You have added even more interactivity to your website!

Next, you will check that users have completed the form and warn them if they have missed a section.