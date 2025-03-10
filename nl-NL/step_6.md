## Controleer gebruikersinvoer

In deze stap controleer je of de gebruiker het formulier heeft ingevuld en waarschuw je de gebruiker als hij of zij een onderdeel heeft gemist.

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/comic-character-step6?page=character.html" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

Op dit moment kan de gebruiker de informatie opslaan, zelfs als hij sommige formuliervelden leeg heeft gelaten.

Je moet een nieuwe functie maken die controleert of de gebruiker alle formuliervelden heeft ingevuld voordat de `displaySummary()` functie wordt aangeroepen.

### Wijzig de functie voor de knop Maken

\--- task ---

Open `character.html`.

Wijzig de functie die de `onclick`-gebeurtenis van de knop Maken afhandelt.

## --- code ---

language: html
filename: character.html
line_numbers: true
line_number_start: 33
line_highlights: 35
--------------------------------------------------------

```
    <label for="origin-text">Oorsprongsverhaal:</label>   
    <textarea id="origin-text" placeholder="Add your superhero origin story!"></textarea>
    <button onclick="checkForm()">Maken</button>
```

\--- /code ---

\--- /task ---

### Maak een gebied om een waarschuwing te tonen

Je moet een waarschuwing tonen aan de gebruiker als een deel van het formulier leeg is.

\--- task ---

Maak een leeg `<div>`-element met het kenmerk `id="alert"` onder de knop Maken.

## --- code ---

language: html
filename: character.html
line_numbers: true
line_number_start: 33
line_highlights: 35-36
-----------------------------------------------------------

```
    <label for="origin-text">Oorsprongsverhaal:</label>
    <textarea id="origin-text" placeholder="Add your superhero origin story!"></textarea>
    <div id="alert"> 
    </div>
    <button onclick="checkForm()">Maken</button>
  </section>
```

\--- /code ---

\--- /task ---

### Maak een waarschuwingsbericht

Je moet de inhoud van de waarschuwings `<div>` bijwerken met een bericht.

\--- task ---

Open `scripts.js`.

Gebruik `querySelector()` om het `<div>`-element met het kenmerk `id="alert"` te vinden.

Wijs dit toe aan een constante `alertBox`.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 32
--------------------------------------------------------

// Functie om het formulier met personage details te controleren
const alertBox = document.querySelector("#alert");

\--- /code ---

\--- /task ---

Je hebt een nieuwe 'checkForm()' functie nodig om elk veld op je formulier te controleren voor een lege waarde.

Als er een lege waarde is, wordt er een waarschuwing aan de gebruiker getoond in de `alertBox`.

De `alertBox` `<div>` wordt verborgen totdat deze nodig is.

### Maak de checkForm() functie

\--- task ---

Maak de functie `checkForm()`.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 34-36
-----------------------------------------------------------

// Functie om het formulier met personage details te controleren
const alertBox = document.querySelector("#alert");

function checkForm(){

}

\--- /code ---

\--- /task ---

### Maak een variabele om een waarschuwingsbericht in op te slaan

Je hebt een variabele nodig om een waarschuwingsbericht in op te slaan als de functie een lege waarde vindt.

\--- task ---

Maak de variabele `alertMessage` aan en wijs een lege tekenreeks toe (`""`).

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 36
--------------------------------------------------------

// Functie om het formulier met personage details te controleren
const alertBox = document.querySelector("#alert");

function checkForm(){

var alertMessage = "";

}

\--- /code ---

\--- /task ---

\--- collapse ---

---

## title: Wat is een variabele?

Een variabele is een gebied in het computergeheugen met een naam dat een waarde bevat.

De waarde kan worden gewijzigd terwijl het programma wordt uitgevoerd.

Bijvoorbeeld, `var leeftijd = 10;`

- `leeftijd` is de naam van de variabele.
- Er is de waarde `10` aan toegekend.

\--- /collapse ---

### Controleer of de gebruiker een naam voor de superheld heeft ingevoerd

Controleer elk veld om te zien of het leeg is.

Begin met het eerste veld, `characterName`, welke het HTML-element bevat met het attribuut `id="naam-text"`.

De `.value` eigenschap van een formulier zal leeg zijn als de gebruiker deze heeft gemist.

\--- task ---

Gebruik een `if` statement om te controleren of de waarde `characterName` leeg is.

**Let op:** De operator `==` wordt gebruikt. Het betekent 'is hetzelfde als'.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 38-40
-----------------------------------------------------------

