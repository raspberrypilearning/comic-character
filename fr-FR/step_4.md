## Faire apparaître et disparaître les éléments

Dans cette étape, tu utiliseras JavaScript pour faire apparaître et disparaître des parties de ton formulaire.

<iframe src="https://editor.raspberrypi.org/fr-FR/embed/viewer/comic-character-step4?page=character.html" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### Afficher la section résumé

Ton utilisateur doit appuyer sur un bouton pour afficher la section résumé.

Un événement `onclick` peut être ajouté au bouton.

JavaScript peut être utilisé pour réagir à cet événement et afficher le résumé.

--- collapse ---

---
title: Autres événements
---

Les événements peuvent être déclenchés par l'utilisateur ou le navigateur.

- Évènements utilisateur :
  - Événements de la souris (clic, double clic, souris)
  - Événements du clavier (appui sur une touche, enfoncement d'une touche, relâchement d'une touche)
  - Événements tactiles (touchstart, touchmove, touchend)

- Événements du navigateur :
  - Événements de chargement de page (chargement, déchargement)
  - Evénements de la fenêtre (redimensionnement, défilement)
  - Événements temporels (setInterval, setTimeout)

--- /collapse ---

--- task ---

Ouvre le fichier `character.html`.

Ajoute un élément `<button>` avec l'événement `onclick="displaySummary()"` en dessous de l'histoire `div`.

Ajoute le texte 'Créer' au `<button>`, afin que l'utilisateur sache ce que fait le bouton.

--- code ---
---
language: html
filename: character.html
line_numbers: true
line_number_start: 33
line_highlights: 35
---

        <label for="origin-text">Histoire :</label>
        <textarea id="origin-text" placeholder="Add your superhero origin story!"></textarea>
        <button onclick="displaySummary()">Créer</button>
      </section>

--- /code ---

--- /task ---

--- task ---

**Clique sur Run**

- Tu verras un bouton Créer sous ton formulaire de super-héros
- Le bouton Créer ne fait rien pour le moment

--- /task ---

Rien ne se passera lorsque l'utilisateur cliquera sur le bouton Créer.

Cela est dû au fait que la propriété CSS `display` de la section résumé est définie sur `none`.

Tu devras utiliser JavaScript pour changer la propriété `display` de la section résumé en `flex`.

Lorsque la section résumé est affichée, tu masqueras le formulaire des informations du personnage.

### Créer des constantes pour se référer à chaque section

Ta fonction utilisera des constantes qui font référence à chaque section.

--- task ---

Ouvre `scripts.js`.

Utilise la méthode `querySelector()` pour trouver :

- L'élément de la section résumé et l'attribuer à la constante `summary`
- L'élément de la section informations du personnage et attribue-le à la constante `characterDetails`

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 5
line_highlights: 6-7
---
// Créer des constantes pour le formulaire de super-héros
const summary = document.querySelector("#summary-section");
const characterDetails = document.querySelector("#character-details");

--- /code ---

--- /task ---

### Créer des constantes pour se référer à chaque champ de formulaire

Tu dois afficher les trois informations du personnage dans la section résumé.

Définis chacun comme une constante, pour que tu puisses y faire référence dans ton code.

--- task ---

Utilise les méthodes `querySelector()` pour trouver les éléments du formulaire et attribuer chacun d'eux à une constante.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 5
line_highlights: 9-11
---
// Créer des constantes pour le formulaire de super-héros
const summary = document.querySelector("#summary-section");
const characterDetails = document.querySelector("#character-details");

const characterName = document.querySelector("#name-text");
const characterAbility = document.querySelector("#ability-choice");
const characterOrigin = document.querySelector("#origin-text");

--- /code ---

--- /task ---

### Mettre à jour le contenu du résumé

Dans `character.html`, tu as ajouté un élément `<p>` avec l'attribut `id="summary-paragraph"`.

--- collapse ---

**Astuce :** ceci est juste là pour te rappeler. Tu n'as plus besoin de l'écrire à nouveau !

---
title: Le paragraphe résumé que tu as créé précédemment
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
        <h2>Résumé du super-héros</h2>
        <p id="summary-paragraph"></p>
      </section>

--- /code ---

--- /collapse ---

Le paragraphe résumé affichera un résumé des informations du personnage.

Tu as besoin d'une fonction pour mettre à jour le contenu du paragraphe résumé.

--- task ---

Crée une fonction `displaySummary()`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 13
line_highlights: 14-16
---

// Fonction pour afficher le résumé
function displaySummary() {

}

--- /code ---

--- /task ---

La fonction `displaySummary()` doit changer l'élément `<p>` avec l'attribut `id="summary-paragraph"`.

--- task ---

Utilise `querySelector()` pour trouver l'élément `<p>` avec l'attribut `id="summary-paragraph"`.

Attribue l'élément à la constante `sumyParagraph`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 13
line_highlights: 15
---

