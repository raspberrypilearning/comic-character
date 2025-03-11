## Laat items verschijnen en verdwijnen

In deze stap gebruik je JavaScript om delen van je formulier te laten verschijnen en verdwijnen.

<iframe src="https://editor.raspberrypi.org/nl-NL/embed/viewer/comic-character-step4?page=character.html" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### Toon het samenvattingsgedeelte

Je gebruiker moet op een knop drukken om het samenvattingsgedeelte te tonen.

Er kan een `onclick`-gebeurtenis aan de knop worden toegevoegd.

JavaScript kan worden gebruikt om te reageren op deze gebeurtenis en de samenvatting te tonen.

--- collapse ---

---
title: Andere gebeurtenissen
---

Gebeurtenissen kunnen worden geactiveerd door de gebruiker of de browser.

- Gebruikers gebeurtenissen:
  - Met de muis (klik, dubbele klik, muis eroverheen bewegen)
  - Met het toetsenbord (toetsaanslag, toetsomlaag, toetsomhoog)
  - Door aanrakingen (touchstart, touchmove, touchend)

- Browser gebeurtenissen:
  - Het laden van de pagina (load, unload)
  - Venster gebeurtenissen (formaat wijzigen, scrollen)
  - Tijdgebeurtenissen (setInterval, setTimeout)

--- /collapse ---

--- task ---

Open het `character.html` bestand.

Voeg een `<button>`-element toe met de gebeurtenis `onclick="displaySummary()"` onder het oorspronkelijke verhaal `div`.

Voeg de tekst 'Maken' toe aan `<button>`, zodat de gebruiker weet wat de knop doet.

--- code ---
---
language: html
filename: character.html
line_numbers: true
line_number_start: 33
line_highlights: 35
---

        <label for="origin-text">Oorsprongsverhaal:</label>
        <textarea id="origin-text" placeholder="Add your superhero origin story!"></textarea>
        <button onclick="displaySummary()">Maken</button>
      </section>

--- /code ---

--- /task ---

--- task ---

**Klik op Run**

- Je ziet een knop Maken onder je superheldenformulier
- De knop Maken doet op dit moment niets

--- /task ---

Er gebeurt niets wanneer de gebruiker op de knop Maken klikt.

Dit komt omdat de samenvatting sectie zijn `display` eigenschap ingesteld heeft op `none`.

Je moet JavaScript gebruiken om de eigenschap `display` van de samenvattingssectie te wijzigen naar `flex`.

Wanneer de samenvatting sectie wordt weergegeven, wordt het personage details formulier verborgen.

### Maak constanten om naar elke sectie te verwijzen

Je functie zal constanten gebruiken die verwijzen naar elke sectie.

--- task ---

Open `scripts.js`.

Gebruik de `querySelector()`-methode om het volgende te vinden:

- Het samenvattingssectie-element en wijs het toe aan de constante `summary`
- Het element van de sectie personage details en wijs het toe aan de constante `characterDetails`

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 5
line_highlights: 6-7
---
// Maak constanten voor superheldenformulier
const summary = document.querySelector("#summary-section");
const characterDetails = document.querySelector("#character-details");

--- /code ---

--- /task ---

### Maak constanten om naar elk formulierveld te verwijzen

Je moet de drie personage details weergeven in de samenvatting sectie.

Stel elk van deze waarden in als een constante, zodat je ernaar kunt verwijzen in jouw code.

--- task ---

Gebruik `querySelector()` methodes om de formulierelementen te vinden en deze toe te wijzen aan een constante.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 5
line_highlights: 9-11
---
// Maak constanten voor superheldenformulier
const summary = document.querySelector("#summary-section");
const characterDetails = document.querySelector("#character-details");

const characterName = document.querySelector("#name-text");
const characterAbility = document.querySelector("#ability-choice");
const characterOrigin = document.querySelector("#origin-text");

--- /code ---

--- /task ---

### De inhoud van de samenvatting bijwerken

In `character.html`, heb je een `<p>` element met het attribuut `id="summary-paragraph"` toegevoegd.

--- collapse ---

**Tip:** Dit staat er alleen maar om je eraan te herinneren. Je hoeft het niet nog een keer te schrijven!

---
title: De samenvattingsalinea die je eerder hebt gemaakt
---

--- code ---
---
language: html
filename: character.html
line_numbers: false
line_number_start:
line_highlights: 3
---

      <section id="summary-section">
        <h2>Superheldensamenvatting</h2>
        <p id="summary-paragraph"></p>
      </section>

--- /code ---

--- /collapse ---

In de samenvattingsalinea wordt een samenvatting van de personagegegevens weergegeven.

Je hebt een functie nodig om de inhoud van de alinea te wijzigen.

--- task ---

Maak een functie `displaySummary()`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 13
line_highlights: 14-16
---

// Functie om de samenvatting te tonen
function displaySummary() {

}

--- /code ---

--- /task ---

De functie `displaySummary()` moet het element `<p>` wijzigen met het kenmerk `id="summary-paragraph"`.

--- task ---

