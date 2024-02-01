## Create hero image slider

In this step you will reate an interactive hero slider for your webpage. Users can navigate through different hero images using buttons on the slider.
<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/comic-character-step2" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

--- task ---

Open the [Comic Character starter project](https://staging-editor.raspberrypi.org/en/projects/comic-character-starter).

--- /task ---

Your starter project contains:
+ two HTML pages with some content
+ a CSS file that contains styling for some of the content
+ the images you will use in the project
+ a JavaScript file to make your website interactive and engaging

### Add more images to the hero image container

This project already contains a navbar and a hero image. 

You will add more images to the hero section to create a series of slides.

Each slide will contain a different superhero image and you will make it interactive using JavaScript.

--- collapse ---

---
title: How does JavaScript make websites interactive?
---

JavaScript is a powerful language that provides tools to allow developers create interactive websites by controlling the webpage content and behaviour. In this project we will focus on the following tools:
+ DOM Manipulation
+ Event Handling
+ User input validation
+ Animations & Transitions
+ Local storage


--- /collapse ---

--- task ---

Open the index.html file.

Find the `<main>` tag.

Add two more `<span>` elements, each containing `<img>` tags inside the `<div>`tags with the class attribute `hero-slider`. 

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 20
line_highlights: 24-25
---

      <main>
        <section class="hero-container">
          <div class="hero-slider">
            <span class="hero-slide"><img src="stacey_hero.jpg" alt="A female superhero character with blonde hair, wearing a blue costume and red cape, in front of a blue and yellow background"> </span>
            <span class="hero-slide"><img src="safina_hero.jpg" alt="A male superhero character with black hair, wearing a red and white costume and red cape in front of a blue and yellow background"> </span>
            <span class="hero-slide"><img src="layton_hero.jpg" alt="A male superhero character with blonde hair, wearing a blue costume and red cape, in front of a blue background"> </span>
          </div>
        </section>

--- /code ---

--- /task ---

Notice that the class selectors to style the slider have already been provided.

To navigate through the slides, add nav buttons inside the `hero-container` section.

--- task ---

Add `<button>` elements below the `hero-container`. One for the previous slide and one for the next slide.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 20
line_highlights: 27-28
---

      <main>
        <section class="hero-container">
          <div class="hero-slider">
            <span class="hero-slide"><img src="stacey-hero.jpg" alt="A female superhero character with blonde hair, wearing a blue costume and red cape, in front of a blue and yellow background"> </span>
            <span class="hero-slide"><img src="safina-hero.jpg" alt="A male superhero character with black hair, wearing a red and white costume and red cape in front of a blue and yellow background"> </span>
            <span class="hero-slide"><img src="layton-hero.jpg" alt="A male superhero character with blonde hair, wearing a blue costume and red cape, in front of a blue background"> </span>
          </div>
          <button class="hero-nav-btn prev">❮</button>
          <button class="hero-nav-btn next">❯</button>
        </section>

--- /code ---

**Click the Run button** to see your changes.

The buttons will show on your hero slide but there will be no functionality when you click them.

**TODO** Create image to show prev and next buttons showing on the slider.

--- /task ---

**Debug step:** 
+ Check that your classes have `"` marks around them.
+ Check that your img src attribute contains the correct file names.

### Control the Slider buttons

You will use JavaScript to control the nav buttons to switch between slides.

**TODO** Add explanation about how the slide works

--- task ---

Open the `script.js`file.

Create a variable to store and keep track of the current slide index.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 2
line_highlights: 2
---
      let currentHeroIndex = 0;
      
--- /code ---

--- /task ---

--- collapse ---

---
title: What is a variable and what is index?
---

A variable in programming is a named storage that holds a value. The value can be changed when the program runs.
For example, `let age = 30;` `age` is the variable storing the value `30`

An index in programming is the position of an element within a list(array). 
Usually indexing starts at 0; 
For example when given a list `["Fruits", "Clothes", "Toys"]`, "Fruits" is at index 0.

--- /collapse ---

You will need to define the length of the total number of slides using the Document Object Model (DOM).

The DOM uses a method called querySelectorAll which can find all the CSS selectors of an element.

--- collapse ---

---
title: What does the Doccument Object Model do exactly?
---



--- /collapse ---


--- task ---

Add a constant to store the length of the total slides in the list of slides.

--- collapse ---

---
title: What is a constant?
---



--- /collapse ---

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 2
line_highlights: 3
---
      let currentHeroIndex = 0;
      const totalHeroSlides = document.querySelectorAll('.hero-slide').length;
      
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
      // Place Hero slider previous button function here 
      function nextHero() {
    

      }
      
--- /code ---

--- /task ---

--- collapse ---

---
title: What is a function and how are they used in JavaScript?
---



--- /collapse ---


--- task ---

Update the next slide index by counting up by 1 (+1).

You also have to check if there are any remaining slides to show, using the modulus operator.

If there are no remainder slides, the `currentHeroIndex`will be set back to 0.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 4
line_highlights: 6-7
---
      // Place Hero slider previous button function here 
      function nextHero() {
        currentHeroIndex = (currentHeroIndex + 1) % totalHeroSlides;
        
      }
      
--- /code ---

--- /task ---

--- collapse ---

---
title: Using operators in JavaScript
---



--- /collapse ---


--- task ---

Add another function `updateHero`slider inside the `nextHero` function. You will create this function later.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 5
line_highlights: 8
---
      // Place Hero slider previous button function here 
      function nextHero() {
        currentHeroIndex = (currentHeroIndex + 1) % totalHeroSlides;
        
      }
      
--- /code ---

--- /task ---

--- task ---

Create another function `prevHero` to control the `<` nav button.

This will allow users go back to the previous slide.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 9
line_highlights: 10-13
---
      // Place Hero slider previous button function here 
      function prevHero() {
        

      }
      
--- /code ---

--- /task ---

--- task ---

Calculate the preious index by counting down by 1 (-1).

You will also ensure the index never falls below zero by adding the total number of slides.

Once again, use the modulus operator to check if there are remainder slides to show, loop back to 0 if there are no remainder slides to show.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 9
line_highlights: 11-12
---
      // Place Hero slider previous button function here 
      function prevHero() {
        currentHeroIndex = (currentHeroIndex - 1 + totalHeroSlides) % totalHeroSlides;
        
      }
      
--- /code ---

--- /task ---


--- task ---

Create another function `updateHeroSlider` which .

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 14
line_highlights: 15-19
---
      // Place Update Slider function here 
      function updateHeroSlider() {
       


      }
      
--- /code ---

--- /task ---

--- task ---

Add a DOM method to return the `hero-slider` class using the querySelector.

Save the method call into a constant.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 15
line_highlights: 16
---
      function updateHeroSlider() {
        const heroSlider = document.querySelector('.hero-slider');


      }
      
--- /code ---

--- /task ---

--- task ---

Calcuilate the width of a single slide using the `offsetWidth` property.

This will return the viewable width of the slider element.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 15
line_highlights: 17
---
      function updateHeroSlider() {
        const heroSlider = document.querySelector('.hero-slider');
        const heroSlideWidth = document.querySelector('.hero-slide').offsetWidth;

      }
      
--- /code ---

--- /task ---

--- task ---

Use the CSS transform property to move the `heroSlider` element so it is shown horizontally on the screen.

The `translateX` function will also check the index of the current image and multiply it by the current slide width.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 15
line_highlights: 18
---
      function updateHeroSlider() {
        const heroSlider = document.querySelector('.hero-slider');
        const heroSlideWidth = document.querySelector('.hero-slide').offsetWidth;
        heroSlider.style.transform = `translateX(${-currentHeroIndex * heroSlideWidth}px)`;
      }
      
--- /code ---

--- /task ---

--- task ---

Add another function `updateHero`slider inside the `nextHero` function. 

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 5
line_highlights: 8
---
      // Place Hero slider previous button function here 
      function nextHero() {
        currentHeroIndex = (currentHeroIndex + 1) % totalHeroSlides;
        updateHeroSlider();
      }
      
--- /code ---

--- /task ---

--- task ---

Calculate the preious index by counting down by 1 (-1).

You will also ensure the index never falls below zero by adding the total number of slides.

Once again, use the modulus operator to check if there are remainder slides to show, loop back to 0 if there are no remainder slides to show.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 9
line_highlights: 11-12
---
      // Place Hero slider previous button function here 
      function prevHero() {
        currentHeroIndex = (currentHeroIndex - 1 + totalHeroSlides) % totalHeroSlides;
        updateHeroSlider();
      }
      
--- /code ---

--- /task ---

--- task ---

Add the `onclick` attribute to the `<button>` element with the attribute `class="hero-nav-btn prev"`.

Also add the `onclick` attribute to the `<button>` element with the attribute `class="hero-nav-btn next"`

This will trigger an action calling the `prevHero` and `nextHero` functions when you click either button.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 20
line_highlights: 27-28
---

      <main>
        <section class="hero-container">
          <div class="hero-slider">
            <span class="hero-slide"><img src="stacey-hero.jpg" alt="A female superhero character with blonde hair, wearing a blue costume and red cape, in front of a blue and yellow background"> </span>
            <span class="hero-slide"><img src="safina-hero.jpg" alt="A male superhero character with black hair, wearing a red and white costume and red cape in front of a blue and yellow background"> </span>
            <span class="hero-slide"><img src="layton-hero.jpg" alt="A male superhero character with blonde hair, wearing a blue costume and red cape, in front of a blue background"> </span>
          </div>
          <button class="hero-nav-btn prev" onclick="prevHero()">❮</button>
          <button class="hero-nav-btn next" onclick="nextHero()">❯</button>
        </section>

--- /code ---

**Click the Run button** to see your changes.

The buttons will show on your hero slide but there will be no functionality when you click them.

**TODO** Create image to show prev and next buttons showing 

--- /task ---

--- task ---

Open `index.html`.

Add the **javascript** file to your page. 

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 
line_highlights: 
---
    <script type="text/javascript" src="script.js"></script>
  </body>
</html>

--- /code ---


**Click the Run button** to see your changes.

**TODO** Create Debug Step

--- /task ---

Great job! You have added a hero slider to your index page.

Next, you will design an interactive webpage where users can create their own superhero.
