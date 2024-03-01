## Add form input fields

In this step, you will design an interactive web page and a web form where users can create their own superhero!

<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/comic-character-step3" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

You have added text and images to your website. 

There are other types of content, including:
+ Videos
+ Forms
+ Maps
+ Music

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
HTML <span style="color: #0faeb0">**forms**</span> allow users to input and submit information.
</p>

You will add different types of form elements to allow users to create their superhero character.

**Note:** CSS styling for your form is already provided in the file `styles.css`.

--- collapse ---

---
title: Types of form elements
---

![An example HTML form with form fields annotated to show their use.](images/HTML_form_elements.png)

+ `<input>` e.g. single-line text box, checkbox, button.
+ `<textarea>` For entering multiple lines of text.
+ `<label>` Text to tell the user what information to enter.

--- /collapse ---

### Set up the form

All the input elements will be inside a `<section>` with an `id` attribute, so you can update it later.

--- task ---

Open the `character.html` file.

Find the comment `<!--Superhero character details-->`.

Add the attribute `id="character-details"` to the `<section>` tag.

--- code ---
---
language: html
filename: character.html
line_numbers: true
line_number_start: 22
line_highlights: 22-24
---

      <section id="character-details"> <!--Superhero character details-->
  
      </section>
    
--- /code ---

--- /task ---

### Superhero 'name' section

Users will start by naming their superhero!

--- task ---

Add a `div` element with the attribute `id="name-input"` between the `<section>` tags.

--- code ---
---
language: html
filename: character.html
line_numbers: true
line_number_start: 22
line_highlights: 23-25
---

    <section id="character-details"> <!--Superhero character details-->
      <div id="name-input">
               
      </div>
    </section>
    
--- /code ---

--- /task ---

--- task ---

Add a `<label>` element to tell the user what they need to enter.

--- code ---
---
language: html
filename: character.html
line_numbers: true
line_number_start: 22
line_highlights: 24
---

    <section id="character-details"> <!--Superhero character details-->
      <div id="name-input">
        <label>Superhero Name:</label>
               
      </div>
    </section>
    
--- /code ---

--- collapse ---

---
title: Accessible design
---

The `<label>` element allows screen-readers to read the label out loud when a user focuses on the input element.

--- /collapse ---

--- /task ---

An `<input>` element allows users enter data.

You set the type of input using `type=`.

--- collapse ---

---
title: Examples of input types
---

+ **text:** Single line of text. 
<br>`<input type="text">`
<br>*Try it*:
<br><input type="text">

+ **password:** Hides the entered text.
<br>`<input type="password">`
<br>*Try it*:
<br><input type="password">

+ **checkbox:** Tick one or more options.
<br>`<input type="checkbox">`
<br>*Try it*:
<br><input type="checkbox">

+ **radio:** Select one or more options.
<br>`<input type="radio">`
<br>*Try it*:
<br><input type="radio">

--- /collapse ---

--- task ---

Add a text `<input>` element with the attribute `id="name-text"`.

--- code ---
---
language: html
filename: character.html
line_numbers: true
line_number_start: 22
line_highlights: 25
---

    <section id="character-details"> <!--Superhero character details-->
      <div id="name-input">
        <label>Superhero Name:</label>
        <input type="text" id="name-text">     
      </div>
    </section>
    
--- /code ---

**Test:** Click the **Run** button to see your changes.
+ You will see a text box with the label "Superhero Name:" above it.

--- /task ---

**Debug step:**
+ Check you have added `""` marks around `text`.

### Superhero 'ability' section 

Next, users will choose an ability for their superhero!

+ The `<select>` element is used to create the drop-down list.
+ The `<option>` elements are used to provide choices.

--- collapse ---

---
title: See an example
---

<br>`<select><option value="Water">Water</option><option value="Juice">Juice</option></select>`
<br>*Try it*:
<br><select><option value="Water">Water</option><option value="Juice">Juice</option></select>

--- /collapse ---

--- task ---

Add a `<div>` element with the attribute `id="ability-input"`.

Add a `<label>`. 

Add a `<select>` element with **four** `<option>` elements for the choices.

--- code ---
---
language: html
filename: character.html
line_numbers: true
line_number_start: 22
line_highlights: 27-35
---
   
    <section id="character-details"> <!--Superhero character details-->
      <div id="name-input">
        <label>Superhero Name:</label>
        <input type="text" id="name-text">     
      </div>
      <div id="ability-input">
        <label>Abilities:</label>
        <select id="ability-choice">
          <option value="">Choose an option</option>
          <option value="Flying">Flying</option>
          <option value="Invisibility">Invisibility</option>
          <option value="Time travel">Time travel</option>
        </select>
      </div>
    </section>
    
--- /code ---

**Notice:** The first option has a blank `value`.

**Test:** Click the **Run** button to see your changes.
+ You will see a drop-down list.
+ Click the arrow to view the choices.

--- /task ---

**Debug step:**
+ Check you have four `<option>` elements inside your `<select>` elements.
+ Check you have closing `</option>` tags foe each option.

### Superhero 'appearance' section 

Next, users will describe their superhero's appearance!

The `<textarea>` element provides multi-line text entry.

--- collapse ---

---
title: See an example
---

<br>`<textarea></textarea>`
<br>*Try it*:
<br><textarea></textarea>

--- /collapse ---

You can add a `placeholder` attribute to an input element.

This gives a hint as to what the user should enter. 

The hint is replaced when the user starts typing.

--- collapse ---

---
title: Examples of input attributes
---

+ placeholder: provides a short hint that describes the expected value of the input field and is replaced when the user enters a value.
Example: `<input type="text" placeholder="Enter your name">`