Gebruik `querySelector()` om het `<p>`-element met het kenmerk `id="summary-paragraph"` te vinden.

Wijs het element toe aan de constante `summaryParagraph`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 13
line_highlights: 15
---

// Functie om samenvatting weer te geven
function displaySummary() {
  const summaryParagraph = document.querySelector("#summary-paragraph");

}

--- /code ---

--- /task ---

Je hebt eerder de `.innerText` eigenschap van een HTML-element gewijzigd.

Hier verander je de `.textContent` eigenschap van de samenvattingsalinea om de waarden die door de gebruiker zijn ingevoerd in elk veld op te nemen.

Elke waarde wordt weergegeven naast de tekst die de waarde introduceert (bijvoorbeeld 'De naam van je superheld is ')

Je kunt hiervoor 'string formatting' gebruiken.

--- collapse ---

---
title: Wat is string formatting?
---

Een string (tekenreeks) is een gegevenstype in JavaScript en andere programmeertalen.

Een string is een verzameling tekens tussen dubbele aanhalingstekens: `" "` of enkele aanhalingstekens `' '`.

Je kunt strings opmaken met behulp van sjabloonliteralen of samenvoeging.

### Sjabloonliteralen

Als je de waarden van constanten, variabelen of expressies in een tekenreeks wilt opnemen, kun je sjabloonliteralen gebruiken.

In plaats van `" "` of `' '` te gebruiken, gebruik je backticks  ``` ` ` ``` om een string aan te geven.

Gebruik daarna `${}` en plaats de constante, variabele of expressie in het `{}` deel.

Hier is een voorbeeld:

- Voeg de waarden toe in de constanten `heroName` en `age` in een string.

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
---

const heroName = "Spider Man";
const age = 25;
const message = `Hallo, ${heroName}! Je bent ${age} jaar oud.`;

--- /code ---

### Samenvoeging

Concatenatie is het samenvoegen van dingen.

Je kunt strings samenvoegen met behulp van de operator `+`.

Hier is een voorbeeld:

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
---

const superhero = "Iron Man";
const power = "harnas";

const description = "De superheld " + superhero + " heeft een " + power + ".";

--- /code ---

--- /collapse ---

--- task ---

Werk de `.textContent` van de `summaryParagraph` bij.

**Let op:** De tekstinhoud staat tussen backticks ``` ` ` ``` in plaats van `" "` of `' '`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 13
line_highlights: 17-19
---

// Functie om samenvatting weer te geven
function displaySummary() {
  const summaryParagraph = document.querySelector("#summary-paragraph");

  summaryParagraph.textContent = `De naam van je superheld is ${characterName.value}. 
  De vaardigheid is ${characterAbility.value}. 
  Het oorsprongsverhaal is ${characterOrigin.value}.`;

}

--- /code ---

--- /task ---

### Het formulier voor de personage details verbergen

--- task ---

Zet de waarde van de `display` eigenschap van de personagedetails `<section>` in op `none`.

Dit verbergt het hele formulier op de pagina.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 13
line_highlights: 21
---

// Functie om samenvatting weer te geven
function displaySummary() {
  const summaryParagraph = document.querySelector("#summary-paragraph");

  summaryParagraph.textContent = `De naam van je superheld is ${characterName.value}. 
  De vaardigheid is ${characterAbility.value}. 
  Het oorsprongsverhaal is ${characterOrigin.value}.`;

  characterDetails.style.display = "none";

}

--- /code ---

--- /task ---

--- task ---

Stel de waarde van de eigenschap `display` van de samenvatting `<section>` in op `flex`.

Dit toont de samenvatting sectie op jouw pagina.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 13
line_highlights: 22
---

// Functie om samenvatting weer te geven
function displaySummary() {
  const summaryParagraph = document.querySelector("#summary-paragraph");

  summaryParagraph.textContent = `De naam van je superheld is ${characterName.value}. 
  De vaardigheid is ${characterAbility.value}. 
  Het oorsprongsverhaal is ${characterOrigin.value}.`;

  characterDetails.style.display = "none";
  summary.style.display = "flex";
}

--- /code ---

--- /task ---

--- task ---

Open `character.html`.

**Klik op Run**

- Vul de personage details in
- Wanneer je op de knop Maken klikt, wordt het formulier verborgen en wordt het samenvattingsgedeelte weergegeven
- De samenvattingsalinea bevat een samenvatting van jouw personage

--- collapse ---

---
title: De samenvatting sectie wordt niet goed weergegeven
---
- Controleer of je alle constanten (`const`) correct hebt benoemd
- Controleer of je de juiste syntaxis gebruikt bij het aanmaken van de functies, inclusief `()` en `{}`
- Controleer of je `onclick = "displaySummary()"` hebt toegevoegd als een gebeurtenis op het `<button>`-element
- Controleer of je een puntkomma `;` hebt toegevoegd aan het einde van jouw declaraties

--- /collapse ---

--- /task ---

Goed gedaan! Je hebt een interactieve formulier gemaakt dat elementen laat zien en verbergt.

Vervolgens kun je de gebruiker zijn/haar keuzes laten bewerken!
