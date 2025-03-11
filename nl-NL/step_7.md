## Aanmaken light mode thema

In deze stap maak je een schakelaar zodat de gebruiker kan veranderen tussen donkere modus en lichte modus.

De website zal de keuze van de gebruiker onthouden, zelfs als ze naar een andere pagina navigeren.

<iframe src="https://editor.raspberrypi.org/nl-NL/embed/viewer/comic-character-step7" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
<span style="color: #0faeb0">**Lichte en donkere**</span> kleurthema's worden gebruikt bij het ontwerpen van websites en apps. De donkere modus is een kleurenschema waarbij lichte tekst en pictogrammen op donkere achtergronden worden weergegeven. De lichte modus is het tegenovergestelde hiervan. Door de gebruiker deze optie te bieden, wordt de leesbaarheid en toegankelijkheid verbeterd.
</p>

Je `style.css` bestand bevat selectors die gebruikt worden om het kleurenschema van jouw website bij te werken.

--- collapse ---

**Tip:** Dit staat er alleen maar om je eraan te herinneren. Je hoeft het niet nog een keer te schrijven!

---
title: Light mode stijlen
---

--- code ---
---
language: css
filename: style.html
line_numbers: true
line_number_start: 244
---

/*Stijlen voor Light mode */

body.light-mode {
  background: var(--background-colour-light-mode);
  color: var(--text-colour-light-mode);
}

.light-mode .navigation {
  background-color: var(--background-colour-light-mode-navigation);
}

.light-mode .year {
  color: var(--text-colour-light-mode-year);
}

.light-mode .logo {
  color: var(--text-colour-light-mode-logo);
}

.light-mode nav a {
  color: var(--text-colour-light-mode-nav);
}

.light-mode nav a:hover {
  color: var(--text-colour-light-mode-nav-hover);
}

.light-mode .header {
  background: var(--background-colour-light-mode-header);
}

.light-mode footer {
  background: var(--background-colour-light-mode-footer);
  color: var(--text-colour-light-mode-footer);
}

--- /code ---

--- /collapse ---

### Een schakelaar toevoegen aan de koptekst

Je hebt al `<button>` elementen gebruikt om gebeurtenissen te activeren.

Deze keer zal je een selectievakje (`<input type="checkbox">`) gebruiken als een schakelaar, zodat de gebruiker kan veranderen tussen kleurthema's.

--- task ---

Open `index.html`.

Maak een `<div>` element onder het `<nav>` element in de `<header>` sectie.

Geef het het kenmerk `class="switch-container"`.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 19
line_highlights: 20-22
---

      </nav>
      <div class="switch-container">

      </div>
    </header>  
      
--- /code ---

--- /task ---

De schakelaar gebruikt drie elementen: `<label>`, `<input>`, en `<span>`.

Je hebt enkele van deze al gebruikt toen je het personage details formulier maakte.

--- task ---

Binnen de `<div>` tags, voeg een `<label>` toe met het attribuut `class="switch"`.

Voeg binnen de `<label>`-tags toe

- Een `<input>`-element met twee kenmerken: `type="checkbox"` en `id="lightModeSwitch"`
- Een `<span>`-element met het kenmerk `class="switch-slider"`

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 20
line_highlights: 21-24
---

    <div class="switch-container">
      <label class="switch">
        <input type="checkbox" id="lightModeSwitch">
        <span class="switch-slider"></span>
      </label>
      
    </div>
      
--- /code ---

--- /task ---

--- task ---

**Klik op Run**

- **Let op:** De `.switch` selector biedt een styling om de checkbox om te zetten in een schakelaar vorm.

--- /task ---

### Een pictogram toevoegen aan de schakelaar

Je kunt de gebruiker een pictogram laten zien dat de light mode weergeeft in plaats van de zin "light mode".

Google Fonts biedt pictogrammen en een manier om deze aan je website toe te voegen.

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
<span style="color: #0faeb0">**Pictogrammen**</span> zijn een toegankelijke manier om tekst weer te geven, omdat ze universeel worden begrepen.
</p>

Het Google-pictogram is al opgenomen in het `<head>`-element van je webpagina's. De CSS-stijlen zijn ook beschikbaar.

