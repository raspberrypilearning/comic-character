## Create light mode theme

In this step, you will create a toggle switch that will allow your users switch between dark mode, which is the original theme colour of your website and light mode. 
<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/comic-character-step5" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
<span style="color: #0faeb0">**Dark mode and light mode**</span> are user interface themes that change the colour scheme of an application or website based on the user's preference or system settings.

Using these theme colour modes is good for accessibility and dark mode, in particular, is praised for improving readability and reducing eye strain, especially in low-light conditions.
</p>

In this project, your users can click a button to change between dark and light modes. The website remembers their option even if they navigate to another page.

Your `styles.css` file contains the colour scheme `.light-mode` that will be used to update your website based on your user's choices.

#### Add toggle to the header section
You will need to give your users a way to switch between both themes by using a toglle slider

--- task ---

Open `index.html`.

Create a div element inside the header section with the attribute `class="toggle-container"`

Place it below the `<nav>` tags in the `<header>` element.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 19
line_highlights: 19-25
---
    <div class="toggle-container">




    </div>
      
--- /code ---

--- /task ---

The toggle switch is made up of three elements, `<label>`, `<input>`, and `<span>`.

You have used some of these form field elements previously, when you created your superhero form. 

--- task ---

Inside the div, add a `<label>` element with a with the attribute `class="switch"`.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 19
line_highlights: 20, 23
---
    <div class="toggle-container">
      <label class="switch">
      
      
      </label>
      
    </div>
      
--- /code ---

--- /task ---

--- task ---

Add the `<input>` element that your users will click to toggle between dark mode and light mode.

Add the attribute `type="checkbox"` and `id="lightModeToggle"`.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 19
line_highlights: 21
---
    <div class="toggle-container">
      <label class="switch">
        <input type="checkbox" id="lightModeToggle" />

      </label>
      
    </div>
      

--- /code ---

--- /task ---

--- task ---

Add the `<span>` element with the attribute `class="slider"`.

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
        <input type="checkbox" id="lightModeToggle" />
          <span class="slider"></span>
      </label>
      
    </div>
      

--- /code ---

--- /task ---

--- task ---

Below the `<label>` element, add a final `<span>` elment with the attribute `class="toggle-label material-symbols-outlined"`.

 Add text: "light_mode" between the `<span>` tags.

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
        <input type="checkbox" id="lightModeToggle" />
          <span class="slider"></span>
      </label>
      <span class="toggle-label material-symbols-outlined">light_mode</span>
    </div>
      
--- /code ---

--- /task ---

**Click the Run button** to see your changes.
Your toggle switch should appear in your nav bar aligned to the right of your menu items.

You can toggle the switch, but it will not work yet.

**Debug step:**
+ Ensure you have left spaces between your class names.
+ Ensure you have used the correct form field type.

Good Job! You've successfully added the toggle switch to your webpage, let's give it some functionality.

#### Check the user's local storage

The toggle switch you have created will modify your website's CSS settings by using JavaScript.

You will give your toggle switch functionality by using a DOM method: EventListener. 

An EventListener waits for a specific action, like a button click, and then triggers a response to that action.

--- task ---

Open `script.js` to create the light mode function.

Create a .`addEventListener` function.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 55
line_highlights: 56-58
---
    // Light mode function 
    document.addEventListener("DOMContentLoaded", function () {
    
    }); 
      
--- /code ---

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

"DOMContentLoaded" is an `eventType` signal that tells when the main structure of a webpage is ready, letting JavaScript start doing things without waiting for everything like pictures to finish loading.

--- /task ---

--- task ---

Declare a constant called `lightModeToggle` that stores the HTML element of your toggle switch with the attribute `id="lightModeToggle"`. 

Use the DOM `document.getElementById` method to select the HTML element.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 55
line_highlights: 57
---
    // Light mode function 
    document.addEventListener("DOMContentLoaded", function () {
      const lightModeToggle = document.getElementById("lightModeToggle");
  
   }); 

