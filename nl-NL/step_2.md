## Voeg copyrightbericht toe aan voettekst

In deze stap maak je een copyrightbericht en een functie om het automatisch te updaten naar het huidige jaar. Je gaat dit toevoegen aan je voettekst sectie.

<iframe src="https://editor.raspberrypi.org/nl-NL/embed/viewer/comic-character-step2" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
<span style="color: #0faeb0">**Auteursrecht**</span> is een juridische bescherming die mensen ervan weerhoudt andermans werk te gebruiken (bijvoorbeeld websites, afbeeldingen, muziek) zonder hun toestemming.
</p>

In modern webdesign bevatten websites een voettekstsectie waarin een copyrightmelding wordt weergegeven.

Een copyrightbericht bevat meestal:

- Een copyrightsymbool Ⓒ
- De naam van de eigenaar van de website
- Het jaar dat de inhoud werd gepubliceerd

--- task ---

Open het [Stripfiguur starter project](https://editor.raspberrypi.org/nl-NL/projects/comic-character-starter){:target="_blank"}.

--- /task ---

Je startproject bevat:

- Twee HTML-pagina's met wat inhoud
- Een CSS-bestand dat styling bevat voor een deel van de inhoud
- De afbeeldingen die je in het project gaat gebruiken
- Een JavaScript-bestand om jouw website interactief en interessant te maken

Dit project bevat al een navigatiebalk en een hero image, die je hebt geleerd te maken in [Welkom bij Antarctica](https://projects.raspberrypi.org/nl-NL/projects/welcome-to-antarctica).

Het **JavaScript** bestand dat je gaat gebruiken is al gekoppeld aan je webpagina's net voor de afsluitende `</body>` tag.

Het **CSS** bestand dat je gaat gebruiken is ook gekoppeld aan je webpagina's.

### Inhoud toevoegen aan je voettekst sectie

--- task ---

Open het `index.html` bestand.

Zoek het `footer`-element.

Voeg een `<p>` element toe met het copyright bericht.

(Je kunt de fictieve naam `Malik Johnson` vervangen door een naam naar keuze.)

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 32
line_highlights: 33
---

      <footer>
        <p> Ⓒ Malik Johnson - Alle rechten voorbehouden</p>
      </footer>

--- /code ---

--- /task ---

--- task ---

Voeg een `<span>`-element toe met het kenmerk `id="copyrightYear"` tussen het Ⓒ-symbool en de naam.

Het 'id'-attribuut wordt gebruikt om een unieke id voor een HTML-element op te geven.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 32
line_highlights: 33
---

      <footer>
        <p> Ⓒ <span id="copyrightYear"></span> Malik Johnson - Alle rechten voorbehouden</p>
      </footer>

--- /code ---

--- /task ---

--- task ---

**Klik op Run**

- Het copyright bericht wordt getoond aan de onderkant (voettekst) van je webpagina.

**Let op:** Er wordt nog geen datum weergegeven.

--- /task ---

Er staat geen tekst in het `<span>` element.

JavaScript wordt gebruikt om de inhoud van `<span>` bij te werken, zodat het huidige jaar wordt weergegeven.

### Het huidige jaar weergeven

JavaScript heeft een `Date()` functie die de huidige datum en tijd weergeeft, met behulp van de tijdzone van de browser.

--- collapse ---

---
title: Bekijk een voorbeeld
---

Een aanroep van `Date()` retourneert een string.

Dit is het resultaat van de aanroep van `Date()` toen deze pagina werd geladen:

<iframe src="https://editor.raspberrypi.org/nl-NL/embed/viewer/comic-character-date" width="100%" height="100" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

--- /collapse ---

--- task ---

Open `scripts.js`.

Maak een constante `currentDate` aan om een nieuw `Date()` object in op te slaan.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 1
line_highlights: 2
---

     // Update Copyright Jaar functie 
     const currentDate = new Date();

--- /code ---

--- /task ---

--- collapse ---

---
title: Wat is een constante?
---

Een constante is een datawaarde waaraan een naam is gegeven.

De waarde kan niet door het programma worden gewijzigd.

--- /collapse ---

Het huidige jaar wordt toegevoegd aan het `<span>` element dat je eerder hebt gemaakt.

JavaScript kan worden gebruikt om HTML-elementen te vinden en te wijzigen.

Om toegang te krijgen tot het `<span>` element, moet je het 'selecteren' en gebruik maken van de object model methode: `querySelector()`.

--- collapse ---

---
title: Wat is het document object model?
---

Het document object model (DOM) biedt een manier voor JavaScript (en andere programmeertalen) om te communiceren met webpagina-elementen.

Het geeft de structuur van een webpagina (document) weer.

`querySelector()` is een DOM methode die het eerste element van jouw webpagina weergeeft die overeenkomt met een opgegeven CSS selector (bijv. `#copyrightYear`)

--- /collapse ---

--- task ---

Gebruik de `querySelector()` methode om het element in het webpagina document te vinden met het kenmerk `id="copyrightYear"`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 1
line_highlights: 3
---
    // copyrightYear-functie bijwerken 
    const currentDate = new Date();
    document.querySelector("#copyrightYear")

--- /code ---

--- /task ---

De querySelector vindt het hele `<span>`-element.

Je hoeft alleen de tekst **binnen** het element te wijzigen.

De `.innerText` eigenschap kan worden gebruikt om te verwijzen naar de tekst van een HTML-element.

De `currentDate` constante bevat de volledige datum, geretourneerd door de `Date()` functie, maar je hebt alleen het vier-cijferige jaar deel van de datum nodig.

Je kunt hiervoor de `.getFullYear()` methode gebruiken.

--- task ---

Stel de `.innerText` inhoud van de `<span>` met het attribuut `id="copyrightYear"` naar het huidige vier-cijferige jaar.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 1
line_highlights: 3
---
     // copyrightYear-functie bijwerken 
     const currentDate = new Date();
     document.querySelector("#copyrightYear").innerText = currentDate.getFullYear();

--- /code ---

--- /task ---

--- task ---

**Klik op Run**

- Het huidige jaar zou in het copyrightbericht moeten worden weergegeven.

--- collapse ---

---
title: Het jaar wordt niet weergegeven

- Controleer of er een `#` in `copyrightYear` in de `querySelector` staat
- Controleer of er openings- en sluitingshaakjes `()` aan het einde van `.getFullYear()` staan
- Controleer de spelling van `querySelector` en `.getFullYear` (inclusief de hoofdletters)
- Controleer of er een `;` aan het einde van regel 2 en 3 staat

--- /collapse ---

--- /task ---

--- task ---

Open `index.html`.

Kopieer (CTRL + C of CMD + C) het element `<p>` in de voettekst.

--- /task ---

--- task ---

Open het `character.html` bestand.

Zoek het `footer`-element.

Plak (CTRL + V of CMD + V) het `<p>` element dat je eerder hebt gekopieerd.

--- code ---
---
language: html
filename: character.html
line_numbers: true
line_number_start: 27
line_highlights: 28
---

      <footer>
        <p><span id="copyrightYear"></span> Ⓒ Malik Johnson - Alle rechten voorbehouden</p>
      </footer>

--- /code ---

**Vergeet niet:** Je hebt misschien de fictieve naam `Malik Johnson` veranderd in een naam van je keuze.

--- /task ---

--- task ---

**Klik op Run**

- Het copyright bericht wordt getoond aan de onderkant (voettekst sectie) van je webpagina
- Het zal het jaar bevatten

--- /task ---

--- collapse ---

---
title: Welke andere datum methoden kan ik gebruiken?
---

Specifieke onderdelen van de datum en tijd ophalen:

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth(); // (0 = Januari, 11 = December)
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const milliseconds = currentDate.getMilliseconds();


--- /collapse ---

Goed gedaan! Je hebt dynamische inhoud toegevoegd aan je webpagina's!

Vervolgens ga je een interactieve webpagina ontwerpen waar de gebruiker zijn eigen personage kan maken.