--- collapse ---

---
title: Hoe kan je pictogrammen importeren met behulp van Google fonts
---

Open [fonts.google.com](https://fonts.google.com/icons/){:target="_blank"}. De link wordt geopend in een nieuw tabblad.

![De Google Fonts-pictogrammen pagina met verschillende pictogrammen en de zoekbalk die wordt weergegeven.](images/google-icons.png)
Je kunt zoeken naar pictogrammen. Elk pictogram heeft een unieke naam.

Klik op het pictogram dat je wil toevoegen. Hiermee worden enkele instructies geopend.
![De pagina met Google Fonts-pictogrammen met het 'Home'-pictogram geselecteerd en een instructiepaneel.](images/google-selected-icon.png)

- Pictogrammen toevoegen aan HTML:
  Voeg dit toe in de sectie `<head>` van een HTML-bestand.

    `<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">`

- Gebruik pictogrammen in HTML:
  Voeg een klasse toe aan een HTML-element. Bijvoorbeeld:

   `<span class="material-symbols-outlined">home</span>`

- CSS-styling:
  Voeg de aangepaste stijl van het icoon toe aan je CSS stylesheet. Je kunt het ook aanpassen:

    .material-symbols-outlined {
      font-variation-settings:
      'FILL' 0,
      'wght' 400,
      'GRAD' 0,
      'opsz' 24
    }

--- /collapse ---

--- task ---

Voeg onder de tag `</label>` een `<span>`-element toe met het attribuut `class="switch-label material-symbols-outlined"`.

Voeg de tekst 'light_mode' toe binnen het element `<span>`.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 20
line_highlights: 25
---

    <div class="switch-container">
      <label class="switch">
        <input type="checkbox" id="lightModeSwitch">
        <span class="switch-slider"></span>
      </label>
      <span class="switch-label material-symbols-outlined">light_mode</span>
    </div>
      
--- /code ---

--- /task ---

--- task ---

**Klik op Run**

- Je schakelaar zou rechts in je navigatiebalk moeten verschijnen
- Je kunt op de schakelaar klikken, maar er gebeurt nog niets....!

--- collapse ---

---
title: De schakelaar wordt niet goed weergegeven
---

- Controleer of je spaties hebt gelaten tussen je attributen als er meerdere attributen in een element zitten.

--- /collapse ---

--- /task ---

### Maak een event handler voor jouw schakelaar

--- task ---

Open `scripts.js`.

Zoek de opmerking `// Maak de constante voor de lightmodus`.

Gebruik `querySelector()` om het element te vinden met het attribuut `id="lightModeSwitch"`.

Wijs het toe aan de constante `lightModeSwitch`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 55
line_highlights: 56
---
// Maak de constante voor de lightmodus
const lightModeSwitch = document.querySelector("#lightModeSwitch");

--- /code ---

--- /task ---

--- task ---

Zoek de opmerking `// Light mode function`.

Maak de functie `changeLightMode()`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 58
line_highlights: 59-61
---

// Light mode functie
function changeLightMode(){

}

--- /code ---

--- /task ---

Je hebt een `<input>` element met het attribuut `type="checkbox"` toegevoegd en opgemaakt als een schakelaar.

Je kunt controleren of een schakelaar 'aan' staat met de eigenschap `.checked`.

De waarde van de `.checked` eigenschap is Boolean, wat betekent dat het **waar** (aan) of **onwaar** (uit) kan zijn.

--- task ---

Zorg ervoor dat de functie de waarde van de eigenschap `.checked` van de schakelaar toewijst aan de variabele `isLightMode`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 58
line_highlights: 60
---

// Light mode functie
function changeLightMode(){
  var isLightMode = lightModeSwitch.checked;

}

--- /code ---

--- /task ---

De eigenschap `.classList` retourneert de `class`-kenmerken van een element.

Je kunt de klassenkenmerken van een element aanpassen met behulp van methodes.

Je kunt bijvoorbeeld de klassen van een element toevoegen(add ()), in of uitschakelen(toggle()), of verwijderen(remove()) .

--- collapse ---

---
title: classList methods
---

- Toegang tot een classList:
`element.classList` geeft een lijst van de klassenattributen van het gespecificeerde element weer.

- Een klasse toevoegen: `element.classList.add("className")`

- Een klasse verwijderen: `element.classList.remove("className")`

- Een klasse in- of uitschakelen: `element.classList.toggle("className")` (Als de klasse aanwezig is, wordt deze verwijderd; anders wordt deze toegevoegd.)

- Controleer of een klasse bestaat: `element.classList.contains("className")` retourneert een Booleaanse waarde die bevestigt of het element de opgegeven klasse bevat.

- Vervang een klasse: `element.classList.replace("oldClass", "newClass")` vervangt de opgegeven oude klasse door een nieuwe.

--- /collapse ---

--- task ---

Gebruik de `.toggle` methode om de `light-mode` klasse aan het `<body>` element toe te voegen of te verwijderen.

Hiermee wordt de klasse aan het element toegevoegd als deze er niet is, of verwijderd als deze er wel is.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 58
line_highlights: 61
---

// Light mode functie
function changeLightMode(){
  var isLightMode = lightModeSwitch.checked;
  document.body.classList.toggle("light-mode");

}

--- /code ---

--- /task ---

### Voeg de event-handler toe aan de schakelaar

--- task ---

Open `index.html`.

Voeg de gebeurtenis `onchange="changeLightMode()"` toe aan het schakelaar-element.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 20
line_highlights: 22
---

      <div class="switch-container">
        <label class="switch">
          <input onchange="changeLightMode()" type="checkbox" id="lightModeSwitch">
          <span class="switch-slider"></span>
        </label>
        <span class="switch-label material-symbols-outlined">light_mode</span>
      </div>

--- /code ---

--- /task ---

--- task ---

**Klik op Run**

- Klik op de schakelaar om de light mode te schuiven naar aan
- De kleuren van je webpagina zouden nu moeten veranderen

--- /task ---

### Sla de voorkeur van de gebruiker op

Met deze schakelaar wordt de klasse `light-mode` toegevoegd of verwijderd.

Wanneer de gebruiker naar een andere pagina navigeert (of de huidige pagina opnieuw laadt), gaan de wijzigingen verloren omdat het klassekenmerk `light-mode` niet is ingesteld in het HTML-bestand.

Je hebt een manier nodig om de keuze van de gebruiker te behouden.

Je kunt dit doen met de `localStorage` eigenschap.

`localStorage` houdt gegevens vast als sleutel-waardeparen. Een **sleutel** is een 'label' voor een waarde.

--- collapse ---

---
title: localStorage methoden
---

- setItem(key, value):
  Voegt een sleutel-waardepaar toe aan localStorage.
  Voorbeeld: `localStorage.setItem("gebruikersnaam", "raspberry")`

- getItem(key):
  Haalt de waarde op die aan de opgegeven sleutel is gekoppeld.
  Voorbeeld: `var gebruikersnaam = localStorage.getItem("gebruikersnaam")`

- removeItem(key):
  Verwijdert het sleutel-waardepaar dat aan de opgegeven sleutel is gekoppeld.
  Voorbeeld: `localStorage.removeItem("gebruikersnaam")`

- clear():
  Verwijdert alle sleutel-waardeparen uit localStorage.
  Voorbeeld: `localStorage.clear()`

--- /collapse ---

--- task ---

Open `scripts.js`.

Gebruik de `.setItem`-methode om het sleutel-waardepaar toe te voegen:

- Zet de 'sleutel' (key) op `"lightMode"`
- Stel de 'waarde' (value) in op `isLightMode`, wat de Booleaanse waarde (true of false) van de eigenschap `.checked` van de schakelaar vertegenwoordigt

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 58
line_highlights: 62
---

// Light mode functie
function changeLightMode(){
  var isLightMode = lightModeSwitch.checked;
  document.body.classList.toggle("light-mode");
  localStorage.setItem("lightMode", isLightMode);
}

--- /code ---

--- /task ---

### De voorkeur van de gebruiker ophalen

Wanneer de webpagina wordt geladen, moet je controleren of lightMode was ingesteld.

Hiervoor kun je `addEventListener` gebruiken.

--- collapse ---

---
title: De addEventListener methode
---

Gebruik `.addEventListener` zoals hier:

--- code ---
---
language: js
filename:
line_numbers: false
line_number_start:
line_highlights:
---

element.addEventListener(eventType, callbackFunction);

--- /code ---

- element: Het HTML-element waaraan je de event listener wilt koppelen
- eventType: Het type event waar je naar wilt luisteren (bijv. "click", "keydown", "DOMContentLoaded")
- callbackFunction: De functie die moet worden uitgevoerd wanneer de gebeurtenis plaatsvindt

--- /collapse ---

--- task ---

Gebruik `.addEventListener` om een functie te activeren in reactie op een pagina-load event.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 65
line_highlights: 66-68
---

// Controleer lokale opslag
document.addEventListener("DOMContentLoaded", function () {

});

--- /code ---

`"DOMContentLoaded"` is een `eventType` dat wordt geactiveerd wanneer de webpagina klaar is.

**Tip:** Het is beter om hier `"DOMContentLoaded"` te gebruiken in plaats van het eventType `"load"`, dat alleen wordt geactiveerd wanneer alle afbeeldingen zijn geladen.

--- /task ---

Je hebt de functie nodig om `localStorage` te controleren of de 'waarde' gekoppeld aan de `lightMode` 'sleutel' **'true'** is.

--- task ---

Voeg een `if`-statement toe om te controleren of `lightMode` is ingesteld op `"true"`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 65
line_highlights: 68-70
---

// Controleer lokale opslag
document.addEventListener("DOMContentLoaded", function () {

  if (localStorage.getItem("lightMode") == "true") {

  }

});

--- /code ---

--- /task ---

Als `lightMode` is ingesteld op `"true"`, dan moet je de `.light-mode` klasse toevoegen.

Je kunt hiervoor de `.toggle`-methode van de `classList`-eigenschap gebruiken.

**Tip:** Je kunt ook de `.add` methode gebruiken.

--- task ---

Schakel de klasse `light-mode` in of uit.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 65
line_highlights: 69
---

// Controleer lokale opslag
document.addEventListener("DOMContentLoaded", function () {

  if (localStorage.getItem("lightMode") == "true") {
    document.body.classList.toggle("light-mode");
  }

});

--- /code ---

--- /task ---

Je moet de schakelaar ook als 'aan' weergeven.

Als je dit niet doet, wordt de voorkeur voor de lichtmodus ingesteld, maar staat de schakelaar op 'uit'.

--- task ---

Stel de waarde van de eigenschap `.checked` van de schakelaar in op de Booleaanse waarde `true`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 65
line_highlights: 70
---

// Light mode functie
document.addEventListener("DOMContentLoaded", function () {

  if (localStorage.getItem("lightMode") == "true") {
    document.body.classList.toggle("light-mode");
    lightModeSwitch.checked = true;
  }

});

--- /code ---

--- /task ---

--- task ---

Open `character.html`.

Voeg de HTML voor de schakelaar toe aan de header onder de tag `</nav>`.

--- code ---
---
language: html
filename: character.html
line_numbers: true
line_number_start: 19
line_highlights: 20-26
---

      </nav>
      <div class="switch-container">
        <label class="switch">
          <input onchange="changeLightMode()" type="checkbox" id="lightModeSwitch">
          <span class="switch-slider"></span>
        </label>
        <span class="toggle-label material-symbols-outlined">light_mode</span>
      </div>
    </header>  

--- /code ---

--- /task ---

--- task ---

**Klik op Run**

- Je schakelaar zou in je navigatiebalk aan de rechterkant moeten verschijnen
- Klik op de schakelaar om deze aan en uit te zetten en de thema-kleuren te zien veranderen
- Ga naar de pagina `index.html` om te controleren of jouw voorkeur voor de lichtmodus aan blijft staan

--- /task ---

Goed gedaan! Je hebt een schakelaar gemaakt waarmee de gebruiker het kleurenthema kan wijzigen.

Vervolgens ga je een hero slider aan je website toevoegen, zodat de gebruiker verschillende afbeeldingen kan bekijken!