--- /code ---

--- /task ---

Ensure that the line of code you just added is indented inside your `EventListener` method.

Next, you will check the local storage of the browser to see if their local browser preference is set to light mode or dark mode.

You will use a boolean value to set the state to `true`.

--- task ---

Create a constant `isLightMode` and store the value of the localStorage check.

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
    const lightModeToggle = document.getElementById("lightModeToggle");
  
    // Check if light mode preference is stored in local storage
    const isLightMode = localStorage.getItem("lightMode") === "true";
  
    }); 
  
--- /code ---

You will check if the user's preference for light mode is stored in the browser's local storage. If it is, isLightMode is set to true; otherwise, it's set to false.

--- collapse ---

---
title: What does === mean?
---

In JavaScript, `===` is a strict equality operator. It checks if two values are not only equal in value but also of the same data type. If both the value and the data type are the same, `===` returns true; otherwise, it returns false.

For example:

5 === 5 is true because both values are the same (and they are both numbers).
'5' === 5 is false because even though the values are equal, they are of different types (string and number).


--- /collapse ---

--- /task ---

Use a DOM method: `document.body.classList.toggle` that toggles the presence of a specified CSS class on the body element of an HTML document. 

You will select the `.light-mode` CSS selector.

--- task ---

Add the `document.body.classList.toggle` method inside the `EventListener`.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 55
line_highlights: 63
---
    // Light mode function 
    document.addEventListener("DOMContentLoaded", function () {
    const lightModeToggle = document.getElementById("lightModeToggle");
  
    // Check if light mode preference is stored in local storage
    const isLightMode = localStorage.getItem("lightMode") === "true";
  
    // Set initial light mode state based on the stored preference
    document.body.classList.toggle("light-mode", isLightMode);
  
   }); 
  
--- /code ---

When `isLightMode` is true, the `"light-mode"` class is added to the body element, and when `isLightMode` is false, the class is removed.

--- /task ---

Set the initial state of the light mode toggle switch based on the user's preference. 

If `isLightMode` is true, the switch is `on`; otherwise, it's `off`.

--- task ---

Add the `LightModeToggle` check inside the `Eventlistener`.

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

### Check and change the CSS style

--- task ---

Create another `EventListener` function to check if the current state of the toggle switch is different from the current state of the body's `"light-mode"` class.

Also declare a constant to store the current state of the toggle position: `on` or `off`.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 55
line_highlights: 66-67
---
    // Light mode function 
    document.addEventListener("DOMContentLoaded", function () {
    const lightModeToggle = document.getElementById("lightModeToggle");
  
    // Check if light mode preference is stored in local storage
    const isLightMode = localStorage.getItem("lightMode") === "true";
  
    // Set initial light mode state based on the stored preference
    document.body.classList.toggle("light-mode", isLightMode);
    lightModeToggle.checked = isLightMode;
  
    lightModeToggle.addEventListener("change", function () {
      const isLightMode = lightModeToggle.checked;
  
   });
   }); 
  
--- /code ---

--- /task ---

You will use a conditional statement to check `if` the toggle switch state matches the current CSS `body` class state.

If it does not, an action or change needs to occur.

--- collapse ---

---
title: What is a condiitonal statement?
---

Conditional statements in JavaScript are used to make decisions in your code based on certain conditions. 

They allow your program to execute different blocks of code depending on whether a specified condition evaluates to true or false.

These are the conditional statements used in in JavaScript: if, else, else if, and switch:

if Statement: executes a block of code if a specified condition is true.

    const age = 16;

    if (age >= 18) {
        console.log("You are eligible to vote!");
    } else {
        console.log("Sorry, you are too young to vote.");
    }
    
else if Statement: allows you to check multiple conditions sequentially.

    const time = 14;

    if (time < 12) {
        console.log("Good morning!");
    } else if (time < 18) {
        console.log("Good afternoon!");
    } else {
        console.log("Good evening!");
    }

