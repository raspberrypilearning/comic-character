## Create a hero image slider

In this step you will create an interactive hero slider for your webpage. Users can navigate through different hero images using buttons on the slider.
<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/comic-character-complete" width="100%" height="400" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

--- task ---

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 55
line_highlights: 63
---

// Place Hero slider variables here 
let currentHeroIndex = 0;
const heroSlides = document.querySelectorAll('.hero-slide');
  
--- /code ---

--- /task ---

--- task ---

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 55
line_highlights: 63
---

// Place Hero slider variables here 
let currentHeroIndex = 0;
const heroSlides = document.querySelectorAll('.hero-slide');

// Change Hero function
function changeHero(direction) {
  
}

  
--- /code ---

--- /task ---

--- task ---

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 55
line_highlights: 63
---

// Place Hero slider variables here 
let currentHeroIndex = 0;
const heroSlides = document.querySelectorAll('.hero-slide');

// Change Hero function
function changeHero(direction) {
    //Turn the current slide off
    heroSlides[currentHeroIndex].classList.remove("active");

}

  
--- /code ---

--- /task ---

--- task ---

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 55
line_highlights: 63
---

// Place Hero slider variables here 
let currentHeroIndex = 0;
const heroSlides = document.querySelectorAll('.hero-slide');

// Change Hero function
function changeHero(direction) {
    //Turn the current slide off
    heroSlides[currentHeroIndex].classList.remove("active");

     // Find the next slide
    currentHeroIndex = currentHeroIndex + direction;

}

  
--- /code ---

--- /task ---

--- task ---

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 55
line_highlights: 63
---

// Place Hero slider variables here 
let currentHeroIndex = 0;
const heroSlides = document.querySelectorAll('.hero-slide');

// Change Hero function
function changeHero(direction) {
    //Turn the current slide off
    heroSlides[currentHeroIndex].classList.remove("active");

     // Find the next slide
    currentHeroIndex = currentHeroIndex + direction;

     // Wrap around
    if (currentHeroIndex < 0){
        currentHeroIndex = heroSlides.length - 1;
    } else if (currentHeroIndex > heroSlides.length - 1) {
        currentHeroIndex = 0;
    }

}

  
--- /code ---

--- /task ---

--- task ---

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 55
line_highlights: 63
---

// Place Hero slider variables here 
let currentHeroIndex = 0;
const heroSlides = document.querySelectorAll('.hero-slide');

// Change Hero function
function changeHero(direction) {
    //Turn the current slide off
    heroSlides[currentHeroIndex].classList.remove("active");

    // Find the next slide
    currentHeroIndex = currentHeroIndex + direction;

    // Wrap around
    if (currentHeroIndex < 0){
        currentHeroIndex = heroSlides.length - 1;
    } else if (currentHeroIndex > heroSlides.length - 1) {
        currentHeroIndex = 0;
    }

    // Update the slider
    heroSlides[currentHeroIndex].classList.add("active");
}

  
--- /code ---

--- /task ---

--- task ---

Open `index.html`.


--- /task ---


Fantastic effort! You have created an interactive website where users can create their own superhero character. You have validated user entry and allowed users to choose a theme for the website. 

Check your understanding of the project using the reflection quiz on the next step.

