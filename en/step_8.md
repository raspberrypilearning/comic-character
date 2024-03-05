## Create a hero image slider

In this step you will create an interactive hero image slider for your web page. Users can navigate through different hero images using buttons on the slider.
<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/comic-character-complete" width="100%" height="400" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### View the slider code

--- task ---

Open `index.html`.

You have been provided the code with all the HTML elements to create a hero image slider.

You have also been provided buttons to navigate to the left (<) and to the right (>) of the slider.

There is a `<span>` element with the attribute `class="hero-slide active"`. You have used the `active` class in the previous project to specify that a particlar link was selected.

The same idea will be used for the slider, where `active` class will show that a particular image is selected.

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

**Test:** Click the **Run** button to see your changes. 
+ There will be a hero image with left and right arrows (buttons) through the images .
+ Click both buttons. What do you expect to happen?

--- /task ---

There is currently no function written as an event handler for the `<button>` elements. Therefore, the buttons will not work.

### Create the slider variables

You have previously used the `querySelector()` function to search and return the first element in your web page that matches a specified CSS selector.

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
line_number_start: 80
line_highlights: 81
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
line_number_start: 80
line_highlights: 82
---

// Place Hero slider variables here 
let currentHeroIndex = 0;
const heroSlides = document.querySelectorAll('.hero-slide');
  
--- /code ---

--- /task ---

--- task ---

Create a function `changeHero()` and pass in the parameter `direction`.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 80
line_highlights: 85-87
---

// Place Hero slider variables here 
let currentHeroIndex = 0;
const heroSlides = document.querySelectorAll('.hero-slide');

// Change Hero function
function changeHero(direction) {
  
}

  
--- /code ---

A parameter acts as a placeholder for a value that you will pass when the function is called.

--- /task ---

Currently, `heroSlides` is holding the values of the three HTML elements with the attrbiutes `class="hero-slide"`.

One of the elements has the `active` class as an attribute when it is the image showing on the slider.
You want to update this each time a user clicks the left (<) or right (>) button.

You can create an array using `heroSlides` and the variable `currentHeroIndex` holds the index of the currently active slide.

An array is like a variable but it can hold more than one value; in this case you wnat it to hold three values (each HTML element)

--- collapse ---

---
title: How do arrays work? and what is index
---

An array is a special type of storage in memory that allows you to hold and organise multiple values in a single variable. Unlike regular variables that hold only one value, an array can hold multiple values, and these values can be of different types.

Arrays are created using square brackets [] and can contain various types of data, such as numbers, strings, objects, or even other arrays. 

Each value in the array is called an element, and each element has a unique index that represents its position in the array. The index starts from 0 for the first element, 1 for the second element, and so on.
For example when given a list `["Fruits", "Clothes", "Toys"]`, "Fruits" is at index 0.

Here are a few examples of arrays:

--- code ---
---
language: js
filename: script.js
line_numbers: true

---

    // Creating an array of numbers
    var myArray = [1, 2, 3, 4, 5];

    // Creating an array of strings
    var fruits = ["apple", "banana", "orange"];

    // Creating an array of mixed types
    var mixedArray = [1, "hello", true, { key: "value" }];

    // Accessing elements in an array
    console.log(myArray[0]); // Outputs 1
    console.log(fruits[1]);  // Outputs "banana"

    // Changing elements in an array
    myArray[2] = 10;         // Changes the third element to 10

    // Finding the length of an array
    var arrayLength = myArray.length; // Returns 5

--- /code ---

--- /collapse ---

--- task ---

Use `heroSlides` as an array to hold the current `active` class index `currentHeroIndex`.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 80
line_highlights: 87
---

// Place Hero slider variables here 
let currentHeroIndex = 0;
const heroSlides = document.querySelectorAll('.hero-slide');

// Change Hero function
function changeHero(direction) {
    //Turn the current slide off
    heroSlides[currentHeroIndex]

}

  
--- /code ---

Note when you created `currentHeroIndex`, you set it to hold the value `0`; 

--- /task ---

You want to update the class of the HTML element so you can do this by using the `classList` property.

--- task ---

Use the `remove()` function from the `classList` property to take the `active` class off the current HTML element. 

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 80
line_highlights: 87
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

You will now update the `currentHeroIndex` based on the direction parameter passed to the function.

This could either be +1 to find the next slide, or -1 to find the previous slide.

--- task ---

Update the `currentHeroIndex` by holding its' current position + the direction.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 80
line_highlights: 90
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

You will now check two conditions so there is always an image showing on the slider even if you click the left(<) or right(>) direction endlessly.

+ if the `currentHeroIndex` is less than 0, the program will check the length of `heroSlides` and set the position to the last slide;
+ else if `currentHeroIndex` moves past the last slide, the index will be set back to 0;

The `.length` property returns the size of an array.

--- task ---

Use an `if-else` statement and the `.length` property to check if the conditions are true or false;

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 80
line_highlights: 93-97
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

Once a new element is visible on the slide, you want to set that element as `active`.

You can do this using the `classList` property which you have used previously.

--- task ---

Update the `active` class using the `.add()` function from the `classList` property.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 80
line_highlights: 100
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

**Test:** Click the **Run** button to see your changes. 
+ Click the left (<) button on your hero image slider, the image should change.
+ Click the right (>) button on your hero image slider, the image should change.

--- /task ---

**Debug step on script.js:**
+ Ensure you have used square brackets`[]` when creating your array assignment.
+ Ensure you have added the `.length` property to your `if-else` statement.
+ Ensure you have used -1 inside your `if-else` statement.


Fantastic effort! You have created an interactive website where the user can create their own superhero character. You have checkd user entry and allowed the user to choose a theme for the website. 

Check your understanding of the project using the reflection quiz on the next step.

