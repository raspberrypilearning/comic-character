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
        <label>Abilities:</label>
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

#### Add more hero images

In the starter projects there are multiple images you can use to expand your hero slider.

`kwame-cape.jpg`
`ellenhero-image.jpg`

You can add more `<img>` elements to your hero slider.

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
          <span class="hero-slide"><img src="kwame-cape.jpg" alt="A cartoon boy in a superhero costume standing proudly in front of majestic mountain range."></span>
          <span class="hero-slide"><img src="layton-slider.jpg" alt="A superhero character with blonde hair, wearing a blue costume and red cape, in front of a blue background"></span>
          <span class="hero-slide"><img src="ellenhero-image.jpg" alt="A cartoon girl in a red cape and blue shirt standing in front of mountains."></span>
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

    #name-input, #ability-input, #country-input, #appearance-input, #origin-input {
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
    const characterSheet = document.querySelector("#character-details");
    const summary = document.querySelector("#summary-section");

    const name = document.querySelector("#name-text");
    const ability = document.querySelector("#ability-choice");
    const country = document.querySelector("#country-choice");
    const appearance = document.querySelector("#appearance-text");
    const origin = document.querySelector("#origin-text");

    // Function to display summary
    function displaySummary() {
    const summaryParagraph = document.querySelector("#summary-paragraph");

    summaryParagraph.textContent = `Your superhero name is ${name.value}. 
    Your abilities are ${ability.value}. You are from ${country.value}.
    Your appearance is ${appearance.value}. 
    Your origin story is ${origin.value}.`;

    characterSheet.style.display = "none";
    summary.style.display = "flex";
}

    // Function to edit form content
    function changeSummary() {
    characterSheet.style.display = "flex";
    summary.style.display = "none";
}

    // Function to validate the character creation form 
    const alertBox = document.querySelector("#alert");

    function validateForm(){

    var alertMessage = ""

    if (name.value == ""){
        alertMessage = "Please enter a name"; 
    } else if (ability.value == "") {
        alertMessage = "Please choose an ability";
    }  else if (country.value == "") {
        alertMessage = "Please choose a country of origin";
    }else if (appearance.value == "") {
        alertMessage = "Please describe the appearance";
    } else if (origin.value == "") {
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

### See the upgraded project

--- collapse ---

---
title: Upgraded project
---

You can view the [upgraded project here](https://editor.raspberrypi.org/en/projects/comic-character-upgraded){:target="_blank"}.

--- /collapse ---