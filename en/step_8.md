## Create a hero image slider

In this step you will create an interactive hero image slider for your webpage. Users can navigate through different hero images using buttons on the slider.
<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/comic-character-complete" width="100%" height="400" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### View the slider code

--- task ---

Open `index.html`.

You have been provided the code with all the HTML elements to create a hero image slider.

You have also been provided buttons to navigate to the left (<) and to the right (>) of the slider.

There is a `<span>` element with the attribute `class="hero-slide active"`. You have used the `active` class in the previous project to specify that a particlar link was selected.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 26
line_highlights: 
---

      <main>
        <div class="hero-container">
          <div class="hero-slider">
            <span class="hero-slide active"><img src="stacey-hero.jpg" alt="A superhero character with blonde hair, wearing a blue costume and red cape, in front of a blue and yellow background"></span>
            <span class="hero-slide"><img src="safina-cape.jpg" alt="A superhero character with black hair, wearing a red and white costume and blue cape, in front of a blue and yellow background"></span>
            <span class="hero-slide"><img src="layton-slider.jpg" alt="A superhero character with blonde hair, wearing a blue costume and red cape, in front of a blue background"></span>
          </div>
            <button class="hero-nav-btn prev" onclick="changeHero(-1)">❮</button>
            <button class="hero-nav-btn next" onclick="changeHero(+1)">❯</button>
        </div>
      </main>
  
--- /code ---

**Test:** Click the **Run** button. 
+ There will be a hero image with left and right arrows (buttons) through the images .
+ Click both buttons. What do you expect to happen?

--- /task ---

There is currently no function written as an event handler for the `<button>` elements. 

### Create the slider variables

You have previously used the `querySelector()` function to search and return the first element in your webpage that matches a specified CSS selector.

Your <span> elements all contain the same attribute `class="hero-slide"` so you need to use a different DOM function.

`querySelectorAll(selector)` returns a list of all elements that match the specified CSS selector.

--- task ---

Open `script.js`.

Use the `let` keyword to create a variable `currentHeroIndex`.
Assign the value 0 to the variable.

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
  
--- /code ---

--- /task ---

The `let` keyword is used to declare a variable which can only be used within the code block for the hero slider.

--- task ---

Use the `querySelectorAll(selector)` function to find all the HTML elements with the attribute `class="hero-slide"`.

Assign it to a constant `heroSlides`.

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

Change a function `changeHero()` and pass in the parameter `direction`.

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

