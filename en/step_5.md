## Create light mode theme

Add a toggle feature that will allow your users switch between dark mode and light mode themes. 
<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/comic-character-step5" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

#### Add toggle to the header section

--- task ---

Open index.html.



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

--- task ---

Open index.html.



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

Open index.html.



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

Open index.html.



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

Open index.html.



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

--- /task ---


#### Check the user's local storage

--- task ---


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

Create a function to navigate to the next slide when users click the `>` button.

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

Create a function to navigate to the next slide when users click the `>` button.

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