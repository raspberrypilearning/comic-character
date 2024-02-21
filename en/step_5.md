## Edit the summary content

In this step, you will allow users to edit their form choices using a `<button>` element an event listener.
<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/comic-character-step5" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

--- task ---

Open `script.js`.

Write a function `changeSummary()`.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 26
line_highlights: 27-29
---
     // Function to edit form content
    function changeSummary() {
    
}   
    
--- /code ---

--- /task ---

The purpose of your function is to show the form and the hide the summary when the users click on a button.

--- task ---

Add the `.style.display` property to change your "characterSheet" constant back to `"flex";`.
Add the `.style.display` property to change your "summary" constant back to `"none";`.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 5
line_highlights: 6-7
---
     // Function to edit form content
    function changeSummary() {
      characterSheet.style.display = "flex";
      summary.style.display = "none";
}   
    
--- /code ---

--- /task ---

You have used the `onclick` attribute previously. This acts as an event listener which allows you to associate a specific action with the user's mouse click on a particular element, such as a button, link, or any other interactive element on a webpage.

--- task ---

Open `comicbook.html`.

Add a `<button>` element with the attribute `onlick="changeSummary`.

Write the text "Edit" between the `<button>` tags to provide a label for your users.

--- code ---
---
language: html
filename: comicbook.html
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

--- collapse ---

---
title: What other event listeners can I use?
---



--- /collapse ---

--- task ---

**Test:** Click the **Run** button. 

+ Complete the form as you did in the previous step.

+ When you click the Submit button, the form will be hidden and the summary section will be displayed.

+ You should see an Edit button. Click on it to edit your form.

--- /task ---

Well done! You have used functions to allow your users edit their options on a form. Next, you will allow users validate their input when creating their superhero character.