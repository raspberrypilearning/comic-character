## Améliorer ton projet

Si tu as le temps, tu peux :

- Ajouter plus de pouvoirs dans `character.html`
- Ajouter plus d'éléments de formulaire à ton formulaire de création de super-héros
- Ajouter plus d'images à ton slider Hero

--- collapse ---

---
title: Ajouter plus de pouvoirs au formulaire de création de super-héros
---

--- code ---
---
language: html
filename: character.html
line_numbers: false
line_number_start:
line_highlights:
---

        <label for="ability-choice">Pouvoir :</label>
        <select id="ability-choice">
          <option value="">Choisir une option</option>
          <option value="Flight">Vol</option>
          <option value="Invisibility">Invisibilité</option>
          <option value="Time travel">Voyage dans le temps</option>
          <option value="Telepathy">Télépathie</option>
          <option value="Visions">Visions</option>
          <option value="Stretch">Étirement</option>
          <option value="Shapeshift">Métamorphose</option>
          <option value="Speedstar">Speedstar</option>
          <option value="Ice">Glace</option>
        </select>

--- /code ---

--- /collapse ---

--- collapse ---

---
title: Ajouter plus de champs au formulaire
---

### Exemple : ajouter un pays d'origine du personnage

- Ajouter du code HTML dans `character.html`

--- code ---
---
language: html
filename: character.html
line_numbers: false
line_number_start:
line_highlights:
---

        <label for="country-choice">D'où vient ton héros ?:</label>
        <select id="country-choice">
          <option value="">Choisir une option</option>
          <option value="Space">Espace</option>
          <option value="Wakanda">Wakanda</option>
          <option value="USA">États-Unis</option>
          <option value="UK">Royaume-Uni</option>
          <option value="India">Inde</option>
          <option value="China">Chine</option>
          <option value="Nigeria">Nigeria</option>
          <option value="Australia">Australie</option>
          <option value="South Africa">Afrique du Sud</option>
        </select>

--- /code ---

- Mettre à jour JavaScript sur `scripts.js`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 8, 15, 41, 42
---

// Créer des constantes pour le formulaire du super-héros
const characterDetails = document.querySelector("#character-details");
const summary = document.querySelector("#summary-section");

const name = document.querySelector("#name-text");
const characterAbility = document.querySelector("#ability-choice");
const characterCountry = document.querySelector("#country-choice");
const characterOrigin = document.querySelector("#origin-text");

// Fonction pour afficher le résumé
function displaySummary() {
  const summaryParagraph = document.querySelector("#summary-paragraph");

  summaryParagraph.textContent = `Le nom de ton super-héros est ${characterName.value}. 
  Son pouvoir est ${characterAbility.value}. Il vient de ${characterCountry.value}.
  Son histoire est ${characterOrigin.value}.`;

  characterDetails.style.display = "none";
  summary.style.display = "flex";
}

// Fonction pour modifier le résumé
function changeSummary() {
  characterDetails.style.display = "flex";
  summary.style.display = "none";
}

// Fonction pour vérifier le formulaire des informations du personnage
const alertBox = document.querySelector("#alert");

function checkForm(){

  var alertMessage = "";

  if (characterName.value == ""){
    alertMessage = "Veuillez saisir un nom";
  } else if (characterAbility.value == "") {
    alertMessage = "Veuillez choisir un pouvoir";
  } else if (characterCountry.value == "") {
    alertMessage = "Veuillez choisir d'où vient votre héros";
  } else if (characterOrigin.value == "") {
    alertMessage = "Veuillez écrire l'histoire";
  }

  if (alertMessage != ""){
    alertBox.innerText = alertMessage;
    alertBox.style.display = "block";
  } else {
    alertBox.style.display = "none";
    displaySummary();
  }
}

--- /code ---

--- /collapse ---

--- collapse ---

---
title: Ajouter plus d'images Hero au slider
---

Il existe d'autres images que tu peux utiliser pour ton slider Hero dans les projets de démarrage :

`kwame-cape.jpg` et `ellenhero-image.jpg`

Tu peux ajouter plus d'images à ton slider en mettant à jour `index.html` et `scripts.js`.

--- code ---
---
language: html
filename: index.html
line_numbers: false
line_number_start:
line_highlights:
---

      <div class="hero-container">
        <div class="hero-slider">
          <span class="hero-slide active"><img src="stacey-hero.jpg" alt="Un personnage de super-héros aux cheveux blonds, vêtu d'un costume bleu et d'une cape rouge, devant un arrière-plan bleu et jaune."></span>
          <span class="hero-slide"><img src="safina-cape.jpg" alt="Un personnage de super-héros aux cheveux noirs, portant un costume rouge et blanc et une cape bleue, devant un arrière-plan bleu et jaune."></span>
          <span class="hero-slide"><img src="layton-slider.jpg" alt="Un personnage de super-héros aux cheveux blonds, portant un costume bleu et une cape rouge, devant un arrière-plan bleu."></span>
          <span class="hero-slide"><img src="kwame-cape.jpg" alt="Un personnage de super-héros en costume de super-héros se tenant fièrement devant une majestueuse chaîne de montagnes."></span>
          <span class="hero-slide"><img src="ellenhero-image.jpg" alt="Un personnage de super-héros vêtu d'une cape rouge et d'une chemise bleue se tient devant des montagnes."></span>
      </div>

--- /code ---

Lorsque tu as plus d'images Hero, tu dois modifier les instructions `if` et `else if` pour gérer la longueur plus longue de `currentHeroIndex` qui sera renvoyée par `querySelectorAll`.

Si tu as cinq images, tu devras modifier le code comme ceci :

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 75
line_highlights: 85-86
---

// Fonction Change Hero
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

--- /code ---

Si tu souhaites gérer un certain nombre d'images, alors au lieu de gérer une longueur fixe, tu peux simplement vérifier la longueur de `currentHeroIndex`.

La propriété `.length` renvoie le nombre d'éléments dans une liste.

- Si la valeur de `currentHeroIndex` est inférieure à `0`, définis-le au dernier index de la liste (à l'index qui est le même que la longueur de la liste moins 1)
- Si la valeur de `currentHeroIndex` est plus grande que le dernier index de la liste, définis-la à `0`

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 75
line_highlights: 85-86
---

// Fonction Change Hero
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

--- /code ---

--- /collapse ---

--- collapse ---

---
title: Voir le projet amélioré
---

<iframe src="https://editor.raspberrypi.org/fr-FR/embed/viewer/comic-character-upgrade" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

Tu peux voir les [fichiers du projet amélioré ici](https://editor.raspberrypi.org/fr-FR/projects/comic-character-upgrade){:target="_blank"}.

--- /collapse ---
