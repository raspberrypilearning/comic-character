## Upgrade your project

If you have more time, you can: 

+ add more abilities on `character.html`
+ add more form elements to your superhero creation form.
+ add more images to your hero slider

#### Add more abilities 

--- collapse ---

---
title: Add more abilities to the superhero creation form
---

--- code ---
---
language: html
filename: character.html
line_numbers: false
line_number_start: 
line_highlights: 
---

      <div id="ability-input">
        <label>Ability:</label>
        <select id="ability-choice">
          <option value="">Choose an option</option>
          <option value="Flight">Flying</option>
          <option value="Invisibility">Invisibility</option>
          <option value="Time travel">Time travel</option>
          <option value="Telepathy">Telepathy</option>
          <option value="Visions">Visions</option>
          <option value="Stretch">Stretch</option>
          <option value="Shapeshift">Shapeshift</option>
          <option value="Speedstar">Speedstar</option>
          <option value="Ice">Ice</option>
        </select>
      </div>

--- /code ---

--- /collapse ---

#### Add more form fields to your superhero creation form

--- collapse ---

---
title: Add more form fields
---

+ Add HTML to `character.html`

--- code ---
---
language: html
filename: character.html
line_numbers: false
line_number_start: 
line_highlights: 
---

      <div id="country-input">
        <label>Where is your hero from?:</label>
        <select id="country-choice">
          <option value="">Choose an option</option>
          <option value="Space">Space</option>
          <option value="Wakanda">Wakanda</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="India">India</option>
          <option value="China">China</option>
          <option value="Nigeria">Nigeria</option>
          <option value="Australia">Australia</option>
          <option value="South Africa">South Africa</option>
        </select>
      </div>

--- /code ---

+ Change styles on `style.css`

--- code ---
---
language: css
filename: style.css
line_numbers: false
line_number_start: 
line_highlights: 
---

#name-input, #ability-input, #country-input, #origin-input {
  width: 100%;
}

--- /code ---

+ Update JavaScript on `script.js`

--- code ---
---
language: js
filename: script.js
line_numbers: false
line_number_start: 
line_highlights: 
---

// Create constants for superhero form
const characterDetails = document.querySelector("#character-details");
const summary = document.querySelector("#summary-section");

const name = document.querySelector("#name-text");
const characterAbility = document.querySelector("#ability-choice");
const characterOrigin = document.querySelector("#origin-text");
const characterCountry = document.querySelector("#country-text");

// Function to display summary
function displaySummary() {
  const summaryParagraph = document.querySelector("#summary-paragraph");

  summaryParagraph.textContent = `Your superhero name is ${characterName.value}. 
  Their ability is ${characterAbility.value}. They are from ${characterCountry.value}.
  Their origin story is ${characterOrigin.value}.`;

  characterDetails.style.display = "none";
  summary.style.display = "flex";
}

// Function to edit form content
function changeSummary() {
  characterDetails.style.display = "flex";
  summary.style.display = "none";
}

// Function to check the character details form 
const alertBox = document.querySelector("#alert");

function checkForm(){

  var alertMessage = ""

  if (characterName.value == ""){
    alertMessage = "Please enter a name"; 
  } else if (characterAbility.value == "") {
    alertMessage = "Please choose an ability";
  } else if (characterOrigin.value == "") {
    alertMessage = "Please write the origin story";
  } else if (characterCountry.value == "") {
    alertMessage = "Please choose a country of origin";
  } 

  if (alertMessage != ""){
    alertBox.innerText = alertMessage;
    alertBox.style.display = "block";
  } else {
    alertBox.style.display = "none";
    displaySummary();
  }
}

--- /code ---

--- /collapse ---

#### Add more hero images

In the starter projects there are more images you can use in your hero slider:

`kwame-cape.jpg` and `ellenhero-image.jpg`

--- collapse ---

---
title: Add more hero images to the slider
---

--- code ---
---
language: html
filename: index.html
line_numbers: false
line_number_start: 
line_highlights: 
---

      <div class="hero-container">
        <div class="hero-slider">
          <span class="hero-slide active"><img src="stacey-hero.jpg" alt="A superhero character with blonde hair, wearing a blue costume and red cape, in front of a blue and yellow background"></span>
          <span class="hero-slide"><img src="safina-cape.jpg" alt="A superhero character with black hair, wearing a red and white costume and blue cape, in front of a blue and yellow background"></span>
          <span class="hero-slide"><img src="kwame-cape.jpg" alt="A superhero character in a superhero costume standing proudly in front of majestic mountain range."></span>
          <span class="hero-slide"><img src="layton-slider.jpg" alt="A superhero character with blonde hair, wearing a blue costume and red cape, in front of a blue background"></span>
          <span class="hero-slide"><img src="ellenhero-image.jpg" alt="A superhero character in a red cape and blue shirt standing in front of mountains."></span>
      </div>

--- /code ---

When you have more hero images, you need to change the `if` and `else if` statements to handle the longer length of `currentHeroIndex` that will be returned by `querySelectorAll`.

If you have five images, then you will need to change the code like this:

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 75
line_highlights: 85-86
---

// Change Hero function
const heroSlides = document.querySelectorAll('.hero-slide');
var currentHeroIndex = 0;

function changeHero(direction) {

  heroSlides[currentHeroIndex].classList.remove("active");
  currentHeroIndex = currentHeroIndex + direction;

  if (currentHeroIndex < 0){
    currentHeroIndex = 4;
  } else if (currentHeroIndex > 4) {
    currentHeroIndex = 0;
  }

}

--- /code ---

If you would like to handle any number of images, then instead of handling a fixed length, you can just check the length of `currentHeroIndex`

The `.length` property returns the number of elements in a list.

+ if the value of `currentHeroIndex` is less than `0`, set it to the last index in the list (at the index that is the same as the length of the list minus 1)
+ if the value of `currentHeroIndex` is greater than the last index in the list, set it to `0`

--- code ---
---
language: js
filename: script.js
line_numbers: true
line_number_start: 75
line_highlights: 85-86
---

// Change Hero function
const heroSlides = document.querySelectorAll('.hero-slide');
var currentHeroIndex = 0;

function changeHero(direction) {

  heroSlides[currentHeroIndex].classList.remove("active");
  currentHeroIndex = currentHeroIndex + direction;

  if (currentHeroIndex < 0){
    currentHeroIndex = heroSlides.length - 1;
  } else if (currentHeroIndex > heroSlides.length - 1) {
    currentHeroIndex = 0;
  }

}

--- /code ---

--- /collapse ---

### See the upgraded project

--- collapse ---

---
title: Upgraded project
---

You can view the [upgraded project here](https://editor.raspberrypi.org/en/projects/comic-character-upgraded){:target="_blank"}.

--- /collapse ---