// Functie om het formulier met personage details te controleren
const alertBox = document.querySelector("#alert");

function checkForm(){

var alertMessage = "";

if (characterName.value == ""){

}

}

\--- /code ---

\--- /task ---

In het `if` statement moet je code uitvoeren als het resultaat **true** is (wat betekent dat `characterName` leeg **is**).

\--- task ---

Wijs `alertMessage` een string toe als de voorwaarde waar is.

De string moet een bericht zijn dat de gebruiker vertelt wat er moet gebeuren als het veld **Naam van je superheld** leeg is gelaten.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 39
--------------------------------------------------------

// Functie om het formulier met personage details te controleren
const alertBox = document.querySelector("#alert");

function checkForm(){

var alertMessage = "";

if (characterName.value == ""){
alertMessage = "Voer een naam in";
}

}

\--- /code ---

\--- /task ---

### Toon een waarschuwing

Wanneer je `alertMessage` hebt aangemaakt, heb je een lege tekenreeks toegewezen (`""`).

Als het **Naam van je superheld** veld leeg is, stel je `alertMessage` in op een bericht om de gebruiker te waarschuwen.

Je wilt de waarschuwing alleen weergeven als er een bericht in `alertMessage` staat.

Dus moet je nu controleren of `alertMessage` **geen** lege tekenreeks is.

\--- task ---

Gebruik een 'if' statement om te controleren of de variabele 'alertMessage' **geen** lege string is (wat betekent dat het een bericht is toegewezen voor de gebruiker).

**Let op:** De operator `!=` wordt gebruikt. Het betekent 'is **niet** hetzelfde als'.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 42-44
-----------------------------------------------------------

// Functie om het formulier met personage details te controleren
const alertBox = document.querySelector("#alert");

function checkForm(){

var alertMessage = "";

if (characterName.value == ""){
alertMessage = "Voer een naam in";
}

if (alertMessage != ""){

}
}

\--- /code ---

\--- /task ---

Als `alertMessage` een bericht voor de gebruiker bevat, moet je de `.innerText` inhoud van `alertBox` instellen op dat bericht.

\--- task ---

Stel de `.innerText` inhoud van `alertBox` in op de string opgeslagen in `alertMessage`.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 43
--------------------------------------------------------

// Functie om het formulier met personage details te controleren
const alertBox = document.querySelector("#alert");

function checkForm(){

var alertMessage = "";

if (characterName.value == ""){
alertMessage = "Voer een naam in";
}

if (alertMessage != ""){
alertBox.innerText = alertMessage;

}
}

\--- /code ---

\--- /task ---

De `display` eigenschap voor de `#alert` selector is standaard ingesteld op `none`, dus het waarschuwingsveld wordt verborgen wanneer de pagina wordt geladen.

\--- collapse ---

---

## title: Bekijk de waarschuwings CSS-selector

## --- code ---

language: css
filename: style.css
line_numbers: false
line_number_start:
line_highlights: 4
-------------------------------------------------------

\#alert {
text-align: center;
color: var(--text-colour-alert);
display: none;
}

\--- /code ---

\--- /collapse ---

Als er een bericht is om te laten zien aan de gebruiker, moet je het waarschuwingsveld laten verschijnen.

\--- task ---

In je nieuwe `if` statement zet je de `display` eigenschap voor de `#alert` selector op `block`.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 44
--------------------------------------------------------

// Functie om het formulier met personage details te controleren
const alertBox = document.querySelector("#alert");

function checkForm(){

var alertMessage = "";

if (characterName.value == ""){
alertMessage = "Voer een naam in";
}

if (alertMessage != ""){
alertBox.innerText = alertMessage;
alertBox.style.display = "block";
}
}

\--- /code ---

\--- /task ---

\--- task ---

**Klik op Run**

- Laat het veld Naam van je superheld leeg
- Klik op de knop Maken
- Het waarschuwingsbericht wordt weergegeven

\--- /task ---

### Verberg de waarschuwing en toon de samenvatting

Je moet een `else` statement gebruiken om de waarschuwing te verbergen (en de samenvatting te laten zien) als `alertMessage` nog steeds op een lege string staat (`""`).

Dit is een andere manier om na te denken over hoe de `else` statement werkt met de `if` statement:

```
Als het waarschuwingsbericht niet "" is
  - toon de waarschuwing.
Anders (else)
  - verberg de waarschuwing.
  - toon de samenvatting.
```

\--- task ---