// Fonction pour afficher le résumé
function displaySummary() {
  const summaryParagraph = document.querySelector("#summary-paragraph");

}

--- /code ---

--- /task ---

Tu as précédemment modifié la propriété `.innerText` d'un élément HTML.

Ici, tu vas changer la propriété `.textContent` du paragraphe résumé pour inclure les valeurs entrées par l'utilisateur dans chaque champ.

Chaque valeur apparaîtra à côté du texte introduisant la valeur (par exemple 'Le nom de ton super-héros est ')

Tu peux utiliser le « formatage des chaînes de caractères » pour faire cela.

--- collapse ---

---
title: Qu'est-ce que le formatage des chaînes de caractères ?
---

Une chaîne de caractères est un type de données en JavaScript et dans d'autres langages de programmation.

Une chaîne de caractères est un ensemble de caractères placés entre des guillemets doubles `» “` ou des guillemets simples `” '`.

Tu peux formater des chaînes de caractères à l'aide de modèles littéraux ou de concaténations.

### Modèles littéraux

Si tu veux inclure les valeurs des constantes, des variables ou des expressions dans une chaîne de caractère, alors tu peux utiliser des modèles littéraux.

Au lieu d'utiliser `» “` ou `” '`, tu utiliseras des antisèches pour indiquer une chaîne de caractères.

Utilise ensuite `${}` et place la constante, la variable ou l'expression à l'intérieur de la partie `{}`.

Voici un exemple :

- Inclus les valeurs contenues dans les constantes `heroName` et `age` dans une chaîne.

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
---

const heroName = "Spider Man";
const age = 25;
const message = `Bonjour, ${heroName} ! Tu as ${age} ans.`;

--- /code ---

### Concaténation

La concaténation est l'action d'assembler des éléments.

Tu peux joindre des chaînes de caractères ensemble en utilisant l'opérateur `+`.

Voici un exemple :

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
---

const superhero = "Iron Man";
const power = "armure";

const description = "Le super-héros " + super-héros + " a un " + pouvoir + ".";

--- /code ---

--- /collapse ---

--- task ---

Mets à jour le `.textContent` du `summaryParagraph`.

**Remarque :** le contenu du texte est à l'intérieur de `` au lieu d'utiliser`" "`ou`' '`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 13
line_highlights: 17-19
---

// Fonction pour afficher le résumé
function displaySummary() {
  const summaryParagraph = document.querySelector("#summary-paragraph");

  summaryParagraph.textContent = `Le nom de ton super-héros est ${characterName.value}. 
  Son pouvoir est ${characterAbility.value}. 
  Son histoire est ${characterOrigin.value}.`;

}

--- /code ---

--- /task ---

### Masquer le formulaire des informations du personnage

--- task ---

Définis la valeur de la propriété `display` des informations du personnage `<section>` sur `none`.

Ceci masquera l'ensemble du formulaire de la page.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 13
line_highlights: 21
---

// Fonction pour afficher le résumé
function displaySummary() {
  const summaryParagraph = document.querySelector("#summary-paragraph");

  summaryParagraph.textContent = `Le nom de ton super-héros est ${characterName.value}. 
  Son pouvoir est ${characterAbility.value}. 
  Son histoire est ${characterOrigin.value}.`;

  characterDetails.style.display = "none";

}

--- /code ---

--- /task ---

--- task ---

Définis la valeur de la propriété `display` du résumé `<section>` sur `flex`.

Ceci affichera la section résumé sur ta page.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 13
line_highlights: 22
---

// Fonction pour afficher le résumé
function displaySummary() {
  const summaryParagraph = document.querySelector("#summary-paragraph");

  summaryParagraph.textContent = `Le nom de ton super-héros est ${characterName.value}. 
  Son pouvoir est ${characterAbility.value}. 
  Son histoire est ${characterOrigin.value}.`;

  characterDetails.style.display = "none";
  summary.style.display = "flex";
}

--- /code ---

--- /task ---

--- task ---

Ouvre `character.html`.

**Clique sur Run**

- Remplis les informations du personnage
- Lorsque tu cliques sur le bouton Créer, le formulaire sera masqué et la section résumé sera affichée
- Le paragraphe résumé inclura un résumé de ton personnage

--- collapse ---

---
title: La section résumé ne s'affiche pas correctement
---

- Vérifie que tu as correctement nommé toutes les constantes (`const`)
- Vérifie que tu as utilisé la syntaxe correcte lors de la création des fonctions, y compris `()` et `{}`
- Vérifie que tu ajoutes l'élément `onclick = "displaySummary()"` en tant qu'événement sur l'élément `<button>`
- Vérifie que tu as ajouté un point-virgule `;` à la fin de tes déclarations

--- /collapse ---

--- /task ---

Bien joué ! Tu as créé un formulaire interactif qui affiche et masque les éléments.

Ensuite, tu autoriseras l'utilisateur à modifier ses choix !
