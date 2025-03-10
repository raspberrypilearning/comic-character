## Créer un slider d'image Hero

Dans cette étape, tu créeras un slider interactif d'images Hero pour ta page web.

L'utilisateur peut utiliser des boutons pour se déplacer vers l'image Hero suivante ou précédente.

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/comic-character-complete" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### Le code HTML de l'image Hero

Le style HTML et CSS t'est fourni.

Voici le code HTML :

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 28
line_highlights:
-----------------------------------------------------

```
  <main>
    <div class="hero-container">
      <div class="hero-slider">
        <span class="hero-slide active"><img src="stacey-hero.jpg" alt="A superhero character with blonde hair, wearing a blue costume and red cape, in front of a blue and yellow background"></span>
        <span class="hero-slide"><img src="safina-cape.jpg" alt="A superhero character with black hair, wearing a red and white costume and blue cape, in front of a blue and yellow background"></span>
        <span class="hero-slide"><img src="layton-slider.jpg" alt="A superhero character with blonde hair, wearing a blue costume and red cape, in front of a blue background"></span>
      </div>
      <button class="hero-nav-btn prev" onclick="changeHero(-1)">❮</button>
      <button class="hero-nav-btn next" onclick="changeHero(+1)">❯</button>
    </div>
  </main>
```

\--- /code ---

\--- collapse ---

---

## title: J'ai besoin de l'explication HTML

**Lignes 31, 32 et 33 :**

- Les éléments `<span>` contiennent les images Hero
  - Elles ont toutes le même attribut : `class="hero-slide"`
- La classe `active` est utilisée pour montrer une image particulière

**Lignes 35 et 36 :**

- Boutons utilisés pour naviguer à gauche `<` et à droite `>`
- La fonction JavaScript `changeHero()` est utilisée comme gestionnaire d'événements pour les pressions sur les boutons
  - Lorsque le bouton `<` est cliqué, la fonction `changeHero()` est appelée avec l'argument `-1`
  - Lorsque le bouton `>` est cliqué, la fonction `changeHero()` est appelée avec l'argument `+1`

\--- /collapse ---

### Trouver toutes les images

Tu as utilisé `querySelector()` dans les étapes précédentes pour trouver le premier élément qui correspond au sélecteur CSS spécifié.

Tu peux utiliser `querySelectorAll()` pour trouver et renvoyer une liste des éléments **tous** `<span>`.

\--- task ---

Ouvre `scripts.js`.

Trouve le commentaire `// Fonction Change Hero`.

Utilise `querySelectorAll()` pour renvoyer une liste de tous les éléments avec l'attribut `class="hero-slide"`.

Attribue la liste à une constante `heroSlides`.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 75
line_highlights: 76
--------------------------------------------------------

// Fonction Change Hero
const heroSlides = document.querySelectorAll('.hero-slide');

\--- /code ---

\--- /task ---

### Suis l'image Hero actif

Le premier élément de la liste renvoyée dans `heroSlides` est à l'index 0.

```
 ___________   ___________   ___________  
| Element 1 | | Element 2 | | Element 3 |
 ‾‾‾‾‾‾‾‾‾‾‾   ‾‾‾‾‾‾‾‾‾‾    ‾‾‾‾‾‾‾‾‾‾‾
|  Index 0  | |  Index 1  | |  Index 2  |
```

Ce sera la première image active dans le slider.

\--- task ---

Crée la variable `currentHeroIndex` et attribue-lui la valeur `0`.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 75
line_highlights: 77
--------------------------------------------------------

// Fonction Change Hero
const heroSlides = document.querySelectorAll('.hero-slide');
var currentHeroIndex = 0;

\--- /code ---

\--- /task ---

### Créer la fonction changeHero()

La fonction `changeHero()` est appelée lorsque l'utilisateur se déplace à l'image suivante ou précédente.

\--- task ---

Trouve le commentaire `// Fonction Change Hero`.

Crée une fonction `changeHero()` avec le paramètre `direction`.

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
Un <span style="color: #0faeb0">**parameter**</span> agit comme un placeholder pour une valeur utilisée par la fonction.
</p>

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 75
line_highlights: 79-81
-----------------------------------------------------------

