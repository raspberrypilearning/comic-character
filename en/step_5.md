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
line_number_start: 20
line_highlights: 24-25
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
line_number_start: 20
line_highlights: 24-25
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
line_number_start: 20
line_highlights: 24-25
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
line_number_start: 20
line_highlights: 24-25
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
line_number_start: 20
line_highlights: 24-25
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

Create a function to navigate to the next slide when users click the `>` button.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 5
line_highlights: 4-8
---
      // Light mode function 
      document.addEventListener("DOMContentLoaded", function () {
    

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
line_number_start: 5
line_highlights: 4-8
---
      // Light mode function 
    document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
  
   
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
line_number_start: 5
line_highlights: 4-8
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
line_number_start: 5
line_highlights: 4-8
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

Create a function to navigate to the next slide when users click the `>` button.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 5
line_highlights: 4-8
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
  
--- /code ---

--- /task ---

--- task ---

Create a function to navigate to the next slide when users click the `>` button.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 5
line_highlights: 4-8
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

Create a function to navigate to the next slide when users click the `>` button.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 5
line_highlights: 4-8
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


#### Style the CSS for the light mode theme


/* Light mode styles */
body.dark-mode {
  background: linear-gradient(to right, #d2cfcf, #bcb7bc);
  color: #ffffff;
}

.dark-mode .navigation {
  background-color: #8e6363;
}

.dark-mode .year {
  color: #fff;
}


.dark-mode .logo {
  color: rgb(243, 239, 239);
  
}

.dark-mode .navbar a {
color: #ffffff;
}

.dark-mode .header {
background: #e6b400;
}

.dark-mode footer {
background-color: #e6b400;;
color: #ffffff;

}

.menu-icon {
display: none;
cursor: pointer;
}

.bar {
width: 25px;
height: 3px;
background-color: #fff;
margin: 6px 0;
transition: 0.4s;
}

#### Javascript
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

<div style="display: flex; flex-wrap: wrap">
<div style="flex-basis: 200px; flex-grow: 1; margin-right: 15px;">
Add an introductory sentence. What will learners achieve by the end of this step?
</div>
<div>
Image, gif or video showing what they will achieve by the end of the step. ![](images/image.png){:width="300px"}
</div>
</div>

--- task ---

Another step of tasks to complete.

--- /task ---

--- task ---

Step content... 
Can use:
**Test:**
**Choose:**
**Tip:**

--- /task ---

--- save ---

### Code to Add

