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

Add the attribute `id="character-sheet"` inside the opening `<section>` tag.

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
line_number_start: 22
line_highlights: 23-25
---

    <section id="character-sheet"> <!--Superhero character creation form-->
      <div id="name-input">
               
      </div>
    </section>
    
--- /code ---

--- /task ---

--- task ---

Add a `<label>` element to the superhero name section.

The `<label>` element allows you to define a title for a particular form field.

--- code ---
---
language: html
filename: comicbook.html
line_numbers: true
line_number_start: 22
line_highlights: 24
---

    <section id="character-sheet"> <!--Superhero character creation form-->
      <div id="name-input">
        <label>Superhero Name:</label>
               
      </div>
    </section>
    
--- /code ---

The `<label>` element is also good for accessibility. 

It allows screen-readers to read the .....

--- /task ---

The `<input>` element is the most commonly used form element because it allows users add data to a form.

This can be displayed in many ways using the `type` attribute.

--- collapse ---

---
title: What are the form inputs in HTML?
---

+ Text (<input type="text">): allows users to enter a single line of text.
+ Password (<input type="password">): allows text input but hides the entered text for sensitive information.
+ Textarea (<textarea></textarea>): allows users to enter multiple lines of text.
+ Checkbox (<input type="checkbox">): allows users to select one or more options.
+ Radio Button (<input type="radio">): allows users to select a single option.
+ Select Dropdown (<select><option value="1">1</option><option value="2">2</option></select>): creates a dropdown list for users to choose one option.
+ Submit (<input type="submit">): a button that sends the data enetered byt the users on the form.
+ Reset (<input type="reset">): a button that clears all the form fields to their default values.

--- /collapse ---

--- task ---

Add a text `<input>` field with the attributes `type="text"` and `id="name-text"`.

--- code ---
---
language: html
filename: comicbook.html
line_numbers: true
line_number_start: 22
line_highlights: 25
---

    <section id="character-sheet"> <!--Superhero character creation form-->
      <div id="name-input">
        <label>Superhero Name:</label>
        <input type="text" id="name-text">     
      </div>
    </section>
    
--- /code ---

**Test:** Click the **Run** button to see the changes you have made.
+ You will see a text input area with the label "Superhero Name:" displayed next to it.

--- /task ---

**Debug step:**
+ Check that you have used the correct `input type` for your "Superhero Name" section.
+ Check that you have used the correct attributes for each element

You can add attributes to input elements to control their behaviour and the way a user interacts with them.

--- collapse ---

---
title: What other attributes can I use?
---
+ type: sets the category of input field. Examples include text, password, checkbox, radio, submit, reset, etc.
Example: `<input type="text">`

+ name: sets the identifier for the field, which is used when submitting the form data.
Example: `<input type="text" name="username">`

+ value: sets the default data entered in the input field. For example in a form where the user is asked for their dietary requirements, you could set the default value of that field to "None".
Example: `<input type="text" name="Dietary requirements" value="None">`

+ placeholder: provides a short hint that describes the expected value of the input field and is replaced when the user enters a value.
Example: `<input type="text" placeholder="Enter your name">`

+ required: ensures that the input field must be filled out before submitting the form.
Example: `<input type="text" required>`

+ maxlength: sets the maximum number of characters allowed in a text or password input.
Example: `<input type="text" maxlength="30">`

+ min and max: sets the minimum and maximum values for number or date inputs.
Example: `<input type="number" min="0" max="100">`

--- /collapse ---

### Design the Superhero ability section 

You will create a dropdown list for users to choose one option for their superhero's ability..

The `<select>` element is used to create a drop down list on a form.

The `<option>` element is then used to provide options within the list.

--- task ---

Create a `<div>` element with the attribute `id="ability-input"`.

Add the `<select>` and `<option>` for creating the dropdown list within the `<div>` element.

--- code ---
---
language: html
filename: comicbook.html
line_numbers: true
line_number_start: 22
line_highlights: 27-35
---
   
    <section id="character-sheet"> <!--Superhero character creation form-->
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

Notice that the first option has a blank `value` attribute.
This will be used later when creating the functionality for your form.

**Test:** Click the **Run** button to see the changes you have made.
+ You will see a dropdown list.
+ Click on the arrow to view more options.

--- /task ---

**Debug step:**
+ Check that you have used `<option>` elements inside your `<select>` elements.
+ Ensure your form fields are being created in the right order: 
    place the entire div with the attribute `id="ability-input"` below the `<div>` element with the attribute `id="name-input"`. 

### Design the Superhero appearance section 

You will add a text area to your form so users can describe their supehero's appearance.

The `<textarea>` element creates a form field with multiple lines so users can input text. The element can be styled using CSS.

--- task ---

Create a `<div>` element with the attribute `id="appearance-input"`.

Add the HTML code for creating the appearance description within the `<div>` element.

--- code ---
---
language: html
filename: comicbook.html
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
      <textarea id="appearance-text" placeholder="Type the appearance of your superhero here...."></textarea>
    </div>
    
--- /code ---

**Test:** Click the **Run** button to see the changes you have made.
+ You will see a text area showing placeholder text.

--- /task ---

### Design the Superhero origin story section 

You will add another text area to your form so users can describe their superhero's origin story.

--- task ---

Create a `<div>` element with the attribute `id="origin-input"`.

Add the HTML code for creating the origin story within the `<div>` element. 

--- code ---
---
language: html
filename: comicbook.html
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

**Test:** Click the **Run** button to see the changes you have made.
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
filename: comicbook.html
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

**Test:** Click the **Run** button to see the changes you have made.
+ You will see a button with the title "Create" below your origin story text area.

--- /task ---

**Debug step:**

+ Check that you have added brackets () at the end of the attribute `onclick="displaySummary()"`

### Create a summary section

Once your users have finished creating their superhero, it would be great to show them a summary of their character.

This section will stay hidden until users click the "Create" button.

--- task ---

Create a new `<section>` element below the section with the attribute `id="character-sheet"`

Give your new section the attribute `id="summary-section"`.

This attribute will be used to style this section.

--- code ---
---
language: html
filename: comicbook.html
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
filename: comicbook.html
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

