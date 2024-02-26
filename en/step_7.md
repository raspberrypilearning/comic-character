## Create light mode theme

In this step, you will create a toggle switch that will allow your users switch between dark mode and light mode. The website will remember their option even if they navigate to another page.
<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/comic-character-step7" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
<span style="color: #0faeb0">**Dark mode and light mode**</span> are user interface themes that change the colour scheme of an application or website based on the user's preference or system settings.
Using these theme colour modes is good for accessibility and dark mode, in particular, is praised for improving readability and reducing eye strain, especially in low-light conditions.
</p>

Your `styles.css` file contains the colour scheme `.light-mode` that will be used to update your website based on your user's choices.

#### Add toggle to the header section

You have previously learnt how to use `<button>` elements to trigger an event. 

You will learn to use a checkbox styled as a toggle slider, so your users can switch between both themes.

--- task ---

Open `index.html`.

Create a `<div>` element inside the header section with the attribute `class="toggle-container"`

Place it below the `<nav>` element in the `<header>` section.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 19
line_highlights: 19-21
---

    <div class="toggle-container">

    </div>
      
--- /code ---

--- /task ---

The toggle switch is made up of three elements, `<label>`, `<input>`, and `<span>`.

You have used some of these form field elements previously, when you created your superhero form. 

--- task ---

Inside the `<div>` element, add a `<label>` element with a with the attribute `class="switch"`.

Add the `<input>` element that your users will click to toggle between dark mode and light mode.

Add the attributes `type="checkbox"` and `id="lightModeToggle"`.

Add the `<span>` element with the attribute `class="slider"`.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 19
line_highlights: 20-23
---

    <div class="toggle-container">
      <label class="switch">
        <input type="checkbox" id="lightModeToggle">
          <span class="slider"></span>
      </label>
      
    </div>
      

--- /code ---

--- /task ---

The `<input>` element contains the attribute `type="checkbox"` which creates a checkbox for your toggle switch. 

You also added a `<span>` element with the attribute `class="slider"`. This provides the styling to convert the checkbox into a toggle design.

--- task ---

Below the `<label>` element, add a final `<span>` element with the attribute `class="toggle-label material-symbols-outlined"`.

This provides the icon for light mode on your toggle.

Add text: "light_mode" inside the `<span>` element.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 19
line_highlights: 24
---

    <div class="toggle-container">
      <label class="switch">
        <input type="checkbox" id="lightModeToggle"/>
          <span class="slider"></span>
      </label>
      <span class="toggle-label material-symbols-outlined">light_mode</span>
    </div>
      
--- /code ---

**Test:** Click the **Run** button.
+ Your toggle slider should appear in your nav bar aligned to the right of your menu items.
+ You can toggle the switch, but it will not work yet.

--- /task ---

**Debug step:**
+ Ensure you have left spaces between your attributes where you have multiple attributes in an element.

--- collapse ---

---
title: How to import icons using Google fonts
---



--- /collapse ---

Good Job! You've successfully added the toggle slider to your webpage, you will need to give it some functionality.

### Create an event handler for your toggle

--- task ---

Open `script.js`. 

Use the `querySelector()` to find the element with the attribute `id="lightModeToggle"`.

Assign it to a constant `lightModeToggle`. 

--- collapse ---

---
title: Solution for lightModeToggle constant
---

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 58
line_highlights: 59
---
   //Create the constant for light mode
    const lightModeToggle = document.querySelector("#lightModeToggle");

--- /code ---

--- /collapse ---

--- /task ---

You will now need to create a function that will act as an event handler for your checkbox element.

--- task ---

Create the function `changeLightMode()`.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 61
line_highlights: 62-64
---
   
   // Light mode function 
  function changeLightMode(){
   
  }

--- /code ---

--- /task ---

When you added the `<label>` element to your HTML page, you added an `<input>` element with the attribute `type="checkbox"`.

JavaScript provides a property to allow you check if the checkbox has been ticked(`.checked`).

--- task ---

Use the `.checked` property to check the HTML element with the id `lightModeToggle`.

Assign this to a variable `isLightMode`.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 61
line_highlights: 63
---
   
   // Light mode function 
  function changeLightMode(){
      var isLightMode = lightModeToggle.checked;

  }

--- /code ---

--- /task ---

The DOM provides a `classList` property that finds and returns the CSS class of an element.

You can then use functions of the `classList` property to add, toggle or remove CSS classes from an element.

--- collapse ---

---
title: How does the classList property work?
---



--- /collapse ---

--- task ---

Use the `.toggle` function from the `classList` property to toggle (turn on and off) the `light-mode` class selector onto the variable storing the HTML element attribute.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 61
line_highlights: 65
---
   
   // Light mode function 
  function changeLightMode(){
      var isLightMode = lightModeToggle.checked;

      document.body.classList.toggle("light-mode", isLightMode);

  }

--- /code ---

--- /task ---

--- task ---

Open `index.html`.

Add the attribute `onchange="changeLightMode()"` to the `<input>` element inside the toggle `<label>` element.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 19
line_highlights: 22
---

    <div class="toggle-container">
      <label class="switch">
        <input type="checkbox" id="lightModeToggle" onchange="changeLightMode()"/>
          <span class="slider"></span>
      </label>
      <span class="toggle-label material-symbols-outlined">light_mode</span>
    </div>
      
--- /code ---

**Test:** Click the **Run** button. 

+ Click on the toggle switch to slide it into light mode.
+ The theme colours of your website should change.

--- /task ---


### Check the user's local storage

The toggle you have created will modify your website's CSS settings when the user switches on light mode. However, when you navigate from one page to another, the toggle will switch back to it's original position, turning light mode off.