else Statement: executes a block of code if the preceding if or else if condition(s) are not true.

    const isRaining = true;

    if (isRaining) {
        console.log("Take an umbrella!");
    } else {
        console.log("Enjoy the weather!");
    }

switch Statement: allows you to choose one of many code blocks to be executed.

const day = "Monday";

    switch (day) {
        case "Monday":
            console.log("It's the start of the week.");
            break;
        case "Friday":
            console.log("It's almost the weekend!");
            break;
        default:
            console.log("It's a regular day.");
    }


--- /collapse ---


--- task ---

Add an `if` statement inside your `lightModeToggle.addEventListener` method.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 55
line_highlights: 70
---
    // Light mode function 
    document.addEventListener("DOMContentLoaded", function () {
     const lightModeToggle = document.getElementById("lightModeToggle");
  
    // Check if light mode preference is stored in local storage
    const isLightMode = localStorage.getItem("lightMode") === "true";
  
    // Set initial light mode state based on the stored preference
    document.body.classList.toggle("light-mode", isLightMode);
    lightModeToggle.checked = isLightMode;
  
    lightModeToggle.addEventListener("change", function () {
      const isLightMode = lightModeToggle.checked;
  
      // Check if light mode is already in the desired state
      if (isLightMode !== document.body.classList.contains("light-mode")) {
     

    }
    });
  }); 
  
--- /code ---

 Check if the current state of the toggle switch is different from the current state of the body's `"light-mode"` class.

--- /task ---

--- task ---

Add a DOM method to change the website theme using the `light-mode` style when the toggle is switched `on`.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 55
line_highlights: 72
---
      // Light mode function 
    document.addEventListener("DOMContentLoaded", function () {
    const lightModeToggle = document.getElementById("lightModeToggle");
  
    // Check if light mode preference is stored in local storage
    const isLightMode = localStorage.getItem("lightMode") === "true";
  
    // Set initial light mode state based on the stored preference
    document.body.classList.toggle("light-mode", isLightMode);
    lightModeToggle.checked = isLightMode;
  
    lightModeToggle.addEventListener("change", function () {
      const isLightMode = lightModeToggle.checked;
  
      // Check if light mode is already in the desired state
      if (isLightMode !== document.body.classList.contains("light-mode")) {
        // Update body class and store the user's preference in local storage
        document.body.classList.toggle("light-mode", isLightMode);
       
    }
    });
  }); 
  
--- /code ---

--- /task ---

--- task ---

Update the user's preference for `light mode` in the local storage and save it as a `string` data type.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 55
line_highlights: 73
---
      // Light mode function 
    document.addEventListener("DOMContentLoaded", function () {
    const lightModeToggle = document.getElementById("lightModeToggle");
  
    // Check if light mode preference is stored in local storage
    const isLightMode = localStorage.getItem("lightMode") === "true";
  
    // Set initial light mode state based on the stored preference
    document.body.classList.toggle("light-mode", isLightMode);
    lightModeToggle.checked = isLightMode;
  
    lightModeToggle.addEventListener("change", function () {
      const isLightMode = lightModeToggle.checked;
  
      // Check if light mode is already in the desired state
      if (isLightMode !== document.body.classList.contains("light-mode")) {
        // Update body class and store the user's preference in local storage
        document.body.classList.toggle("light-mode", isLightMode);
        localStorage.setItem("lightMode", isLightMode.toString());
    }
    });
  }); 
  
--- /code ---

--- /task ---

--- task ---

Open `index.html`.

**Click the Run button** to see your changes.

**Debug step:**
+ Ensure all your code is indented correctly inside EventListeners.
+ Ensure all your code is indented correctly inside `if` statments.
+ Ensure you have closed all parentheses `()`
+ Ensure you have closed all curly braces `{}`

--- /task ---

Great work! You have created a toggle switch that changes your website theme colours. Next, you will secure your content so users have to be verified before they gain access.
