## Maak een hero image slider

In deze stap maak je een interactieve hero-image slider voor jouw webpagina.

De gebruiker kan knoppen gebruiken om naar de volgende of vorige hero image te gaan.

<iframe src="https://editor.raspberrypi.org/nl-NL/embed/viewer/comic-character-complete" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### De hero image HTML

De HTML- en CSS-styling is beschikbaar voor jou.

Hier is de HTML:

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 28
line_highlights:
---

      <main>
        <div class="hero-container">
          <div class="hero-slider">
            <span class="hero-slide active"><img src="stacey-hero.jpg" alt="Een superheldenpersonage met blond haar, gekleed in een blauw kostuum en een rode cape, voor een blauw-gele achtergrond."></span>
            <span class="hero-slide"><img src="safina-cape.jpg" alt="Een superheldenpersonage met zwart haar, gekleed in een rood-wit kostuum en een blauwe cape, voor een blauw-gele achtergrond."></span>
            <span class="hero-slide"><img src="layton-slider.jpg" alt="Een superheldenpersonage met blond haar, gekleed in een blauw kostuum en een rode cape, voor een blauwe achtergrond."></span>
          </div>
          <button class="hero-nav-btn prev" onclick="changeHero(-1)">❮</button>
          <button class="hero-nav-btn next" onclick="changeHero(+1)">❯</button>
        </div>
      </main>

--- /code ---

--- collapse ---

---
title: Ik heb de HTML uitleg nodig
---

**Regels 31, 32 en 33:**

- De `<span>` elementen bevatten de hero images
  - Ze hebben allemaal hetzelfde attribuut: `class="hero-slide"`
- De klasse `active` wordt gebruikt om een bepaalde afbeelding weer te geven

**Regels 35 en 36:**

- Knoppen om naar links `<` en rechts `>` te navigeren
- De JavaScript-functie `changeHero()` wordt gebruikt als gebeurtenisafhandeling voor het indrukken van knoppen
  - Wanneer op de `<` knop wordt geklikt, wordt de `changeHero()` functie aangeroepen met het argument `-1`
  - Wanneer op de `>` knop wordt geklikt, wordt de `changeHero()` functie aangeroepen met het argument `+1`

--- /collapse ---

### Vind alle afbeeldingen

Je hebt `querySelector()` gebruikt in de vorige stappen om het eerste element te vinden dat overeenkomt met de opgegeven CSS-selector.

Je kunt `querySelectorAll()` gebruiken om een lijst van **alle** `<span>` elementen te vinden en terug te geven.

--- task ---

Open `scripts.js`.

Zoek de opmerking `// Change Hero functie`.

Gebruik `querySelectorAll()` om een lijst te retourneren van alle elementen met het attribuut `class="hero-slide"`.

Wijs de lijst toe aan de constante `heroSlides`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 75
line_highlights: 76
---

// Wijzig Hero-functie
const heroSlides = document.querySelectorAll('.hero-slide');

--- /code ---

--- /task ---

### Actieve held afbeelding bijhouden

Het eerste element in de geretourneerde lijst in `heroSlides` bevindt zich op index 0.


     ___________   ___________   ___________  
    | Element 1 | | Element 2 | | Element 3 |
     ‾‾‾‾‾‾‾‾‾‾‾ ‾‾‾‾‾‾‾‾‾‾ ‾‾‾‾‾‾‾‾‾‾‾
    | Index 0 | | Index 1 | | Index 2 |


Dit is de eerste actieve afbeelding in de schuifbalk.

--- task ---

Maak de variabele `currentHeroIndex` en wijs de waarde `0` toe.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 75
line_highlights: 77
---

// Wijzig Hero-functie
const heroSlides = document.querySelectorAll('.hero-slide');
var currentHeroIndex = 0;

--- /code ---

--- /task ---

### Maak de changeHero() functie

De `changeHero()` functie wordt aangeroepen wanneer de gebruiker naar de volgende of vorige afbeelding gaat.

--- task ---

Zoek de opmerking `// Wijzig Hero functie`.

Maak een functie `changeHero()` met de parameter `direction`.

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
Een <span style="color: #0faeb0">**parameter**</span> fungeert als een tijdelijke aanduiding voor een waarde die door de functie wordt gebruikt.
</p>

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 75
line_highlights: 79-81
---

// Wijzig Hero-functie
const heroSlides = document.querySelectorAll('.hero-slide');
var currentHeroIndex = 0;

function changeHero(direction) {

}

--- /code ---

--- /task ---

### Verwijder de actieve afbeelding

De 'changeHero()' functie moet de huidige afbeelding bijwerken.

Eerst wordt de `active` klasse uit het huidige `<span>` element verwijderd.

--- task ---

