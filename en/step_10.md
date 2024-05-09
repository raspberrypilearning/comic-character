## Upgrade your project

If you have time, you can: 

+ Add more abilities on `character.html`
+ Add more form elements to your superhero creation form
+ Add more images to your hero slider

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

        <label for="ability-choice">Ability:</label>
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

--- /code ---

--- /collapse ---

--- collapse ---

---
title: Add more form fields
---

### Example: Add a country the character is from

+ Add HTML to `character.html`

--- code ---
---
language: html
filename: character.html
line_numbers: false
line_number_start: 
line_highlights: 
---

        <label for="country-choice">Where is your hero from?:</label>
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

--- /code ---

+ Update JavaScript on `scripts.js`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 8, 15, 41, 42
---

// Create constants for superhero form
const characterDetails = document.querySelector("#character-details");
const summary = document.querySelector("#summary-section");

const name = document.querySelector("#name-text");
const characterAbility = document.querySelector("#ability-choice");
const characterCountry = document.querySelector("#country-choice");
const characterOrigin = document.querySelector("#origin-text");


// Function to display summary
function displaySummary() {
  const summaryParagraph = document.querySelector("#summary-paragraph");

  summaryParagraph.textContent = `Your superhero name is ${characterName.value}. 
  Their ability is ${characterAbility.value}. They are from ${characterCountry.value}.
  Their origin story is ${characterOrigin.value}.`;

  characterDetails.style.display = "none";
  summary.style.display = "flex";
}

// Function to edit summary
function changeSummary() {
  characterDetails.style.display = "flex";
  summary.style.display = "none";
}

// Function to check the character details form 
const alertBox = document.querySelector("#alert");

function checkForm(){

  var alertMessage = "";

  if (characterName.value == ""){
    alertMessage = "Please enter a name"; 
  } else if (characterAbility.value == "") {
    alertMessage = "Please choose an ability";
  } else if (characterCountry.value == "") {
    alertMessage = "Please select where your hero is from";
  } else if (characterOrigin.value == "") {
    alertMessage = "Please write the origin story";
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

--- collapse ---

---
title: Add more hero images to the slider
---

There are more images you can use for your hero slider in the starter projects:

`kwame-cape.jpg` and `ellenhero-image.jpg`

You can add more images to your slider by updating `index.html` and `scripts.js`.

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
          <span class="hero-slide"><img src="layton-slider.jpg" alt="A superhero character with blonde hair, wearing a blue costume and red cape, in front of a blue background"></span>
          <span class="hero-slide"><img src="kwame-cape.jpg" alt="A superhero character in a superhero costume standing proudly in front of majestic mountain range."></span>
          <span class="hero-slide"><img src="ellenhero-image.jpg" alt="A superhero character in a red cape and blue shirt standing in front of mountains."></span>
      </div>

--- /code ---

When you have more hero images, you need to change the `if` and `else if` statements to handle the longer length of `currentHeroIndex` that will be returned by `querySelectorAll`.

If you have five images, then you will need to change the code like this:

--- code ---
---
language: js
filename: scripts.js
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

heroSlides[currentHeroIndex].classList.add("active");

}

--- /code ---

If you would like to handle any number of images, then instead of handling a fixed length, you can just check the length of `currentHeroIndex`.

The `.length` property returns the number of elements in a list.

+ If the value of `currentHeroIndex` is less than `0`, set it to the last index in the list (at the index that is the same as the length of the list minus 1)
+ If the value of `currentHeroIndex` is greater than the last index in the list, set it to `0`

--- code ---
---
language: js
filename: scripts.js
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

  heroSlides[currentHeroIndex].classList.add("active");

}

--- /code ---

--- /collapse ---

--- collapse ---

---
title: See the upgraded project
---

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/comic-character-upgrade" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

You can see the [upgraded project files here](https://editor.raspberrypi.org/en/projects/comic-character-upgrade){:target="_blank"}.

--- /collapse ---
