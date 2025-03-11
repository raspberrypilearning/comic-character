## Wijzig de inhoud van de samenvatting

In deze stap kun je de gebruiker toestaan zijn/haar formulierkeuzes te wijzigen.

<iframe src="https://editor.raspberrypi.org/nl-NL/embed/viewer/comic-character-step5?page=character.html" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### Voeg de changeSummary() functie toe

Je hebt een functie nodig die het formulier toont en de samenvatting verbergt wanneer de gebruiker op de knop Bewerken klikt.

--- task ---

Open `scripts.js`.

Zoek de opmerking `// Functie om samenvatting te bewerken`.

Voeg de functie `changeSummary()` toe.

Zet in je functie:

- de waarde van de `display` eigenschap van de personagedetails `<section>` op `flex`
- de waarde van de `display` eigenschap van de samenvatting `<section>` op `none`

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 25
line_highlights: 26-29
---
// Functie om samenvatting te bewerken
function changeSummary() {
  characterDetails.style.display = "flex";
  summary.style.display = "none";
}

--- /code ---

--- /task ---

### Maak een knop Bewerken

Je moet een nieuwe knop maken om de `changeSummary()` functie aan te roepen.

--- task ---

Open `character.html`.

Voeg een `<button>` element toe met het event `onlick="changeSummary()"` aan de samenvatting sectie.

Voeg de tekst 'Bewerken' toe aan `<button>`, zodat de gebruiker weet wat de knop doet.

--- code ---
---
language: html
filename: character.html
line_numbers: true
line_number_start: 39
line_highlights: 42
---

      <section id="summary-section">
        <h2>Superheldensamenvatting</h2>
        <p id="summary-paragraph"></p>
        <button onclick="changeSummary()">Bewerken</button>
      </section>

--- /code ---

--- /task ---

--- task ---

**Klik op Run**

- Vul het formulier opnieuw in.
- Wanneer je op de knop Maken klikt, wordt het formulier verborgen en wordt het samenvattingsgedeelte weergegeven.
- Je zou een knop Bewerken moeten zien. Klik erop om je formulier te bewerken.

--- /task ---

Goed gedaan! Je hebt nog meer interactiviteit aan je website toegevoegd!

Vervolgens ga je controleren of de gebruiker het formulier heeft ingevuld en een waarschuwing geven als er een sectie niet is ingevuld.
