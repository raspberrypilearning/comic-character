## Add Copyright message to footer

In this step, you will create a Copyright message and a function to automatically update the current year to add to your footer section.
<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/comic-character-step2" width="100%" height="400" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
<span style="color: #0faeb0">**Copyright**</span> is a legal.
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

The **CSS** file you will use has already been linked to your webpages.

--- collapse ---

---
title: How does JavaScript make websites interactive?
---

JavaScript is a powerful language that provides tools to allow developers create interactive websites, by controlling the webpage content and behaviour. In this project we will focus on the following tools:
+ DOM Manipulation
+ Event Handling
+ User input validation
+ Animations & Transitions
+ Local storage


--- /collapse ---


--- task ---

Open the index.html file.

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

--- /task ---

--- task ---

Add a `<span>` element with the attribute `id="currentYear"`.

The `id` will be used to 

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

Great job! You have used the date function to upate the current year on your website.

Next, you will design an interactive webpage where users can create their own superhero.
