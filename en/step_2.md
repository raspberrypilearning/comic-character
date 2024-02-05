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

A slider is a slideshow which allows you to display multiple pictures within one frame. 

This can be done automatically or using buttons to control it.

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
+ Check that the classes `.hero-slider` and `.hero-slide` exist in the correct elements provided.

### Create the function variables

You will use JavaScript to control the nav buttons to switch between slides.

--- task ---

Open the `script.js`file.

Create a variable to store and keep track of the current slide index.

Set the value to 0.

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

The `let` keyword is used to declare a variable which can only be used within the code block for the hero slider.

--- collapse ---

---
title: What is a variable 
---

A variable in programming is a named storage that holds a value. The value can be changed when the program runs.
For example, `let age = 30;` `age` is the variable storing the value `30`

--- /collapse ---

--- collapse ---

---
title: What is index?
---

An index in programming is the position of an element within a list(array). 
Usually indexing starts at 0; 
For example when given a list `["Fruits", "Clothes", "Toys"]`, "Fruits" is at index 0.

--- /collapse ---

You will need to define the length of the total number of slides using the Document Object Model (DOM).

The DOM uses a method called querySelectorAll which can find and return all elements in a document that match a specified CSS selector.

--- collapse ---

---
title: What does the Document Object Model do exactly?
---

The Document Object Model (DOM) is a programming interface for web documents. It serves as a bridge between web documents and programming languages (such as JavaScript).This provides a way to interact with and manipulate the content and structure of a web page dynamically.

The DOM allows developers to interact using the following methods:

+ Dynamic Interaction:
It allows dynamic interaction with the web page. Using languages e.g. JavaScript, developers can access, modify, or manipulate the content and structure of the page.

+ Event Handling:
The DOM enables the handling of user actions or events, such as clicks or keyboard inputs. Developers can link event listeners to specific elements and run custom code in response to these events.

+ Content Manipulation:
Developers can add, delete, or modify elements and content on the page dynamically. This is commonly used to update the page without requiring a full page reload.

+ Data Exchange:
It facilitates the exchange of data between the web page and the server. 

--- /collapse ---


--- task ---

Add a constant to store the length of the total slides in the list of slides.

A constant is a variable that can't change; once set, its value stays the same.

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

### Update the current slider

--- task ---

Create another function `updateHeroSlider()` which updates a slider's position based on the current hero index, making it slide to a specific position. .

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

### Control the Next slider button

--- task ---

Create a function `nextHero()` which will define what happens when users click the `>` button.

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

In JavaScript, a function is a reusable block of code that performs a specific task. It helps keep your code organized and efficient.

Writing a Function:

--- code ---
---
language: js
filename: 
line_numbers: true
line_number_start: 
line_highlights: 
---
        function addNumbers(a, b) {
            return a + b;
        }
      
--- /code ---

Here, addNumbers is a function that takes two inputs (a and b) and returns their sum.

Using a Function:

--- code ---
---
language: js
filename: 
line_numbers: true
line_number_start: 
line_highlights: 
---
        let result = addNumbers(5, 8);
        console.log(result); // Outputs: 13
      
--- /code ---

You call the function addNumbers with values 5 and 8, and it gives back the sum, which you can then use or display.

Functions make your code modular and easier to understand, especially when you have tasks that need to be done multiple times. They're like tools you can use over and over in different parts of your code.

--- /collapse ---

--- collapse ---

---
title: How do you write a simple function?
---

When writing functions, you can follow these steps so your syntax is correct.

1. Function Keyword: start with the function keyword to tell JavaScript that you're creating a function.

2. Function Name: give your function a name so you can refer to it later. For example, let's name our function sayHello.

--- code ---
---
language: js
filename: 
line_numbers: true
line_number_start: 
line_highlights: 
---
      function sayHello

--- /code ---
      

3. Parameters: put parentheses () after the function name. Inside these parentheses, you can list parameters (inputs) that your function needs. Parameters are like placeholders for values you'll provide when using the function.

--- code ---
---
language: js
filename: 
line_numbers: true
line_number_start: 
line_highlights: 
---
      function sayHello()

--- /code ---

4. Curly Braces: open curly braces { to define the block of code that the function will execute. This is where you write the instructions for your function.
      function sayHello() {

5. Function Body: inside the curly braces, write the code that your function will run. For example, let's make our function print "Hello, World!" to the console.
      
--- code ---
---
language: js
filename: 
line_numbers: true
line_number_start: 
line_highlights: 
---
        function sayHello() {
          console.log("Hello, World!");

--- /code ---
      
       

6. Closing Curly Brace: close the curly braces } to indicate the end of the function.

--- code ---
---
language: js
filename: 
line_numbers: true
line_number_start: 
line_highlights: 
---
        function sayHello() {
          console.log("Hello, World!");
        }

--- /code ---
    

Now, you've created a simple function named sayHello. When you call this function, it will execute the code inside the curly braces and print "Hello, World!" to the console.

Using the function:

--- code ---
---
language: js
filename: 
line_numbers: true
line_number_start: 
line_highlights: 
---
        sayHello(); // Outputs: Hello, World!

--- /code ---
      

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
        updateHeroSlider();
      }
      
--- /code ---

--- /task ---

--- collapse ---

---
title: Using operators in JavaScript
---

In JavaScript, operators are like special symbols that help you do different things with numbers, strings, and other types of data.

Arithmetic Operators:

+ `+` adds two numbers.
+ `-` subtracts one number from another.
+ `*` multiplies two numbers.
+ `/` divides one number by another.
+ `%` gives the remainder when one number is divided by another.

Example:

`let result = 10 % 3; `// result will be 1 (remainder of 10 divided by 3)

--- /collapse ---

### Control the Previous slider button


--- task ---

Create another function `prevHero()` to control the `<` nav button.

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

Calculate the previous index by counting down by 1 (-1).

You will also ensure the index never falls below zero by adding the total number of slides.

Use the % (modulus) operator to check if there are remainder slides to show, loop back to 0 if there are no remainder slides to show.

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

Add the function `updateHero`slider inside the `nextHero` function. 

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

Also add the function `updateHero`slider inside the `prevHero` function. 

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

### Link the JavaScript file

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

--- /task ---

--- task ---

Open `index.html`.

Add the **javascript** file to your page just before the closing `</body>` tag. 

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 31
line_highlights: 31
---
    <script type="text/javascript" src="script.js"></script>
  </body>
</html>

--- /code ---


**Click the Run button** to see your changes.
When you click the `<` button on your hero slider, your slider should navigate to the previous hero image.
When you click the `>` button on your hero slider, your slider should navigate to the next hero image.

**Debug step:**
+ Ensure you have created all variables and constants correctly using the right keywords.

+ Ensure you have used the right syntax when creating the functions including `()` and `{}`
+ Ensure that you have used + 1 for the `>` next button logic:
      `(currentHeroIndex + 1) % totalHeroSlides`

+ Ensure that you have used - 1 for the `<` previous button logic:
      `(currentHeroIndex - 1 + totalHeroSlides) % totalHeroSlides`

+ Ensure you have added the `updateHeroSlider()` function inside the `nextHero()` and `prevHero()` functions.

+ Ensure you add the `onclick` trigger method as an attribute to each button element.


--- /task ---

Great job! You have added a hero slider to your index page.

Next, you will design an interactive webpage where users can create their own superhero.
