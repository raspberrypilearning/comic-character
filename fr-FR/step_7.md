## Créer un thème Light Mode

Dans cette étape, tu vas créer un bouton pour que l'utilisateur puisse passer du mode sombre au mode clair.

Le site web se souviendra du choix de l'utilisateur même s'il navigue vers une autre page.

<iframe src="https://editor.raspberrypi.org/fr-FR/embed/viewer/comic-character-step7" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
<span style="color: #0faeb0">**Thèmes de couleurs clairs et sombres**</span> sont utilisés lors de la conception de sites web et d'applications. Le mode sombre est un thème de couleurs qui utilise du texte et des icônes de couleur claire sur des arrière-plans sombres. Le mode clair est l'inverse. Fournir cette option à l'utilisateur améliore la lisibilité et l'accessibilité.
</p>

Ton fichier `style.css` inclut des sélecteurs utilisés pour mettre à jour le thème de couleurs de ton site web.

--- collapse ---

**Astuce :** ceci est juste là pour te rappeler. Tu n'as plus besoin de l'écrire à nouveau !

---
title: Styles Light mode
---

--- code ---
---
language: css
filename: style.html
line_numbers: true
line_number_start: 244
---

/*Styles Light Mode */

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

### Ajouter un bouton à l'en-tête

Tu as déjà utilisé les éléments `<button>` pour déclencher des événements.

Cette fois-ci, tu utiliseras une case à cocher (`<input type="checkbox">`) stylisée comme bouton, de sorte que l'utilisateur peut changer entre les thèmes de couleur.

--- task ---

Ouvre `index.html`.

Crée un élément `<div>` en dessous de l'élément `<nav>` dans la section `<header>`.

Donne-lui l'attribut `class="switch-container"`.

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

Le bouton utilise trois éléments : `<label>`, `<input>`, et `<span>`.

Tu en as utilisé certains lorsque tu as créé le formulaire des informations du personnage.

--- task ---

À l'intérieur des balises `<div>`, ajoute un `<label>` avec l'attribut `class="switch"`.

À l'intérieur des balises `<label>`, ajoute

- Un élément `<input>` avec deux attributs : `type="checkbox"` et `id="lightModeSwitch"`
- Un élément `<span>` avec l'attribut `class="switch-slider"`

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

**Clique sur Run**
- **Remarque :** le sélecteur `.switch` fournit un style pour convertir la case à cocher en une forme de bouton.

--- /task ---

### Ajouter une icône au bouton

Tu peux montrer à l'utilisateur une icône qui représente le Light Mode plutôt que de leur montrer la phrase "Light Mode".

Google Fonts fournit des icônes et un moyen de les ajouter à ton site web.

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
<span style="color: #0faeb0">**Les icônes**</span> sont une façon accessible de représenter du texte car ils sont universellement compris.
</p>

L'icône Google a déjà été incluse dans l'élément `<head>` de tes pages web. Les styles CSS ont également été fournis.

--- collapse ---

---
title: Comment importer des icônes en utilisant Google Fonts
---

