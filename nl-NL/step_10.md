## Verbeter je project

Als je tijd hebt, kun je:

- Voeg meer vaardigheden toe aan `character.html`
- Voeg meer elementen toe aan je formulier om een superheld te maken
- Voeg meer afbeeldingen toe aan je hero slider

\--- collapse ---

---

## title: Voeg meer mogelijkheden toe aan het formulier om een superheld te maken

## --- code ---

language: html
filename: character.html
line_numbers: false
line_number_start:
line_highlights:
-----------------------------------------------------

```
    <label for="ability-choice">Vaardigheid:</label>
    <select id="ability-choice">
      <option value="">Kies een optie</option>
      <option value="Flight">Vliegen</option>
      <option value="Invisibility">Onzichtbaarheid</option>
      <option value="Time travel">Tijdreizen</option>
      <option value="Telepathy">Telepathie</option>
      <option value="Visions">Visioenen</option>
      <option value="Stretch">Uitrekken</option>
      <option value="Shapeshift">Shapeshift</option>
      <option value="Speedstar">Speedstar</option>
      <option value="Ice">IJs</option>
    </select>
```

\--- /code ---

\--- /collapse ---

\--- collapse ---

---

## title: Voeg meer velden toe op het formulier

### Voorbeeld: Voeg een land toe waar het personage vandaan komt

- HTML toevoegen aan `character.html`

## --- code ---

language: html
filename: character.html
line_numbers: false
line_number_start:
line_highlights:
-----------------------------------------------------

```
    <label for="country-choice">Waar komt je held vandaan?:</label>
    <select id="country-choice">
      <option value="">Kies een optie</option>
      <option value="Space">Ruimte</option>
      <option value="Wakanda">Wakanda</option>
      <option value="USA">VS</option>
      <option value="UK">UK</option>
      <option value="India">India</option>
      <option value="China">China</option>
      <option value="Nigeria">Nigeria</option>
      <option value="Australia">Australië</option>
      <option value="South Africa">Zuid-Afrika</option>
    </select>
```

\--- /code ---

- JavaScript op `scripts.js` bijwerken.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 8, 15, 41, 42
-------------------------------------------------------------------

// Maak constanten voor het superheldenformulier
const characterDetails = document.querySelector("#personage-details");
const summary = document.querySelector("#samenvatting-sectie");

const name = document.querySelector("#name-text");
const characterAbility = document.querySelector("#ability-choice");
const characterCountry = document.querySelector("#country-choice");
const characterOrigin = document.querySelector("#origin-text");

// Functie om samenvatting weer te geven
function displaySummary() {
const summaryParagraph = document.querySelector("#samenvatting-paragraaf");

summaryParagraph.textContent = `De naam van je superheld is ${characterName.value}. 
  De vaardigheid is ${characterAbility.value}. Het land van oorsprong is ${characterCountry.value}.
  Het oorsprongsverhaal is ${characterOrigin.value}.`;

characterDetails.style.display = "none";
summary.style.display = "flex";
}

// Functie om samenvatting te bewerken
function changeSummary() {
characterDetails.style.display = "flex";
summary.style.display = "none";
}

// Functie om het formulier met personage details te controleren
const alertBox = document.querySelector("#alert");

function checkForm(){

var alertMessage = "";

if (characterName.value == "") {
alertMessage = "Voer een naam in";
} else if (characterAbility.value == "") {
alertMessage = "Kies een vaardigheid";
} else if (characterCountry.value == "") {
alertMessage = "Selecteer waar je held vandaan komt";
} else if (characterOrigin.value == "") {
alertMessage = "Schrijf het oorsprongsverhaal";
}

if (alertMessage != ""){
alertBox.innerText = alertMessage;
alertBox.style.display = "block";
} else {
alertBox.style.display = "none";
displaySummary();
}
}

\--- /code ---

\--- /collapse ---

\--- collapse ---

---

## title: Voeg meer hero images toe aan de slider

Er zijn nog meer afbeeldingen die je voor je hero slider kunt gebruiken in de startersprojecten:

`kwame-cape.jpg` en `ellenhero-image.jpg`

Je kunt meer afbeeldingen aan je slider toevoegen door `index.html` en `scripts.js` bij te werken.

## --- code ---

language: html
filename: index.html
line_numbers: false
line_number_start:
line_highlights:
-----------------------------------------------------

```
  <div class="hero-container">
    <div class="hero-slider">
      <span class="hero-slide active"><img src="stacey-hero.jpg" alt="A superhero character with blonde hair, wearing a blue costume and red cape, in front of a blue and yellow background"></span>
      <span class="hero-slide"><img src="safina-cape.jpg" alt="A superhero character with black hair, wearing a red and white costume and blue cape, in front of a blue and yellow background"></span>
      <span class="hero-slide"><img src="layton-slider.jpg" alt="A superhero character with blonde hair, wearing a blue costume and red cape, in front of a blue background"></span>
      <span class="hero-slide"><img src="kwame-cape.jpg" alt="A superhero character in a superhero costume standing proudly in front of majestic mountain range."></span>
      <span class="hero-slide"><img src="ellenhero-image.jpg" alt="A superhero character in a red cape and blue shirt standing in front of mountains."></span>
  </div>
```

\--- /code ---

Wanneer je meer hero images hebt, moet je de instructies `if` en `else if` wijzigen om de langere lengte van `currentHeroIndex` te verwerken die door `querySelectorAll` wordt geretourneerd.

Als je vijf afbeeldingen hebt, dan moet je de code als volgt wijzigen:

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 75
line_highlights: 85-86
-----------------------------------------------------------

// Wijzig Hero-functie
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

\--- /code ---

Als je een willekeurig aantal afbeeldingen wilt verwerken, in plaats van een vaste lengte, kun je de lengte controleren van `currentHeroIndex`.

De eigenschap `.length` retourneert het aantal elementen in een lijst.

- Als de waarde van `currentHeroIndex` kleiner is dan `0`, stel het in op de laatste index van de lijst (op de index die hetzelfde is als de lengte van de lijst min 1)
- Als de waarde van `currentHeroIndex` groter is dan de laatste index in de lijst, stel je deze in op `0`

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 75
line_highlights: 85-86
-----------------------------------------------------------

// Wijzig Hero-functie
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

\--- /code ---

\--- /collapse ---

\--- collapse ---

---

## title: Bekijk het verbeterde project

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/comic-character-upgrade" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

Je kunt het [geüpgrade project bestanden hier](https://editor.raspberrypi.org/en/projects/comic-character-upgrade){:target="_blank"} bekijken.

\--- /collapse ---
