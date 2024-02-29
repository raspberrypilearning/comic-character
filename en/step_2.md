## Add Copyright message to footer

In this step, you will create a copyright message and a function to automatically update the current year. You will add this to your footer section.

<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/comic-character-step2" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
<span style="color: #0faeb0">**Copyright**</span> is a legal protection that stops people from using someone else's work (e.g. websites, images, music) without their permission.
</p>

In modern web design, websites include a footer section, displaying a copyright message. 

A copyright message usually contains:
+ a copyright symbol Ⓒ
+ the owner of the website
+ the year the content was published

--- task ---

Open the [Comic Character starter project](https://staging-editor.raspberrypi.org/en/projects/comic-character-starter){:target="_blank"}.

--- /task ---

Your starter project contains:
+ two HTML pages with some content
+ a CSS file that contains styling for some of the content
+ the images you will use in the project
+ a JavaScript file to make your website interactive and engaging

### Add content to your footer section

This project already contains a navbar and a hero image, which you learnt how to create in [Welcome to Antarctica](https://projects.raspberrypi.org/en/projects/welcome-to-antarctica). 

The **JavaScript** file you will use has already been linked to your web pages just before the closing `</body>` tag.

The **CSS** file you will use has also been linked to your web pages.

--- task ---

Open the `index.html` file.

Find the `footer` element.

Add a `<p>` element containing the Copyright message. 

(You can change the fictional name `Malik Johnson` to a name of your choice.)

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 29
line_highlights: 30
---

      <footer>
        <p> Ⓒ Malik Johnson- All Rights Reserved</p>
      </footer>

--- /code ---

--- /task ---

--- task ---

Add a `<span>` element with the attribute `id="currentYear"` between the Ⓒ symbol and the name.

The `id` attribute is used to specify a unique identifier for an HTML element.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 29
line_highlights: 30
---

      <footer>
        <p> Ⓒ <span id="currentYear"></span> Malik Johnson- All Rights Reserved</p>
      </footer>

--- /code ---

--- /task ---

**Test:** Click the **Run** button to see your changes.
+ The Copyright message will be shown at the bottom (footer) of your web page.
  
**Notice:** there is no date shown yet.

There is no text inside the `<span>` element. 

JavaScript will be used to update the content of the `<span>` to display the current year.

### Display the current year

JavaScript has a `Date()` function that returns the current date and time, using the browser's time zone.

--- collapse ---

---
title: See an example
---

A call to `Date()` returns a string.

Here is the result of the call to `Date()` when this page was loaded:

<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/comic-character-date" width="100%" height="100" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

--- /collapse ---

--- task ---

Open `script.js`.

Create a constant `currentYear` to hold a new `Date()` object.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 1
line_highlights: 2
---
     
     // Update Copyright Year function 
     const currentYear = new Date();
    
--- /code ---

--- /task ---

--- collapse ---

---
title: What is a constant?
---

A constant is a named data value. 

The value cannot be changed by the program.

--- /collapse ---

The current year will be added to the `<span>` element you created earlier.

JavaScript can be used to find and change HTML elements.

To access the `<span>` element, you will 'select' it, using the Document Object Model method: `querySelector()`. 

--- collapse ---

---
title: What is the Document Object Model?
---

The Document Object Model (DOM) provides a way for JavaScript (and other programming languages) to interact with web page elements.

It represents the structure of a web page (document).

`querySelector()` is a DOM method that returns the first element in your web page that matches a specified CSS selector (e.g. `#currentYear`)

--- /collapse ---

--- task ---

Use the `querySelector()` method to find the element in the web page document with the attribute `id="currentYear"`.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 1
line_highlights: 3
---
     // Update Copyright Year function 
     const currentYear = new Date();
     document.querySelector("#currentYear")
    
--- /code ---

--- /task ---

The querySelector will find the whole `<span>` element. 

You only need to change the text *inside* the element. 

The `.innerText` property can be used to refer to the text content of an HTML element.

--- task ---

Add the `.innerText` property to the querySelector.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 1
line_highlights: 3
---
     // Update Copyright Year function 
     const currentYear = new Date();
     document.querySelector("#currentYear").innerText
    
--- /code ---

--- /task ---

The `currentYear` constant holds the full date returned by the `Date()` function, but you only need the four-digit year part of the date.

You can use the `.getFullYear()` method for this.

--- task ---

Set the text content of the `<span>` to the current year.

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 1
line_highlights: 3
---
     // Update Copyright Year function 
     const currentYear = new Date();
     document.querySelector("#currentYear").innerText = currentYear.getFullYear();
    
--- /code ---

--- /task ---

--- task ---

**Test:** Click the **Run** button.

+ You should see the current year displayed in the copyright message.

--- /task ---

**Debug step:**  
+ Ensure there is a `#` in `#currentYear` in the `querySelector`
+ Check you have opening and closing brackets `()` at the end of `.getFullYear()`
+ Check your spelling of `querySelector` and `.getFullYear` (including the capital letters)
+ Check there is a `;` colon at the end of lines 2 and 3.

--- task ---

Open `index.html` 

Copy (CTRL + C) or (CMD + C) the `<p>` element within the footer.

Open the `character.html` file.

Find the `footer` element.

Paste (CTRL + V) or (CMD + V) the `<p>` element you copied earlier.

--- code ---
---
language: html
filename: character.html
line_numbers: true
line_number_start: 24
line_highlights: 25
---

      <footer>
        <p> <span id="currentYear"></span> Ⓒ Malik Johnson- All Rights Reserved</p>
      </footer>

--- /code ---

**Remember:** You may have changes the fictional name `Malik Johnson` to a name of your choice.

**Test:** Click the **Run** button to see the changes you have made.
+ The Copyright message will be shown at the bottom (footer section) of your web page.
+ It will include the year.

--- /task ---

--- collapse ---

---
title: What other date methods can I use?
---

Retrieve specific components of the date and time:

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth(); // (0 = January, 11 = December)
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const milliseconds = currentDate.getMilliseconds();

--- /collapse ---

Great job! You have added dynamic footer content to your website!

Next, you will design an interactive web page where users can create their own character.