Ouvre [fonts.google.com](https://fonts.google.com/icons){:target="_blank"}. Le lien s'ouvrira dans un nouvel onglet.

![La page des icônes de Google Fonts avec diverses icônes et la barre de recherche affichée.](images/google-icons.png)
Tu peux rechercher des icônes. Chaque icône a un nom unique.

Clique sur l'icône que tu souhaites ajouter. Cela ouvrira quelques instructions.
![La page des icônes Google Fonts avec l'icône "Home" sélectionnée et un panneau d'instructions.](images/google-selected-icon.png)

- Inclus les icônes dans le HTML :
  Ajoute ceci dans la section `<head>` d'un fichier HTML.

    `<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">`

- Utilise les icônes en HTML :
  Ajoute une classe à un élément HTML. Par exemple :

    `<span class="material-symbols-outlined">home</span>`

- Style CSS :
  Ajoute les styles personnalisés de l’icône à ta feuille de style CSS. Tu peux également le personnaliser :

    .material-symbols-outlined {
      font-variation-settings:
      'FILL' 0,
      'wght' 400,
      'GRAD' 0,
      'opsz' 24
    }

--- /collapse ---

--- task ---

Sous la balise `</label>`, ajoute un élément `<span>` avec l'attribut `class="switch-label material-symbols-outlined"`.

Ajoute le texte 'light_mode' à l'intérieur de l'élément `<span>`.

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

**Clique sur Run**

- Ton bouton devrait apparaître à droite dans ta barre de navigation
- Tu peux cliquer sur le bouton, mais il ne fera rien pour le moment !

--- collapse ---

---
title: Le bouton ne s'affiche pas correctement
---

- Vérifie que tu as laissé des espaces entre tes attributs lorsque tu as plusieurs attributs dans un élément.

--- /collapse ---

--- /task ---

### Créer un gestionnaire d'événements pour ton bouton

--- task ---

Ouvre `scripts.js`.

Trouve le commentaire `// Créer la constante pour le Light Mode`.

Utilise `querySelector()` pour trouver l'élément avec l'attribut `id="lightModeSwitch"`.

Attribue-le à une constante `lightModeSwitch`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 55
line_highlights: 56
---
// Crée la constante pour le Light Mode
const lightModeSwitch = document.querySelector("#lightModeSwitch");

--- /code ---

--- /task ---

--- task ---

Trouve le commentaire `// Fonction Light Mode`.

Crée la fonction `changeLightMode()`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 58
line_highlights: 59-61
---

// Fonction Light Mode
function changeLightMode(){

}

--- /code ---

--- /task ---

Tu as ajouté un élément `<input>` avec l'attribut `type="checkbox"` et l'a stylisé comme un bouton.

Tu peux vérifier si un bouton est 'activé' en utilisant la propriété `.checked`.

La valeur de la propriété `.checked` est Boolean, ce qui signifie qu'elle peut être **true** (on), ou **false** (off).

--- task ---

Fais en sorte que la fonction attribue la valeur de la propriété `.checked` du bouton à la variable `isLightMode`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 58
line_highlights: 60
---

// Fonction Light Mode
function changeLightMode(){
  var isLightMode = lightModeSwitch.checked;

}

--- /code ---

--- /task ---

La propriété `.classList` retourne les attributs `class` d'un élément.

Tu peux modifier les attributs de classe d'un élément en utilisant des méthodes.

Par exemple, tu peux ajouter (add ()), activer/désactiver(toggle()), ou supprimer(remove()) une classe d'un élément.

--- collapse ---

---
title: Méthodes classList
---

- Accède à une classList :
  `element.classList` renvoie une liste des attributs de classe de l'élément spécifié.

- Ajoute une classe : `element.classList.add("className")`

- Supprimer une classe : `element.classList.remove("className")`

- Activer/désactiver une classe : `element.classList.toggle("className")` (Si la classe est présente, elle est supprimée ; sinon, elle est ajoutée.)

- Vérifie si une classe existe : `element.classList.contains("className")` renvoie une valeur booléenne confirmant si l'élément contient la classe spécifiée.

- Remplace une classe : `element.classList.replace("oldClass", "newClass")` remplace l'ancienne classe spécifiée par une nouvelle.

--- /collapse ---

--- task ---

Utilise la méthode `.toggle` pour ajouter ou supprimer la classe `light-mode` à l'élément `<body>`.

Cela ajoutera la classe à l'élément si elle n'est pas là, ou la supprimera si c'est le cas.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 58
line_highlights: 61
---

// Fonction Light Mode
function changeLightMode(){
  var isLightMode = lightModeSwitch.checked;
  document.body.classList.toggle("light-mode");

}

--- /code ---

--- /task ---

### Ajouter le gestionnaire d'événements au bouton

--- task ---

Ouvre `index.html`.

Ajoute l'évènement `onchange="changeLightMode()"` à l'élément bouton.

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

**Clique sur Run**

- Clique sur le bouton pour le faire glisser dans la position du Light Mode
- Les couleurs de ta page web devraient changer

--- /task ---

### Enregistrer les préférences de l'utilisateur

Le bouton ajoute ou supprime la classe `light-mode`.

Lorsque ton utilisateur navigue vers une autre page (ou recharge celle actuelle), les changements seront perdus car l'attribut de classe `light-mode` n'est pas défini dans le fichier HTML.

Tu as besoin d'un moyen de conserver le choix de l'utilisateur.

Tu peux le faire avec la propriété `localStorage`.

`localStorage` contient les données comme paires clé-valeur. Une **clé** est un 'label' pour une valeur.

--- collapse ---

---
title: Méthodes localStorage
---

- setItem(key, value):
  Ajoute une paire clé-valeur à localStorage.
  Exemple : `localStorage.setItem("nom d'utilisateur", "raspberry")`

- getItem(key):
  Récupère la valeur associée à la clé spécifiée.
  Exemple : `var username = localStorage.getItem("nom d'utilisateur")`

- removeItem(key):
  Supprime la paire clé-valeur associée à la clé spécifiée.
  Exemple : `localStorage.removeItem("nom d'utilisateur")`

- clear():
  Supprime toutes les paires clé-valeur de localStorage.
  Exemple : `localStorage.clear()`

--- /collapse ---

--- task ---

Ouvre `scripts.js`.

Utilise la méthode `.setItem` pour ajouter la paire clé-valeur :

- Définis 'key' sur `"lightMode"`
- Définis 'value' sur `isLightMode`, représentant la valeur booléenne (true ou false) de la propriété `.checked` du toggle

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 58
line_highlights: 62
---

// Fonction Light mode
function changeLightMode(){
  var isLightMode = lightModeSwitch.checked;
  document.body.classList.toggle("light-mode");
  localStorage.setItem("lightMode", isLightMode);
}

--- /code ---

--- /task ---

### Obtenir les préférences de l'utilisateur

Lorsque la page web se charge, tu dois vérifier si lightMode a été défini.

Tu peux utiliser `addEventListener` pour cela.

--- collapse ---

---
title: La méthode addEventListener
---

Utilise `.addEventListener` comme ceci :

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

- element : l'élément HTML auquel tu veux attacher l'event listener
- eventType : le type d'événement que tu veux recevoir l'entrée (par exemple "click", "keydown", "DOMContentLoaded")
- callbackFunction : la fonction à exécuter lorsque l'événement se produit

--- /collapse ---

--- task ---

Utilise `.addEventListener` pour déclencher une fonction en réponse à un événement de chargement de page.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 65
line_highlights: 66-68
---

// Vérifier le stockage local
document.addEventListener("DOMContentLoaded", function () {

});

--- /code ---

`"DOMContentLoaded"` est un `eventType` qui est déclenché lorsque la page web est prête.

**Astuce :** il est préférable d'utiliser `"DOMContentLoaded"` ici plutôt que le type d'événement `"load"`, qui n'est déclenché que lorsque toutes les images sont chargées.

--- /task ---

Tu as besoin de la fonction pour vérifier `localStorage` pour voir si 'value' associée à 'key' `lightMode` est **"true"**.

--- task ---

Ajoute une instruction `si` pour vérifier si `lightMode` est défini sur `"true"`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 65
line_highlights: 68-70
---

// Vérifier le stockage local
document.addEventListener("DOMContentLoaded", function () {

  if (localStorage.getItem("lightMode") == "true") {

  }

});

--- /code ---

--- /task ---

Si `lightMode` est défini sur `"true"`, tu dois ajouter la classe `.light-mode`.

Tu peux utiliser la méthode `.toggle` de la propriété `classList` pour y parvenir.

**Astuce :** tu peux également utiliser la méthode `.add`.

--- task ---

Activer/désactiver la classe `light-mode`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 65
line_highlights: 69
---

// Vérifier le stockage local
document.addEventListener("DOMContentLoaded", function () {

  if (localStorage.getItem("lightMode") == "true") {
    document.body.classList.toggle("light-mode");
  }

});

--- /code ---

--- /task ---

Tu dois également afficher le bouton comme "activé".

Si cela n'est pas fait, la préférence du Light Mode sera définie, mais la position du bouton sera définie sur 'désactivé'.

--- task ---

Définis la valeur de la propriété `.checked` du changement à la valeur booléenne `true`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 65
line_highlights: 70
---

// Fonction Light Mode
document.addEventListener("DOMContentLoaded", function () {

  if (localStorage.getItem("lightMode") == "true") {
    document.body.classList.toggle("light-mode");
    lightModeSwitch.checked = true;
  }

});

--- /code ---

--- /task ---

--- task ---

Ouvre `character.html`.

Ajoute le code HTML pour le bouton vers l'en-tête en dessous de la balise `</nav>`.

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

**Clique sur Run**

- Ton bouton devrait apparaître dans ta barre de navigation à droite
- Clique sur l'activation et la désactivation pour voir le changement de couleurs du thème
- Navigue vers la page `index.html` pour vérifier que ta préférence de Light Mode reste activée

--- /task ---

Excellent travail ! Tu as créé un bouton qui permet à l'utilisateur de changer de thème de couleur.

Ensuite, tu vas ajouter un slider Hero à ton site web et permettre à l'utilisateur de voir différentes images !
