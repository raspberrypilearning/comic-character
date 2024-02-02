## Add form input fields

In this step, you will use form input fields to design an interactive webpage where users can create their own superhero.

<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/comic-character-step3" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

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

CSS classes have already been provided in the `styles.css` file to style your form.

--- task ---

Open the comicbook.html file.

Find the `<section` tags for the superhero character form.

Add a div with the class `character-sheet` between the tags.

--- code ---
---
language: html
filename: comicbook.html
line_numbers: true
line_number_start: 23
line_highlights: 24, 26
---

      <section> <!--Superhero character creation form-->
        <div class="character-sheet">
         
        </div>
      </section>
    
--- /code ---

--- /task ---

The `character sheet` selector styles the entire form.

--- task ---

Add a class `name-section` to style the superhero name fields.

--- code ---
---
language: html
filename: comicbook.html
line_numbers: true
line_number_start: 23
line_highlights: 25, 27
---

      <section> <!--Superhero character creation form-->
        <div class="character-sheet">
          <div class="name-section">
           
         </div>
       </div>
      </section>
    
--- /code ---

--- /task ---

--- task ---

Add an id `name-input` to style the superhero input field.

--- code ---
---
language: html
filename: comicbook.html
line_numbers: true
line_number_start: 23
line_highlights: 26, 28
---

      <section> <!--Superhero character creation form-->
        <div class="character-sheet">
          <div class="name-section">
            <div id="name-input">
              
           </div>
         </div>
       </div>
      </section>
    
--- /code ---

--- /task ---

--- task ---

Add a `<label> ` element to the superhero name section.

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

      <section> <!--Superhero character creation form-->
        <div class="character-sheet">
          <div class="name-section">
            <div id="name-input">
              <label>Superhero Name:</label>
              
           </div>
         </div>
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
+ Password Input (<input type="password">): text input but hides the entered text for sensitive information.
+ Textarea (<textarea></textarea>): allows users to enter multiple lines of text.
+ Checkbox (<input type="checkbox">): allows users to select one or more options from a list.
+ Radio Button (<input type="radio">): allows users to select a single option from a list.
+ Select Dropdown (<select></select>): creates a dropdown list for users to choose one option.
+ Submit (<input type="submit">): a special button that submits the form data to the server.
+ Reset (<input type="reset">): a button that resets all form fields to their default values.

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

--- task ---

Add a `<submit>` button with an `onclick` attribute. 

The `onlick` attribute provides interactivity using JavaScript.

Leave the `onclick` action empty for now.

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
              <button onclick="">Submit</button>
           </div>
         </div>
       </div>
      </section>
    
--- /code ---

**Click the Run button** to see your changes.

**Debug step:**

+ Check that you have used the correct `input type` for your name section.
+ Check that you have used the correct `id` for each element

--- /task ---

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


### Update the Superhero name display

--- task ---

Add the id for styling the display name area.

Add title for the display.

Use a `<span>` tag to display the superhero name.

--- code ---
---
language: html
filename: comicbook.html
line_numbers: true
line_number_start: 23
line_highlights: 31-34
---

      <section> <!--Suoerhero character creation form-->
        <div class="character-sheet">
          <div class="name-section"> <!--Name section-->
            <div id="name-input">
              <label>Superhero Name:</label>
              <input type="text" id="name">
              <button onclick="">Submit <button>
           </div>
           <div id="name-display"> <!--Name display-->
             <h2>Superhero Name:</h2>
             <span id="name-span"></span>
           </div>
         </div>
       </div>
      </section>
    
--- /code ---

--- /task ---

**Click the Run button** to see your changes.

+ Check that you have used the correct `id` for each element

### Design the Superhero ability section 

You will create a select dropdown list for users to choose one option.

--- task ---

Add the html for creating the ability dropdown list. 

--- code ---
---
language: html
filename: comicbook.html
line_numbers: true
line_number_start: 36
line_highlights: 36-45
---

      <div class="class-section"> <!--Ability section-->
        <div id="class-input">
          <label>Abilities:</label>
            <select id="class">
              <option value="Flying"> Flying</option>
              <option value="Invisibility">Invisibility</option>
              <option value="Time travel">Time travel</option>
            </select>
            <button onclick="">Submit</button>
        </div>
    
--- /code ---

**Click the Run button** to see your changes.

**TODO** Create Debug Step

--- /task ---

Add the html for updating the ability display area. 

--- task ---


--- code ---
---
language: html
filename: comicbook.html
line_numbers: true
line_number_start: 36
line_highlights: 47-50
---

      <div class="class-section"> <!--Ability section-->
        <div id="class-input">
          <label>Abilities:</label>
            <select id="class">
              <option value="Flying"> Flying</option>
              <option value="Invisibility">Invisibility</option>
              <option value="Time travel">Time travel</option>
            </select>
            <button onclick="">Submit
            </button>
        </div>
        <div id="class-display">  <!--Ability display-->
          <h2>Abilities:</h2>
          <span id="class-span"></span>
        </div>
      </div>
    
--- /code ---

**Click the Run button** to see your changes.

**TODO** Create Debug Step

--- /task ---

### Design the Superhero appearance section 

You will add a text area to your form so user's can describe their supehero's appearance.

--- task ---

Add the html for creating the appearance description section. 

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
          <button onclick="">Submit</button>
        </div>
      </div>
    
--- /code ---

**Click the Run button** to see your changes.

--- /task ---

--- task ---

Add the html for updating the appearance description area. 

--- code ---
---
language: html
filename: comicbook.html
line_numbers: true
line_number_start: 51
line_highlights: 57-60
---

      <div class="description-section">
        <div id="description-input">
          <label>Appearance: </label> 
          <textarea id="description">Type the appearance of your comic character here....</textarea>
          <button onclick="">Submit</button>
        </div>
        <div id="description-display">
          <h2>Appearance:</h2>
          <span id="description-span"></span>
        </div>
      </div>
    
--- /code ---

**Click the Run button** to see your changes.

--- /task ---

### Design the Superhero origin story section 

You will add another text area to your form so user's can describe their supehero's origin story.

--- task ---

Add the html for creating the origin story description section. 

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
          <button onclick="">Submit</button>
        </div>
      </div>
    
--- /code ---

**Click the Run button** to see your changes.

--- /task ---

--- task ---

Add the html for updating the origin story description area. 

--- code ---
---
language: html
filename: comicbook.html
line_numbers: true
line_number_start: 68
line_highlights: 68-71
---

       <div class="origin-section">
                <div id="origin-input">
                    <label>Origin Story: </label> 
                    <textarea id="origin">Type your origin story here....</textarea>
                    <button onclick="">Submit</button>
                </div>
                <div id="origin-display">
                    <h2>Origin Story:</h2>
                    <span id="origin-span"></span>
                </div>
            </div>
    
--- /code ---

**Click the Run button** to see your changes.

--- /task ---

### Show your user their Superhero character story 

--- task ---

Add a section for displaying the superhero summary.

--- code ---
---
language: html
filename: comicbook.html
line_numbers: true
line_number_start: 20
line_highlights: 24-25
---

 <section id="summary-section">
            <h2>Superhero Summary</h2>
            <p id="summary-paragraph"></p>
        </section>
    
--- /code ---

**Click the Run button** to see your changes.

--- /task ---

Fantastic work! Your comicbook page now contains a form with input fields.

In the next step you will make your form interactive so your user's changes can be updated on the page. 

