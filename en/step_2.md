## Add Copyright message to footer

In this step, you will create a Copyright message and a function to automatically update the current year. You will add this to your footer section.
<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/comic-character-step2" width="100%" height="400" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
<span style="color: #0faeb0">**Copyright**</span> is a law that stops people from using someone else's work without their permission. It is a legal consideration when building apps on the web or for other devices because of the content used. This includes images, videos, music and other ideas.
</p>

In modern web design, websites include a footer section, displaying a Copyright message. The Copyright message consists of the following:
+ a Copyright symbol Ⓒ
+ the name of the owner of the website
+ the current year in which the user is viewing the website

--- task ---

Open the [Comic Character starter project](https://staging-editor.raspberrypi.org/en/projects/comic-character-starter){:target="_blank"}.

--- /task ---

Your starter project contains:
+ two HTML pages with some content
+ a CSS file that contains styling for some of the content
+ the images you will use in the project
+ a JavaScript file to make your website interactive and engaging

### Add content to your footer section

This project already contains a navbar and a hero image which you learnt how to create in Welcome to Antarctica. 

The **JavaScript** file you will use has already been linked to your webpages just before the closing `</body>` tag.

The **CSS** file you will use has also been linked to your webpages.

--- task ---

Open the `index.html` file.

Find the `footer` element.

Add a `<p>` element containing the Copyright message crea†ed for you. 

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 29
line_highlights: 30
---

      <footer class="footer">
        <p> Ⓒ Malik Johnson- All Rights Reserved</p>
      </footer>

--- /code ---

You can change the fictional name `Malik Johnson` to a name of your choice.

--- /task ---

--- task ---

Add a `<span>` element with the attribute `id="currentYear"` between the Ⓒ symbol and the name.

The `id` attribute is used to specify a unique id for a HTML element.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 29
line_highlights: 30
---

      <footer class="footer">
        <p> Ⓒ <span id="currentYear"></span> Malik Johnson- All Rights Reserved</p>
      </footer>

--- /code ---

--- /task ---

**Test:** Click the **Run** button to see the changes you have made.

### Update the current year

There is currently no text written between the `<span>` elements. This will be used to display the current year using a JavaScript function.

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
<span style="color: #0faeb0">**JavaScript(JS)**</span> is the programming language of the web and is used to make websites dynamic and interactive. It is the third most popular programming language in the world and without it, websites would be static and boring.
</p>

--- collapse ---

---
title: How does JavaScript make websites interactive?
---

JavaScript is a powerful language that provides tools to allow developers create interactive websites, by controlling the webpage content and behaviour. 
JavaScript can be used to change HTML content, change HTML attribute values, change HTML styles, show/hide HTML elements, and more.

In this project we will focus on the following tools:
+ DOM Manipulation
+ Event Handling
+ User input validation
+ Animations & Transitions
+ Local storage

--- /collapse ---

JavaScript provides a Date function using the syntax `new Date()`.

This function lets you work with dates automatically. JavaScript will use the browser's time zone and return the current date and time. For example:

`Mon Feb 19 2024 16:15:20 GMT+0000 (Greenwich Mean Time)`

--- task ---

Open `script.js`.

Create a variable `currentYear` to store the `new Date()` as a value.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 1
line_highlights: 2
---
     
     // Update Copyright Year function 
     var currentYear = new Date();
    
--- /code ---

--- /task ---

The `new Date()` function is typically stored in a **constant** but you will learn about these later.

--- collapse ---

---
title: What is a variable?
---

A variable in programming is a named area of memory that holds a value. The value can be changed when the program runs.
For example, `var age = 30;` `age` is the variable storing the value `30`

--- /collapse ---

JavaScript can be used to change HTML elements. You want to update the current year and show the text inside the `<span>` elements you created earlier.

To access the `<span>` element, you will use the Document Object Model which represents your webpage. 

With the DOM (Document Object Model), JavaScript can find and change all the elements of a HTML document.

You can use the function `querySelector()` for this. `querySelector()` returns the First element in your webpage that match a specified CSS selector.

--- collapse ---

---
title: What does the Document Object Model do exactly?
---

The Document Object Model (DOM) is a programming interface for web documents. It serves as a bridge between web documents and programming languages (such as JavaScript).This provides a way to interact with and manipulate the content and structure of a webpage dynamically.


The DOM allows developers to interact using the following methods:


+ Dynamic Interaction:
It allows dynamic interaction with the webpage. Using languages e.g. JavaScript, developers can access, modify, or manipulate the content and structure of the page.


+ Event Handling:
The DOM enables the handling of user actions or events, such as clicks or keyboard inputs. Developers can link event listeners to specific elements and run custom code in response to these events.


+ Content Manipulation:
Developers can add, delete, or modify elements and content on the page dynamically. This is commonly used to update the page without requiring a full page reload.

--- /collapse ---

--- task ---

Use the `querySelector()` to find the element with the id attribute `currentYear`.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 1
line_highlights: 3
---
     // Update Copyright Year function 
     var currentYear = new Date();
     document.querySelector("#currentYear")
    
--- /code ---

Note that you have placed the id `#currentYear` within the `querySelector()` because this is the attribute given to the `<span>` you are trying to change.

--- /task ---

--- task ---

Change the content of the `<span>` element (which is currently blank) using `innerHTML`.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 1
line_highlights: 3
---
     // Update Copyright Year function 
     var currentYear = new Date();
     document.querySelector("#currentYear").innerHTML
    
--- /code ---

The `currentYear` variable is storing the `new Date()` function as a value.

You will need to place `currentYear` inside the `<span>` element once it has been found using its id attribute.

--- /task ---

--- task ---

Use an `=` operator to use the HTML element as a container for your `new Date` function.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 1
line_highlights: 3
---
     // Update Copyright Year function 
     var currentYear = new Date();
     document.querySelector("#currentYear").innerHTML =
    
--- /code ---


--- /task ---

The Date function provides instructions to access certain properties. 

You can do this using the `get` keyword.

--- task ---

Use a `get` function to access and show only the full current year from the `new Date()` function.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 1
line_highlights: 3
---
     // Update Copyright Year function 
     var currentYear = new Date();
     document.querySelector("#currentYear").innerHTML = currentYear.getFullYear();
    
--- /code ---

This is because you only want to show the year in your HTML element e.g. `2035` and not the entire day, month and year.

--- /task ---

--- task ---

Open `index.html` 

**Test:** Click the **Run** button. 

You should see the current year displayed along with your Copyright message.

Copy (CTRL + C) or (CMD + C) the `<p>` element within the footer.
You will need it for your next task.

--- /task ---

--- task ---

Open the `comicbook.html` file.

Find the `footer` element.

Paste (CTRL + V) or (CMD + V) the `<p>` element you copied earlier.

--- code ---
---
language: html
filename: comicbook.html
line_numbers: true
line_number_start: 29
line_highlights: 30
---

      <footer class="footer">
        <p> Ⓒ Malik Johnson- All Rights Reserved</p>
      </footer>

--- /code ---

You can change the fictional name `Malik Johnson` to a name of your choice.

--- /task ---

You can explore other `Date` functions JavaScript provides when creating other projects.

--- collapse ---

---
title: What other `Date` functions can I use?
---



--- /collapse ---

--- collapse ---

---
title: What are DOM Methods?
---

DOM (Document Object Model) methods are a set of tools used to manipulate the content, style and structure of web documents dynamically using JavaScript.These methods enable developers to manipulate a document while the code is running. 

Here are some common DOM methods:

+ getElementById(id): retrieves an element by its id attribute.
    var element = document.getElementById("myElement");

+ getElementsByClassName(className): Returns a live HTML Collection of elements with the given class name.
    var elements = document.getElementsByClassName("myClass");

+ getElementsByTagName(tagName): Returns a live HTML Collection of elements with the given tag name.
    var paragraphs = document.getElementsByTagName("p");

+ querySelector(selector): Returns the first element that matches the specified CSS selector.
    var element = document.querySelector(".myClass");

+ querySelectorAll(selector): Returns a NodeList of all elements that match the specified CSS selector.
    var elements = document.querySelectorAll("p.myClass");

+ addEventListener(event, callback): Attaches an event listener to an element.
    element.addEventListener("click", function() {
        console.log("Element clicked!");
    });

+ createElement(tagName): Creates a new HTML element with the specified tag name.
    var newDiv = document.createElement("div");

+ appendChild(node): Appends a node as the last child of a parent node.
    parentElement.appendChild(childElement);

+ removeChild(node): Removes a child node from its parent.
    parentElement.removeChild(childElement);

+ setAttribute(attribute, value): Sets the value of an attribute on the specified element.
    element.setAttribute("class", "newClass");

+ getAttribute(attribute): Retrieves the value of the specified attribute on the element.
    var classValue = element.getAttribute("class");

--- /collapse ---


Great job! You have used added dynamic footer content to your website.

Next, you will design an interactive webpage where users can create their own superhero.
