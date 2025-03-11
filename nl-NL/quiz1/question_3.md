--- question ---

---
legend: Vraag 3 van 3
---

Je hebt een JavaScript-functie gebruikt om 'buiten bereik' problemen met je hero image slider te verwerken.

Hoeveel afbeeldingen kan deze code verwerken?

--- code ---
---
language: JavaScript
filename: scripts.js
line_numbers: true
line_number_start: 
line_highlights: 
---

if (currentHeroIndex < 0){
  currentHeroIndex = 3;
} else if (currentHeroIndex > 3) {
  currentHeroIndex = 0;
}

--- /code ---

--- choices ---

- ( ) 0

  --- feedback ---

  Onjuist. `0` is het index nummer van de eerste afbeelding.

  --- /feedback ---

- ( ) 3

  --- feedback ---

  Niet helemaal! `3` is het laatste index nummer. Indexering begint bij `0`.

  --- /feedback ---

- (x) 4

  --- feedback ---

  Juist! `currentHeroIndex` bevat vier items, beginnend bij index `0` en eindigend op index `3`.

  --- /feedback ---

--- /choices ---

--- /question ---
