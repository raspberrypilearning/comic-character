## Create light mode theme

In this step, you will create a toggle switch that will allow your users switch between dark mode and light mode themes. 
<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/comic-character-step5" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

#### Add toggle to the header section


--- task ---

Open index.html.

Create a div element inside the header section and give it a class `toggle-container`

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

The toggle switch is made up of three elements, <label>, <input>, and <span>.

--- task ---

Add a <label> element with a class "switch".

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

Add the input element that your users will click to toggle between dark mode and light mode.

The input type of `checkbox` and an id of `darkModeToggle`.

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
        <input type="checkbox" id="darkModeToggle" />

      </label>
      
    </div>
      

--- /code ---

--- /task ---

--- task ---

Add the <span> element with the class "slider".

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
        <input type="checkbox" id="darkModeToggle" />
          <span class="slider"></span>
      </label>
      
    </div>
      

--- /code ---

--- /task ---

--- task ---

Below the <label> element, add a final <span> with the classes "toggle-label" and "material-symbols-outlined" and the text light_mode.

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
        <input type="checkbox" id="darkModeToggle" />
          <span class="slider"></span>
      </label>
      <span class="toggle-label material-symbols-outlined">light_mode</span>
    </div>
      
--- /code ---

The toggle switch will modify your website's CSS settings by using JavaScript to add and remove classes from your main HTML element.


--- /task ---


#### Check the user's local storage

Good Job! You've successfully added the toggle switch to the HTML document, let's give it some functionality.

You will give your toggle switch functionality by using JavaScript. 

--- task ---

Open script.js to create the light mode function.

Add an Event Listener to the HTML document. This function will check the browsers local storage and update our page to light mode from dark mode and back.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 58
line_highlights: 59
---
    // Light mode function 
    document.addEventListener("DOMContentLoaded", function () {
    

    }); 
      
--- /code ---

--- /task ---

--- task ---

Within the function's curly brackets add a variable called darkModeToggle that stores the <input> element of our toggle switch. You can reference the <input> element through its id.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 58
line_highlights: 60
---
    // Light mode function 
    document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
  
   }); 

--- /code ---

--- /task ---

--- task ---

Next, check our local storage of the browser to see if the page is set to light mode or dark mode.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 58
line_highlights: 63
---
    // Light mode function 
    document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
  
    // Check if dark mode preference is stored in local storage
    const isDarkMode = localStorage.getItem("darkMode") === "true";
  
    }); 
  
--- /code ---

--- /task ---

--- task ---

After confirming, if dark mode is already set in the local storage, we should set the page to be in dark mode. Otherwise, it will be set to light mode. And update the checked state of the darkModeToggle to match the mode preference stored in the browser local storage.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 58
line_highlights: 66-67
---
    // Light mode function 
    document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
  
    // Check if dark mode preference is stored in local storage
    const isDarkMode = localStorage.getItem("darkMode") === "true";
  
    // Set initial dark mode state based on the stored preference
    document.body.classList.toggle("dark-mode", isDarkMode);
    darkModeToggle.checked = isDarkMode;
  
   }); 
  
--- /code ---

--- /task ---

--- task ---

Add another event listener function to manage the state of the toggle swtich <input> element. It will check if it has been toggled and set it to the opposite of the current mode of the page. If it's in light mode, it will change it to dark mode. And if it's in dark mode, it will change it to light mode.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 58
line_highlights: 68-69
---
    // Light mode function 
    document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
  
    // Check if dark mode preference is stored in local storage
    const isDarkMode = localStorage.getItem("darkMode") === "true";
  
    // Set initial dark mode state based on the stored preference
    document.body.classList.toggle("dark-mode", isDarkMode);
    darkModeToggle.checked = isDarkMode;
  
    darkModeToggle.addEventListener("change", function () {
    const isDarkMode = darkModeToggle.checked;
  
   });
   }); 
  
--- /code ---

--- /task ---

--- task ---

Now create the function and add a variable called isDarkMode that stores the state of the toggle switch <input> element stored earlier in the darkModeToggle variable. It will check if it has been checked or not.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 58
line_highlights: 73, 78
---
    // Light mode function 
    document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
  
    // Check if dark mode preference is stored in local storage
    const isDarkMode = localStorage.getItem("darkMode") === "true";
  
    // Set initial dark mode state based on the stored preference
    document.body.classList.toggle("dark-mode", isDarkMode);
    darkModeToggle.checked = isDarkMode;
  
    darkModeToggle.addEventListener("change", function () {
    const isDarkMode = darkModeToggle.checked;
  
    // Check if dark mode is already in the desired state
    if (isDarkMode !== document.body.classList.contains("dark-mode")) {
     

    }
    });
  }); 
  
--- /code ---

--- /task ---

--- task ---

The final function to create is an if statement that takes the state of the toggle switch and changes the "dark-mode" class from the HTML document <body> element.


--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 58
line_highlights: 75, 76
---
      // Light mode function 
    document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
  
    // Check if dark mode preference is stored in local storage
    const isDarkMode = localStorage.getItem("darkMode") === "true";
  
    // Set initial dark mode state based on the stored preference
    document.body.classList.toggle("dark-mode", isDarkMode);
    darkModeToggle.checked = isDarkMode;
  
    darkModeToggle.addEventListener("change", function () {
      const isDarkMode = darkModeToggle.checked;
  
      // Check if dark mode is already in the desired state
    if (isDarkMode !== document.body.classList.contains("dark-mode")) {
      // Update body class and store the user's preference in local storage
      document.body.classList.toggle("dark-mode", isDarkMode);
      localStorage.setItem("darkMode", isDarkMode.toString());
    }
    });
  }); 
  
--- /code ---

--- /task ---