You will need to find a way to store the user's choice when they switch light mode on.

JavaScript provides a `localStorage` function to enable this feature.

--- collapse ---

---
title: What are local storage preferences?

---

Local storage in web development is a way to store data on a user's browser that remains even after the user closes the browser or navigates away from the page. 

It provides a simple key-value pair storage system that uses local storage to save and retrieve user preferences or settings.

1. **Local Storage:**
   - A small storage space available in a user's web browser.
   - Data stored in local storage remains on the user's device even after they close the browser.

2. **Preferences:**
   - User choices or settings, such as theme preferences, language selection, or any customizations.

3. **Storing Preferences in Local Storage:**
   - Developers can use local storage to save and retrieve user preferences.
   - Preferences are often stored as key-value pairs. For example, a key might be "lightMode" with a value of "true" or "false" to represent a light or dark mode preference.

--- /collapse ---

--- task ---

Open `script.js`.

Use the `.setItem` function of the `localStorage` property

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 61
line_highlights: 67
---
   
   // Light mode function 
  function changeLightMode(){
      var isLightMode = lightModeToggle.checked;

      document.body.classList.toggle("light-mode", isLightMode);

      localStorage.setItem("lightMode", isLightMode.toString());
  }

--- /code ---

--- /task ---

--- collapse ---

---
title: How is the EventListener method used?
---

The `.addEventListener` syntax is written in the following way:
  element.addEventListener(eventType, callbackFunction);

+ element: The HTML element to which you want to attach the event listener.
+ eventType: The type of event you want to listen for (e.g., "click", "keydown").
+ callbackFunction: The function to be executed when the specified event occurs.

--- /collapse ---

--- task ---

Create the local storage function.

Create a .`addEventListener` function.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 55
line_highlights: 56-58
---

    // Check local storage
    document.addEventListener("DOMContentLoaded", function () {
    
    }); 
      
--- /code ---

--- /task ---

`"DOMContentLoaded"` is an `eventType` signal that tells when the main structure of a webpage is ready, letting JavaScript start doing things without waiting for everything like pictures to finish loading.


Next, you will check the local storage of the browser to see if their local browser preference is set to light mode or dark mode.

You will check if the user's preference for light mode is stored in the browser's local storage. If it is, isLightMode is set to true; otherwise, it's set to false.

You will use a boolean value to set the state to `true`.

--- task ---

Create a variable `isLightMode` and store the value of the `localStorage` check.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 55
line_highlights: 60
---
    // Light mode function 
    document.addEventListener("DOMContentLoaded", function () {
  
    // Check if light mode preference is stored in local storage
    var isLightMode = localStorage.getItem("lightMode") === "true";
  
    }); 
  
--- /code ---

--- /task ---

--- collapse ---

---
title: What does === mean?
---

In JavaScript, `===` is a strict equality operator. It checks if two values are not only equal in value but also of the same data type. If both the value and the data type are the same, `===` returns true; otherwise, it returns false.

For example:

5 === 5 is true because both values are the same (and they are both numbers).
'5' === 5 is false because even though the values are equal, they are of different types (string and number).


--- /collapse ---

If the user's local storage preference is already set to "lightMode", then you will need to ensure that the light mode selector is added to the HTML element.

You can use the `.toggle` function from the `classList` property to achieve this.

--- task ---

Add the `.toggle` function from the `classList` property onto the variable storing the HTML element attribute.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 55
line_highlights: 64
---
    // Light mode function 
    document.addEventListener("DOMContentLoaded", function () {
  
    // Check if light mode preference is stored in local storage
    var isLightMode = localStorage.getItem("lightMode") === "true";
  
    // Set initial light mode state based on the stored preference
    document.body.classList.toggle("light-mode", isLightMode);
  
   }); 
  
--- /code ---

--- /task ---

You also have to ensure the checkbox is shown as ticked (checked) to the user if the light mode preference is turned on.

If this isn't done, the light mode preference would be set to `on` but the toggle switch position would be set to `off`.

--- task ---

Use the `.checked` property of the variable storing the checkbox HTML element.

Store the variable `isLightmode` which is the check that the user preference is set to "true".

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 55
line_highlights: 64
---
    // Light mode function 
    document.addEventListener("DOMContentLoaded", function () {
    const lightModeToggle = document.getElementById("lightModeToggle");
  
    // Check if light mode preference is stored in local storage
    const isLightMode = localStorage.getItem("lightMode") === "true";
  
    // Set initial light mode state based on the stored preference
    document.body.classList.toggle("light-mode", isLightMode);
    lightModeToggle.checked = isLightMode;
   }); 
  
--- /code ---

--- /task ---

--- task ---

Open `comicbook.html`.

Add the `<div>` element inside `<header>` section. 

Place it below the `<nav>` element.

--- code ---
---
language: html
filename: comicbook.html
line_numbers: true
line_number_start: 19
line_highlights: 
---
    <div class="toggle-container">
      <label class="switch">
        <input type="checkbox" id="lightModeToggle" />
          <span class="slider"></span>
      </label>
      <input type="checkbox" id="lightModeToggle" onchange="changeLightMode()"/>
    </div>
      
--- /code ---

--- /task ---

**Test:** Click the **Run** button. 
+ Your toggle switch should appear in your nav bar aligned to the right of your menu items.
+ Toggle the switch on and off to see your website theme colours change.

Navigate to the `index.html` page to check that your preference stays on.

Great work! You have created a toggle slider that allows users switch from dark mode to light mode themes. Next, you will add a hero slider to your website and allow users navigate between each hero image using JavaScript.
