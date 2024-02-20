## Add form input fields

In this step, you will use form input fields to design an interactive webpage where users can create their own superhero.

However, you will create the functionality for your form and buttons in the next step.  

<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/comic-character-step3" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

You have added text and images to your website to add content. 
However, there are other types of content you could use including:
+ Videos
+ Form elements
+ Maps
+ Music

Form elements in HTML allow users to input data, interact with the page, and submit information. 

--- collapse ---

---
title: What are the different types of form elements?
---

Here are some useful form elements:
+ `<form>`: The overall form container.
+ `<label>`: Labels for the input fields.
+ `<input>`: Text inputs, checkboxes, radio buttons, etc.
+ `<button>`: Submit or reset buttons.

--- /collapse ---

### Design the Superhero name section

You will use different types of form elements to allow users interact with your webpage.

**CSS** classes have already been provided in the `styles.css` file to style your form.

--- task ---

Open the comicbook.html file.

Find the `<section>` tags between the `<main>` element. 

Add the attribute `id="character-sheet"` inside the opening `<section> tag.

--- code ---
---
language: html
filename: comicbook.html
line_numbers: true
line_number_start: 22
line_highlights: 22-24
---

      <section id="character-sheet"> <!--Superhero character creation form-->
  
      </section>
    
--- /code ---

--- /task ---

The `character-sheet` selector styles the entire form.

--- task ---

Add a div element with the attribute `id="name-input"` between the `<section>` tags.

--- code ---
---
language: html
filename: comicbook.html
line_numbers: true
line_number_start: 23
line_highlights: 26, 28
---

    <section id="character-sheet"> <!--Superhero character creation form-->
      <div id="name-input">
               
      </div>
    </section>
    
--- /code ---

--- /task ---

--- task ---

Add a `<label>` element to the superhero name section.

The `<label>` element is good for accessibility. 

It allows screen-readers to read the label when the user clicks on the input element.

--- code ---
---
language: html
filename: comicbook.html
line_numbers: true
line_number_start: 23
line_highlights: 27
---

    <section id="character-sheet"> <!--Superhero character creation form-->
      <div id="name-input">
        <label>Superhero Name:</label>
               
      </div>
    </section>
    
--- /code ---

--- /task ---

The `<input>` element is the most commonly used form element because it allows users add data to a form.

This can be displayed in many ways using the `type` attribute.

--- collapse ---

---
title: What are the form inputs in HTML?
---

+ Text Input (<input type="text">): allows users to enter a single line of text.
+ Password Input (<input type="password">): allows text input but hides the entered text for sensitive information.
+ Textarea (<textarea></textarea>): allows users to enter multiple lines of text.
+ Checkbox (<input type="checkbox">): allows users to select one or more options.
+ Radio Button (<input type="radio">): allows users to select a single option.
+ Select Dropdown (<select><option value="Flight">Flying</option></select>): creates a dropdown list for users to choose one option.
+ Submit (<input type="submit">): a button that submits the form data to the server.
+ Reset (<input type="reset">): a button that clears all the form fields to their default values.

--- /collapse ---

--- task ---

Add a text `<input>` field for adding the superhero's name.

--- code ---
---
language: html
filename: comicbook.html
line_numbers: true
line_number_start: 23
line_highlights: 28
---

      <section> <!--Superhero character creation form-->
        <div class="character-sheet">
          <div class="name-section">
            <div id="name-input">
              <label>Superhero Name:</label>
              <input type="text" id="name">
              
           </div>
         </div>
       </div>
      </section>
    
--- /code ---

--- /task ---

You can add attributes to input fields to control their behaviour and their interactions.

--- collapse ---

---
title: What other attributes can I use?
---
+ type: defines the type of input field. Examples include text, password, checkbox, radio, submit, reset, etc.
Example: `<input type="text">`

+ name: specifies the name of the input field, which is used when submitting the form data to the server.
Example: `<input type="text" name="username">`

+ value: sets the initial or default value of the input field.
Example: <input type="text" value="Default Text">

+ placeholder: provides a short hint that describes the expected value of the input field.
Example: `<input type="text" placeholder="Enter your name">`

+ required: indicates that the input field must be filled out before submitting the form.
Example: `<input type="text" required>`

+ maxlength: specifies the maximum number of characters allowed in a text or password input.
Example: `<input type="text" maxlength="30">`

+ min and max: sets the minimum and maximum values for number or date inputs.
Example: `<input type="number" min="0" max="100">`

pattern: specifies a regular expression pattern that the input value must match.
Example: `<input type="text" pattern="[A-Za-z]{3}">`

--- /collapse ---


**Click the Run button** to see your changes.
You will see a title below your text input area.

+ Check that you have used the correct `id` for each element

### Design the Superhero ability section 

You will create a select dropdown list for users to choose one option for their superhero's ability..

--- task ---

Add the HTML for creating the ability dropdown list. 

--- code ---
---
language: html
filename: comicbook.html
line_numbers: true
line_number_start: 36
line_highlights: 36-44
---

      <div class="class-section"> <!--Ability section-->
        <div id="class-input">
          <label>Abilities:</label>
            <select id="class">
              <option value="Flying"> Flying</option>
              <option value="Invisibility">Invisibility</option>
              <option value="Time travel">Time travel</option>
            </select>
        </div>
    
--- /code ---

**Click the Run button** to see your changes.

You will see a dropdown list with three abilities for your users to choose from.
Click on the arrow to view more options.

**TODO** Create Debug Step

--- /task ---

### Design the Superhero appearance section 

You will add a text area to your form so user's can describe their supehero's appearance.

--- task ---

Add the HTML for creating the appearance description section. 

--- code ---
---
language: html
filename: comicbook.html
line_numbers: true
line_number_start: 51
line_highlights: 51-58
---

      <div class="description-section"> <!--Appearance section-->
        <div id="description-input">
          <label>Appearance: </label> 
          <textarea id="description">Type the appearance of your comic character here....</textarea>
        </div>
      </div>
    
--- /code ---

**Click the Run button** to see your changes.

You will now see a text area that you can type into.

--- /task ---

### Design the Superhero origin story section 

You will add another text area to your form so users can describe their supehero's origin story.

--- task ---

Add the HTML for creating the origin story description section. 

--- code ---
---
language: html
filename: comicbook.html
line_numbers: true
line_number_start: 62
line_highlights: 62-68
---

      <div class="origin-section">
        <div id="origin-input">
          <label>Origin Story: </label> 
          <textarea id="origin">Type your origin story here....</textarea>
        </div>
      </div>
    
--- /code ---

**Click the Run button** to see your changes.

--- /task ---

### Show your user their Superhero character story 

--- task ---

Add a `<submit>` button with an `onclick` attribute so users can submit their superhero's name.

The `onclick` attribute provides interactivity using JavaScript.

Set the `onclick` attribute to `changeDisplay('name')`.

--- code ---
---
language: html
filename: comicbook.html
line_numbers: true
line_number_start: 23
line_highlights: 29
---

      <section> <!--Superhero character creation form-->
        <div class="character-sheet">
          <div class="name-section">
            <div id="name-input">
              <label>Superhero Name:</label>
              <input type="text" id="name">
              <button onclick="changeDisplay('name')">Submit</button>
           </div>
         </div>
       </div>
      </section>
    
--- /code ---

You will create a `changeDisplay()` function in the next step that will trigger the `Submit` buttons. 

**Click the Run button** to see your changes.
You will see a text input area so your user can type in their superhero's name and submit it using a button.

**Debug step:**

+ Check that you have used the correct `input type` for your name section.
+ Check that you have used the correct `id` for each element

--- /task ---

Once your users have finished creating their superhero, you can provide a section so they can see a summary of what they have created.

--- task ---

Add the HTML to create a section for displaying the superhero summary.

--- code ---
---
language: html
filename: comicbook.html
line_numbers: true
line_number_start: 74
line_highlights: 74-77
---

 <section id="summary-section">
            <h2>Superhero Summary</h2>
            <p id="summary-paragraph"></p>
        </section>
    
--- /code ---

**Click the Run button** to see your changes.

--- /task ---

Fantastic work! Your superhero creation page now contains a form with input fields.

In the next step you will make your form interactive so your user's changes can be updated on the page. 

