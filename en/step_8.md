## Create a hero image slider

In this step you will create an interactive hero image slider for your webpage. 

The user can use buttons to move to the next or previous hero image.

<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/comic-character-complete" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

You have been provided with the HTML and CSS styling.

Here is the HTML:

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 28
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

**Lines 31, 32 and 33:** 
+ The `<span>` elements containing the Hero images.
  + They all have the same attribute: `class="hero-slide"`
+ The `active` class is used to show a particular image.

**Lines 35 and 36:** 
+ Buttons used to navigate left `<` and right `>`.
+ The JavaScript function `changeHero()` is used as event handler for button presses.
  + When the `<` button is clicked, the `changeHero()` function is called with the argument `-1`
  + When the `>` button is clicked, the `changeHero()` function is called with the argument `+1`

### Find all the images

You have used `querySelector()` in previous steps to find the first element that matches the specified CSS selector.

You can use `querySelectorAll()` to find and return a list of **all** `<span>` elements.

--- task ---

Open `script.js`.

Find the comment `// Change Hero function`

Use `querySelectorAll()` to return a list of all elements with the attribute `class="hero-slide"`.

Assign the list to a constant `heroSlides`.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 75
line_highlights: 76
---

// Change Hero function
const heroSlides = document.querySelectorAll('.hero-slide');
  
--- /code ---

--- /task ---

### Track active hero image

The first element in the returned list in `heroSlides` is at index 0.

     ___________   ___________   ___________  
    | Element 1 | | Element 2 | | Element 3 |
     ‾‾‾‾‾‾‾‾‾‾‾   ‾‾‾‾‾‾‾‾‾‾    ‾‾‾‾‾‾‾‾‾‾‾
    |  Index 0  | |  Index 1  | |  Index 2  |


It will be the first active image in the slider.

--- task ---

Create the variable `currentHeroIndex` and assign it the value `0`.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 75
line_highlights: 77
---

// Change Hero function
const heroSlides = document.querySelectorAll('.hero-slide');
var currentHeroIndex = 0;
  
--- /code ---

--- /task ---

### Create the changeHero() function

The `changeHero()` function is called when the user moves to the next or previous image. 

--- task ---

Find the comment `// Change Hero function`

Create a function `changeHero()` with the parameter `direction`.

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
A <span style="color: #0faeb0">**parameter**</span> acts as a placeholder for a value used by the function.
</p>

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 75
line_highlights: 79-81
---

// Change Hero function
const heroSlides = document.querySelectorAll('.hero-slide');
var currentHeroIndex = 0;

function changeHero(direction) {
  
}

--- /code ---

--- /task ---

### Remove the active image

The `changeHero()` function needs to update the current image. 

First, it removes the `active` class from the current `<span>` element.

--- task ---

Remove the `active` class from the element at the currentHeroIndex in the `heroSlides` list.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 75
line_highlights: 81
---

// Change Hero function
const heroSlides = document.querySelectorAll('.hero-slide');
var currentHeroIndex = 0;

function changeHero(direction) {
  
  heroSlides[currentHeroIndex].classList.remove("active");

}

--- /code ---

--- /task ---

### Update the current index

The function changes the `currentHeroIndex`

It adds `1` or subtracts `1`, depending on the `direction` value passed to the function.

  + When the `<` button is clicked, the `changeHero()` function is called with the argument `-1`
  + When the `>` button is clicked, the `changeHero()` function is called with the argument `+1`

--- task ---

Update the value of `currentHeroIndex`

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 75
line_highlights: 82
---

// Change Hero function
const heroSlides = document.querySelectorAll('.hero-slide');
var currentHeroIndex = 0;

function changeHero(direction) {

  heroSlides[currentHeroIndex].classList.remove("active");
  currentHeroIndex = currentHeroIndex + direction;

}

--- /code ---

--- /task ---

### Dealing with ‘out of range’

There are three elements in the `heroSlides` list. 

They are at indexes `0`, `1` and `2`.

If the value of the variable `currentHeroIndex` is `2`, then calling `changeHero(+1)` will change `currentHeroIndex` to `3`.

🚨 But there is no index `3` 🚨

If the value of the variable `currentHeroIndex` is `0`, then calling `changeHero(-1)` will change `currentHeroIndex` to `-1`.

🚨 But there is no index `-1` 🚨

You need a way to handle these 'out of range' issues!

Here is how: 
+ if the value of `currentHeroIndex` is less than `0`, set it to the last index in the list (`2`);
+ if the value of `currentHeroIndex` is greater `2`, set it to `0`;

--- task ---

Use an `if` statement with an `else if` statement to handle the out of range issues.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 75
line_highlights: 84-88
---

// Change Hero function
const heroSlides = document.querySelectorAll('.hero-slide');
var currentHeroIndex = 0;

function changeHero(direction) {

  heroSlides[currentHeroIndex].classList.remove("active");
  currentHeroIndex = currentHeroIndex + direction;

  if (currentHeroIndex < 0){
    currentHeroIndex = 2;
  } else if (currentHeroIndex > 2) {
    currentHeroIndex = 0;
  }

}

--- /code ---

--- /task ---

### Set the new active image

You need to make the element at the current index active.

--- task ---

Add the `active` class to the element at the current index.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 75
line_highlights: 90
---

// Change Hero function
const heroSlides = document.querySelectorAll('.hero-slide');
var currentHeroIndex = 0;

function changeHero(direction) {

  heroSlides[currentHeroIndex].classList.remove("active");
  currentHeroIndex = currentHeroIndex + direction;

  if (currentHeroIndex < 0){
    currentHeroIndex = 2;
  } else if (currentHeroIndex > 2) {
    currentHeroIndex = 0;
  }

  heroSlides[currentHeroIndex].classList.add("active");

}
  
--- /code ---

--- /task ---

--- task ---

Open `index.html`.

**Click Run** 
+ Click the left (<) button on your hero image slider, the image should change.
+ Click the right (>) button on your hero image slider, the image should change.

--- /task ---

--- collapse ---

---
title: The buttons do not work properly
---

+ Make sure you have used the 'less than' `<` symbol or the 'greater than' `>` symbol in the correct places.

--- /collapse ---

Fantastic effort! 

You have created an interactive website so the user can create their own superhero character. You have checked user entry and allowed the user to choose a theme for the website. 

Check your understanding of the project using the reflection quiz on the next step.