Gebruik een `else` statement om de `display` eigenschap voor de `#alert` selector op `none` te zetten en roep de `displaySummary()` functie aan.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 45-48
-----------------------------------------------------------

// Functie om het formulier met personage details te controleren
const alertBox = document.querySelector("#alert");

function checkForm(){

var alertMessage = "";

if (characterName.value == ""){
alertMessage = "Voer een naam in";
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

\--- /task ---

\--- task ---

**Klik op Run**

- Vul het Naam van je superheld veld in
- Klik op de knop Maken
- Het waarschuwingsbericht wordt **niet** weergegeven
- De samenvatting wordt weergegeven

**Let op:** De secties over vaardigheden en het oorsprongsverhaal zijn leeg

\--- collapse ---

---

## title: De samenvatting sectie wordt niet weergegeven

- Controleer of je haakjes `()` gebruikt hebt in je `if` en `else` statements, bijvoorbeeld `if (characterName.value == "")`
- Controleer of je de `displaySummary()` functie in je `else` blok hebt aangeroepen

\--- /collapse ---

\--- /task ---

### Controleer het veld Vaardigheid

Je hebt een `if` statement gebruikt om te controleren of de waarde `characterName` leeg is.

Als het **niet** leeg is, moet je `else if` statements gebruiken om de andere formuliervelden te controleren.

Dit is een andere manier om na te denken over hoe `else if` statements werken met het `if` statement:

```
Als characterName "" is
  - een waarschuwing instellen.
Anders (else) als characterAbility "" is
  - een waarschuwing instellen.
Anders (else) als characterOrigin "" is
  - een waarschuwing instellen.
```

\--- collapse ---

---

## title: Waarom kun je niet drie if-statements gebruiken?

**Tip:** Als je `if` gebruikt met 'else if`statements betekent dat als een voorwaarde 'true' (waar) is, volgende`else if`boodschappen worden genegeerd. Dit bespaart middelen en tijd. Als meerdere`if\` statements worden gebruikt, worden alle 'if' statements gecontroleerd, zelfs als al aan één voorwaarde is voldaan.

In dit formulier wordt de gebruiker gewaarschuwd over het eerste lege veld.

\--- /collapse ---

\--- task ---

Gebruik een `else if` statement om te controleren of de waarde `characterAbility` leeg is.

Als dat zo is, wijs dan een string toe aan `alertMessage`.

De tekenreeks moet een bericht zijn dat de gebruiker vertelt wat hij moet doen als het **Vaardigheid** veld leeg is gelaten.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 40-42
-----------------------------------------------------------

// Functie om het formulier met personage details te controleren
const alertBox = document.querySelector("#alert");

function checkForm(){

var alertMessage = "";

if (characterName.value == ""){
alertMessage = "Voer een naam in";
} else if (characterAability. alue == "") {
alertMessage = "Kies een vaardigheid";
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

\--- /task ---

\--- task ---

### Controleer het veld Oorsprongsverhaal

Gebruik een ander `else if`-statement om de waarde van `characterOrigin` te controleren.

Voeg een waarschuwingsbericht toe dat aan de gebruiker wordt weergegeven als het veld leeg is.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 42-44
-----------------------------------------------------------

// Functie om het formulier met personage details te controleren
const alertBox = document.querySelector("#alert");

function checkForm(){

var alertMessage = "";

if (characterName.value == "") {
alertMessage = "Voer een naam in";
} else if (characterAbility.value == "") {
alertMessage = "Kies een vaardigheid";
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

\--- /task ---

\--- task ---

**Klik op Run**

- Typ waarden in een aantal velden van het formulier, maar laat ook een aantal velden leeg.
- Klik op de knop Maken. Er wordt een waarschuwingsbericht weergegeven voor elk veld dat je leeg gelaten hebt.
- Test dit een paar keer met een verschillende formuliervelden.
- Vul alle formuliervelden in. Klik op Maken om het overzicht te bekijken.

\--- collapse ---

---

## title: Ik zou waarschuwingen moeten krijgen maar dat gebeurt niet

- Controleer of je `.value` hebt toegevoegd na `characterName`, `characterAbility`, en `characterOrigin`.

\--- /collapse ---

\--- /task ---

Goed zo! Je hebt controles en waarschuwingen gemaakt om de gebruiker te helpen bij het maken van zijn of haar superheld!

Vervolgens ga je een schakelaar maken zodat de gebruiker kan veranderen tussen light en dark (licht en donker) mode!
