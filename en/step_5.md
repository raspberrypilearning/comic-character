## Edit the summary content

In this step, you will continue building the functionality of your form. You will use JavaScript to show/hide elements of your form. and show a summary display of your user's superhero character. 
<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/comic-character-step5" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>


--- task ---

Open `script.js`.


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

--- task ---

Open `comicbook.html`.

**Click the Run button** to see your changes.

Type in a superhero name or any other details on the form.

When you click the `Submit` button on each section, the summary section will be updated.

Complete the whole form and click `Submit` on all the sections.

You should see the whole paragraph get updated to show your user their superhero summary.

--- /task ---

Well done! You have. Next, you will allow users validate their input when creating their superhero character.