Verwijder de klasse `active` uit het element bij `currentHeroIndex` in de lijst `heroSlides`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 75
line_highlights: 81
---

// Wijzig Hero-functie
const heroSlides = document.querySelectorAll('.hero-slide');
var currentHeroIndex = 0;

function changeHero(direction) {

  heroSlides[currentHeroIndex].classList.remove("active");

}

--- /code ---

Vierkante haakjes worden gebruikt om te verwijzen naar de positie van het element in de lijst.

Dus `heroSlides[currentHeroIndex]` is het element op de positie `currentHeroIndex` in de lijst `heroSlides`.

--- /task ---

### De huidige index bijwerken

De functie verandert de `currentHeroIndex`.

Er wordt `1` bijgeteld of `1` afgetrokken, afhankelijk van de `richting`-waarde die aan de functie is doorgegeven.

- Wanneer op de `<` knop wordt geklikt, wordt de `changeHero()` functie aangeroepen met het argument `-1`
- Wanneer op de `>` knop wordt geklikt, wordt de `changeHero()` functie aangeroepen met het argument `+1`

--- task ---

Werk de waarde van `currentHeroIndex` bij.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 75
line_highlights: 82
---

// Wijzig Hero-functie
const heroSlides = document.querySelectorAll('.hero-slide');
var currentHeroIndex = 0;

function changeHero(direction) {

  heroSlides[currentHeroIndex].classList.remove("active");
  currentHeroIndex = currentHeroIndex + direction;

}

--- /code ---

--- /task ---

### Omgaan met 'buiten bereik' (out of range)

Er zijn drie elementen in de `heroSlides`-lijst.

Ze bevinden zich op indexen `0`, `1` en `2`.

Als de waarde van de variabele `currentHeroIndex` `2` is, wordt deze door het aanroepen van `changeHero(+1)` gewijzigd naar `3`.

🚨 Maar er is geen index `3` 🚨

Als de waarde van de variabele `currentHeroIndex` `0` is, wordt deze door het aanroepen van `changeHero(-1)` gewijzigd naar `-1`.

🚨 Maar er is geen index `-1` 🚨

Je hebt een manier nodig om deze 'buiten bereik'-problemen op te lossen!

Zo werkt het:
- Als de waarde van `currentHeroIndex` kleiner is dan `0`, stel deze dan in op de laatste index in de lijst (`2`)
- Als de waarde van `currentHeroIndex` groter is dan `2`, stel deze dan in op `0`

--- task ---

Gebruik een `if` statement met een `else if` statement om de buiten bereik problemen op te lossen.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 75
line_highlights: 84-88
---

// Wijzig Hero-functie
const heroSlides = document.querySelectorAll('.hero-slide');
var currentHeroIndex = 0;

function changeHero(direction) {

  heroSlides[currentHeroIndex].classList.remove("active");
  currentHeroIndex = currentHeroIndex + direction;

  if (currentHeroIndex < 0){
    currentHeroIndex = 2;
  } else if (currentHeroIndex > 2) {
    currentHeroIndex = 0;
  }

}

--- /code ---

--- /task ---

### Stel de nieuwe actieve afbeelding in

Je moet het element op de huidige index actief maken.

--- task ---

Voeg de klasse `active` toe aan het element op de huidige index.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 75
line_highlights: 90
---

// Wijzig Hero-functie
const heroSlides = document.querySelectorAll('.hero-slide');
var currentHeroIndex = 0;

function changeHero(direction) {

  heroSlides[currentHeroIndex].classList.remove("active");
  currentHeroIndex = currentHeroIndex + direction;

  if (currentHeroIndex < 0){
    currentHeroIndex = 2;
  } else if (currentHeroIndex > 2) {
    currentHeroIndex = 0;
  }

heroSlides[currentHeroIndex].classList.add("active");

}

--- /code ---

--- /task ---

--- task ---

Open `index.html`.

**Klik op Run**

- Klik op de linker (<) knop op je hero image slider, de afbeelding zou nu moeten veranderen
- Klik op de rechter (>) knop op je hero image slider, de afbeelding zou nu moeten veranderen

--- collapse ---

---
title: De knoppen werken niet goed
---

- Zorg ervoor dat je het 'kleiner dan' symbool' `<` of het 'groter dan' `>` symbool op de juiste plaatsen hebt gebruikt.

--- /collapse ---

--- /task ---

Goed gedaan!

Je hebt een interactieve website gemaakt, zodat de gebruiker zijn eigen superheldenpersonage kan creëren. Je hebt de invoer van de gebruiker gecontroleerd en de gebruiker toegestaan een thema voor de website te kiezen.

Controleer of je project goed begrepen hebt met behulp van de quiz bij de volgende stap.
