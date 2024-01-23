## Create hero image slider


Create an interactive hero slider for your webpage, so users can navigate through different hero images with next and previous buttons.
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

You will add more images to the hero section and make it interactive using javascript.

--- collapse ---

---
title: How does Javascript make websites interactive?
---

Javascript is a powerful language that provides tools to allow developers create interactive websites by controlling the webpage content and behaviour. In this project we will focus on the following tools:
+ DOM Manipulation
+ Event Handling
+ User input validation
+ Animations & Transitions
+ Local storage


--- /collapse ---

--- task ---

Open index.html.

Find the <main> tag. Inside the div with the class `hero-slider`, add two more slides, each containing an image of a superhero. 

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

--- /code ---

--- /task ---

Notice that the classes to style the slider have already been provided.

Include nav buttons (prev and next) to allow users to navigate through the hero slides.

--- task ---

Add the classes for the buttons inside the `hero-container`.

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
            <span class="hero-slide"><img src="stacey_hero.jpg" alt="A female superhero character with blonde hair, wearing a blue costume and red cape, in front of a blue and yellow background"> </span>
            <span class="hero-slide"><img src="safina_hero.jpg" alt="A male superhero character with black hair, wearing a red and white costume and red cape in front of a blue and yellow background"> </span>
            <span class="hero-slide"><img src="layton_hero.jpg" alt="A male superhero character with blonde hair, wearing a blue costume and red cape, in front of a blue background"> </span>
          </div>
          <button class="hero-nav-btn prev" onclick="prevHero()">❮</button>
          <button class="hero-nav-btn next" onclick="nextHero()">❯</button>
        </section>

--- /code ---

--- /task ---

### Control the Nav buttons

--- task ---



--- code ---
---
language: js
filename: index.html
line_numbers: true
line_number_start: 2
line_highlights: 2
---
      let currentHeroIndex = 0;
      
--- /code ---

--- /task ---

--- task ---



--- code ---
---
language: js
filename: index.html
line_numbers: true
line_number_start: 2
line_highlights: 3
---
      let currentHeroIndex = 0;
      const totalHeroSlides = document.querySelectorAll('.hero-slide').length;
      
--- /code ---

--- /task ---

--- task ---



--- code ---
---
language: js
filename: index.html
line_numbers: true
line_number_start: 5
line_highlights: 5-8
---
      function nextHero() {
    

      }
      
--- /code ---

--- /task ---

--- task ---



--- code ---
---
language: js
filename: index.html
line_numbers: true
line_number_start: 5
line_highlights: 6-7
---
      function nextHero() {
        currentHeroIndex = (currentHeroIndex + 1) % totalHeroSlides;
        
      }
      
--- /code ---

--- /task ---

--- task ---



--- code ---
---
language: js
filename: index.html
line_numbers: true
line_number_start: 5
line_highlights: 6-7
---
      function nextHero() {
        currentHeroIndex = (currentHeroIndex + 1) % totalHeroSlides;
        updateHeroSlider();
      }
      
--- /code ---

--- /task ---

--- task ---



--- code ---
---
language: js
filename: index.html
line_numbers: true
line_number_start: 5
line_highlights: 6-7
---
      function nextHero() {
        currentHeroIndex = (currentHeroIndex + 1) % totalHeroSlides;
        updateHeroSlider();
      }
      
--- /code ---

--- /task ---

--- task ---



--- code ---
---
language: js
filename: index.html
line_numbers: true
line_number_start: 9
line_highlights: 10-13
---
      // Place Hero slider previous button function here 
      function prevHero() {
        currentHeroIndex = (currentHeroIndex - 1 + totalHeroSlides) % totalHeroSlides;
        updateHeroSlider();
      }
      
--- /code ---

--- /task ---

--- task ---



--- code ---
---
language: js
filename: index.html
line_numbers: true
line_number_start: 15
line_highlights: 15-19
---
      function updateHeroSlider() {
       


      }
      
--- /code ---

--- /task ---

--- task ---



--- code ---
---
language: js
filename: index.html
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



--- code ---
---
language: js
filename: index.html
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



--- code ---
---
language: js
filename: index.html
line_numbers: true
line_number_start: 15
line_highlights: 17
---
      function updateHeroSlider() {
        const heroSlider = document.querySelector('.hero-slider');
        const heroSlideWidth = document.querySelector('.hero-slide').offsetWidth;
        heroSlider.style.transform = `translateX(${-currentHeroIndex * heroSlideWidth}px)`;
      }
      
--- /code ---

--- /task ---