+ value: sets the default data entered in the input field. For example in a form where the user is asked for their dietary requirements, you could set the default value of that field to "None".
Example: `<input type="text" name="Dietary requirements" value="None">`

+ required: ensures that the input field must be filled out before submitting the form.
Example: `<input type="text" required>`

+ maxlength: sets the maximum number of characters allowed in a text or password input.
Example: `<input type="text" maxlength="30">`

+ min and max: sets the minimum and maximum values for number or date inputs.
Example: `<input type="number" min="0" max="100">`

--- /collapse ---

--- task ---

Create a `<div>` element with the attribute `id="appearance-input"`.

Add the `<label>` and `<textarea>` HTML inside the `<div>` element.

Include a `placeholder` attribute for the `<textarea>` element.

--- code ---
---
language: html
filename: character.html
line_numbers: true
line_number_start: 27
line_highlights: 36-39
---

    <div id="ability-input">
      <label>Abilities:</label>
      <select id="ability-choice">
        <option value="">Choose an option</option>
        <option value="Flying">Flying</option>
        <option value="Invisibility">Invisibility</option>
        <option value="Time travel">Time travel</option>
      </select>
    </div>
    <div id="appearance-input">
      <label>Appearance: </label> 
      <textarea id="appearance-text" placeholder="Describe your superhero!"></textarea>
    </div>
    
--- /code ---

**Test:** Click the **Run** button to see your changes.
+ You will see a multi-line text box with the placeholder text.

--- /task ---

**TODO** UP TO HERE

### Superhero 'origin story' section 

You will add another text area to your form so users can describe their superhero's origin story.

--- task ---

Create a `<div>` element with the attribute `id="origin-input"`.

Add the HTML code for creating the origin story within the `<div>` element. 

--- code ---
---
language: html
filename: character.html
line_numbers: true
line_number_start: 36
line_highlights: 40-43
---

    <div id="appearance-input">
      <label>Appearance: </label> 
      <textarea id="appearance-text" placeholder="Type the appearance of your superhero here...."></textarea>
    </div>
    <div id="origin-input">
      <label>Origin Story: </label> 
      <textarea id="origin-text" placeholder="Type your superhero origin story here...."></textarea>
    </div>
    
--- /code ---

**Test:** Click the **Run** button to see your changes.
+ You will see another text area showing placeholder text.

--- /task ---


### Show your user their Superhero character story 

The `<button>` element creates a control that can be activated by the user's mouse, keyboard, voice command or any other assistive technology.

The `onclick` attribute provides interactivity using a JavaScript event.

--- collapse ---

---
title: What is an event?
---

An event is an action or occurrence that takes place in your browser. Events can be triggered by the user, the browser or any other elements on the page. 

Event types include:
+ User generated events:
  + Mouse events (click, double click, mouseover).
  + Keyboard events (keypress, keydown, keyup).
  + Touch events (touchstart, touchmove, touchend).
  + Form events (submit, change, input).

+ Browser generated events:
  + Page load events (load, unload).
  + Window events (resize, scroll).
  + Time events (setInterval, setTimeout).

--- /collapse ---

--- task ---

Add a `<button>` element with an attribute `onclick="displaySummary()"` below the `<div>` element with the attribute `id="origin-input"`.

Also add the text "Submit" inside the `<button>` element so users know the purpose of the button.

--- code ---
---
language: html
filename: character.html
line_numbers: true
line_number_start: 40
line_highlights: 44
---

    <div id="origin-input">
      <label>Origin Story: </label> 
      <textarea id="origin-text" placeholder="Type your superhero origin story here...."></textarea>
    </div>
    <button onclick="displaySummary()">Create</button>

--- /code ---

You will create a `displaySummary()` function in the next step that will be used as an event handler.

An event handler is a function that gets executed in response to a specific event e.g when the user clicks this `<button>` element. 

**Test:** Click the **Run** button to see your changes.
+ You will see a button with the title "Create" below your origin story text area.

--- /task ---

**Debug step:**

+ Check that you have added brackets () at the end of the attribute `onclick="displaySummary()"`

### Create a summary section

Once your users have finished creating their superhero, it would be great to show them a summary of their character.

This section will stay hidden until users click the "Create" button.

--- task ---

Create a new `<section>` element below the section with the attribute `id="character-details"`

Give your new section the attribute `id="summary-section"`.

This attribute will be used to style this section.

--- code ---
---
language: html
filename: character.html
line_numbers: true
line_number_start: 44
line_highlights: 46-48
---
      
      <button onclick="displaySummary()">Submit</button>
    </section>
    <section id="summary-section">
  
    </section>
    
--- /code ---

--- /task ---

--- task ---

Add a `<h2>` element to create a title for the section.

Add a `<p>` element with the attribute `id="summary-paragraph"`.

--- code ---
---
language: html
filename: character.html
line_numbers: true
line_number_start: 46
line_highlights: 47-48
---

    <section id="summary-section">
      <h2>Superhero Summary</h2>
      <p id="summary-paragraph"></p>
    </section>
    
--- /code ---

**Test:** Click the **Run** button
You might expect to see a summary section shown when the user clicks the "Create" button.

--- /task ---

However, the `display` property for the `#summary-section` selector has been set to `none;`. 

This means you will not see any changes immediately.

You will learn more about using JavaScript to change CSS styles in the next step.

--- collapse ---

---
title: View the summary-section CSS selector
---

--- code ---
---
language: css
filename: style.css
line_numbers: false
line_number_start: 
line_highlights: 6
---

#summary-section {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 5px;
  display: none;
}
    
--- /code ---

--- /collapse ---


Fantastic work! Your superhero creation page now contains a form with input fields.

In the next step you will make your form interactive so your user can submit their superhero features and view a summary of the character they have created. 