// Fonction Change Hero
const heroSlides = document.querySelectorAll('.hero-slide');
var currentHeroIndex = 0;

function changeHero(direction) {

}

\--- /code ---

\--- /task ---

### Supprimer l'image active

La fonction `changeHero()` doit mettre à jour l'image actuelle.

Tout d'abord, elle supprime la classe `active` de l'élément `<span>`.

\--- task ---

Supprime la classe `active` de l'élément dans `currentHeroIndex` dans la liste `heroSlides`.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 75
line_highlights: 81
--------------------------------------------------------

// Fonction Change Hero
const heroSlides = document.querySelectorAll('.hero-slide');
var currentHeroIndex = 0;

function changeHero(direction) {

heroSlides[currentHeroIndex].classList.remove("active");

}

\--- /code ---

Les crochets sont utilisés pour faire référence à la position de l'élément dans la liste.

Donc, `heroSlides[currentHeroIndex]` est l'élément à la position `currentHeroIndex` dans la liste `heroSlides`.

\--- /task ---

### Mettre à jour l'index actuel

La fonction modifie le `currentHeroIndex`.

Elle ajoute `1` ou soustrait `1`, selon la valeur `direction` transmise à la fonction.

- Lorsque le bouton `<` est cliqué, la fonction `changeHero()` est appelée avec l'argument `-1`
- Lorsque le bouton `>` est cliqué, la fonction `changeHero()` est appelée avec l'argument `+1`

\--- task ---

Mettre à jour la valeur de `currentHeroIndex`.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 75
line_highlights: 82
--------------------------------------------------------

// Fonction Change Hero
const heroSlides = document.querySelectorAll('.hero-slide');
var currentHeroIndex = 0;

function changeHero(direction) {

heroSlides[currentHeroIndex].classList.remove("active");
currentHeroIndex = currentHeroIndex + direction;

}

\--- /code ---

\--- /task ---

### Gérer les « out of range »

Il y a trois éléments dans la liste `heroSlides`.

Ils sont aux index `0`, `1`, et `2`.

Si la valeur de la variable `currentHeroIndex` est `2`, alors l'appel de `changeHero(+1)` la changera en `3`.

🚨 Mais il n'y a pas d'index `3` 🚨

Si la valeur de la variable `currentHeroIndex` est `0`, alors l'appel de `changeHero(-1)` la changera en `-1`.

🚨 Mais il n'y a pas d'index `-1` 🚨

Tu as besoin d'un moyen de gérer ces problèmes « out of range » !

Voici comment :

- Si la valeur de `currentHeroIndex` est inférieure à `0`, définis-la sur le dernier index de la liste (`2`)
- Si la valeur de `currentHeroIndex` est supérieure à `2`, définis-la à `0`

\--- task ---

Utilise une instruction `if` avec une instruction `else if` pour gérer les problèmes « out of range ».

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 75
line_highlights: 84-88
-----------------------------------------------------------

// Fonction Change Hero
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

\--- /code ---

\--- /task ---

### Définir la nouvelle image active

Tu dois rendre l'élément actif à l'index actuel.

\--- task ---

Ajoute la classe `active` à l'élément à l'index courant.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 75
line_highlights: 90
--------------------------------------------------------

// Fonction Change Hero
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

\--- /code ---

\--- /task ---

\--- task ---

Ouvre `index.html`.

**Clique sur Run**

- Clique sur le bouton gauche (<) sur ton slider d'image Hero, l'image doit changer
- Clique sur le bouton droit (>) sur ton slider d'image Hero, l'image doit changer

\--- collapse ---

---

## title: Les boutons ne fonctionnent pas correctement

- Assure-toi d'avoir utilisé le symbole 'moins que ' `<` ou le symbole 'plus que' `>` aux bons endroits.

\--- /collapse ---

\--- /task ---

C'est super !

Tu as créé un site web interactif pour que l'utilisateur puisse créer son propre personnage de super-héros. Tu as vérifié l'entrée de l'utilisateur et autorisé l'utilisateur à choisir un thème pour le site web.

Vérifie que tu as bien compris le projet en utilisant le questionnaire de réflexion à l'étape suivante.
