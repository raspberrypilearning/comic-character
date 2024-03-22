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

This project already contains a navbar and a hero image, which you learnt how to create in [Welcome to Antarctica](https://projects.raspberrypi.org/en/projects/welcome-to-antarctica). 

The **JavaScript** file you will use has already been linked to your webpages just before the closing `</body>` tag.

The **CSS** file you will use has also been linked to your webpages.

### Add content to your footer section

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
line_number_start: 30
line_highlights: 31
---

      <footer>
        <p> Ⓒ Malik Johnson- All Rights Reserved</p>
      </footer>

--- /code ---

--- /task ---

--- task ---

Add a `<span>` element with the attribute `id="copyrightYear"` between the Ⓒ symbol and the name.

The `id` attribute is used to specify a unique identifier for an HTML element.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 30
line_highlights: 31
---

      <footer>
        <p> Ⓒ <span id="copyrightYear"></span> Malik Johnson- All Rights Reserved</p>
      </footer>

--- /code ---

--- /task ---

--- task ---

**Click Run**
+ The Copyright message will be shown at the bottom (footer) of your webpage.
  
**Notice:** there is no date shown yet.

--- /task ---

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

Open `scripts.js`.

Create a constant `currentDate` to hold a new `Date()` object.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 1
line_highlights: 2
---
     
     // Update Copyright Year function 
     const currentDate = new Date();
    
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

The Document Object Model (DOM) provides a way for JavaScript (and other programming languages) to interact with webpage elements.

It represents the structure of a webpage (document).

`querySelector()` is a DOM method that returns the first element in your webpage that matches a specified CSS selector (e.g. `copyrightYear`)

--- /collapse ---

--- task ---

Use the `querySelector()` method to find the element in the webpage document with the attribute `id="copyrightYear"`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 1
line_highlights: 3
---
     // Update Copyright Year function 
     const currentDate = new Date();
     document.querySelector("#copyrightYear")
    
--- /code ---

--- /task ---

The querySelector will find the whole `<span>` element. 

You only need to change the text *inside* the element. 

The `.innerText` property can be used to refer to the text content of an HTML element.

The `currentDate` constant holds the full date returned by the `Date()` function, but you only need the four-digit year part of the date.

You can use the `.getFullYear()` method for this.

--- task ---

Set the `.innerText` content of the `<span>` with the attribute `id="copyrightYear"` to the current four-digit year.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 1
line_highlights: 3
---
     // Update Copyright Year function 
     const currentDate = new Date();
     document.querySelector("#copyrightYear").innerText = currentDate.getFullYear();
    
--- /code ---

--- /task ---

--- task ---

**Click Run**
+ You should see the current year displayed in the copyright message.

--- /task ---

--- collapse ---

---
title: The year is not displayed
---
+ Check there is a `#` in `copyrightYear` in the `querySelector`
+ Check you have opening and closing brackets `()` at the end of `.getFullYear()`
+ Check your spelling of `querySelector` and `.getFullYear` (including the capital letters)
+ Check there is a `;` colon at the end of lines 2 and 3.
  
--- /collapse ---

--- task ---

Open `index.html` 

Copy (CTRL + C) or (CMD + C) the `<p>` element within the footer.

--- /task ---

--- task ---

Open the `character.html` file.

Find the `footer` element.

Paste (CTRL + V) or (CMD + V) the `<p>` element you copied earlier.

--- code ---
---
language: html
filename: character.html
line_numbers: true
line_number_start: 27
line_highlights: 28
---

      <footer>
        <p> <span id="copyrightYear"></span> Ⓒ Malik Johnson- All Rights Reserved</p>
      </footer>

--- /code ---

**Remember:** You may have changed the fictional name `Malik Johnson` to a name of your choice.

**Click Run**
+ The Copyright message will be shown at the bottom (footer section) of your webpage.
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

Great job! You have added some dynamic content to your webpages!

Next, you will design an interactive webpage where the user can create their own character.