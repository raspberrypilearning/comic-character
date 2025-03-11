--- question ---

---
legend: Question 3 sur 3
---

Tu as utilisé une fonction JavaScript pour gérer les problèmes de « out of range » avec ton slider Hero.

Combien d'images ce code est-il censé gérer ?

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

  Incorrect. `0` est le numéro d'index de la première image.

  --- /feedback ---

- ( ) 3

  --- feedback ---

  Pas tout à fait ! `3` est le numéro d'index final. L'indexation commence à `0`.

  --- /feedback ---

- (x) 4

  --- feedback ---

  Correct ! `currentHeroIndex` contient quatre éléments, commençant à l'index `0` et finissant à l'index `3`.

  --- /feedback ---

--- /choices ---

--- /question ---
