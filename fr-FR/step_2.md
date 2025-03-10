## Ajouter un message de copyright au pied de page

Dans cette étape, tu vas créer un message de copyright et une fonction pour le mettre à jour automatiquement pour l'année en cours. Tu l'ajouteras à ta section de pied de page.

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/comic-character-step2" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
<span style="color: #0faeb0">**Copyright**</span> est une protection juridique qui empêche les gens d'utiliser le travail de quelqu'un d'autre (par exemple des sites web, des images, de la musique) sans sa permission.
</p>

Dans la conception moderne des sites web, les sites web incluent une section de pied de page, affichant un message de copyright.

Un message de copyright (droits d'auteur) contient généralement les éléments suivants :

- Un symbole copyright Ⓒ
- Le nom du propriétaire du site web
- L'année où le contenu a été publié

\--- task ---

Ouvre le [projet de démarrage Personnage de Comics](https://editor.raspberrypi.org/fr-FR/projects/comic-character-starter){:target="_blank"}.

\--- /task ---

Ton projet de démarrage contient :

- Deux pages HTML avec du contenu
- Un fichier CSS qui contient le style d'une partie du contenu
- Les images que tu utiliseras dans le projet
- Un fichier JavaScript pour rendre ton site web interactif et attrayant

Ce projet contient déjà une barre de navigation et une image Hero, que tu as appris à créer dans [Bienvenue en Antarctique](https://projects.raspberrypi.org/fr-FR/projects/welcome-to-antarctica).

Le fichier **JavaScript** que tu vas utiliser a déjà été lié à tes pages web juste avant la balise de fermeture `</body>`.

Le fichier **CSS** que tu vas utiliser a également été lié à tes pages web.

### Ajouter du contenu à ta section de pied de page

\--- task ---

Ouvre le fichier `index.html`.

Trouve l'élément `footer`.

Ajoute un élément `<p>` contenant le message de copyright.

(Tu peux changer le nom fictif `Malik Johnson` par un nom de ton choix.)

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 32
line_highlights: 33
--------------------------------------------------------

```
  <footer>
    <p> Ⓒ Malik Johnson - Tous droits réservés</p>
  </footer>
```

\--- /code ---

\--- /task ---

\--- task ---

Ajoute un élément `<span>` avec l'attribut `id="copyrightYear"` entre le symbole Ⓒ et le nom.

L'attribut `id` est utilisé pour spécifier un identifiant unique pour un élément HTML.

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 32
line_highlights: 33
--------------------------------------------------------

```
  <footer>
    <p> Ⓒ <span id="copyrightYear"></span> Malik Johnson - Tous droits réservés</p>
  </footer>
```

\--- /code ---

\--- /task ---

\--- task ---

**Clique sur Run**

- Le message de copyright sera affiché en bas (footer) de ta page web.

**Remarque :** il n'y a pas encore de date affichée.

\--- /task ---

Il n'y a pas de texte à l'intérieur de l'élément `<span>`.

JavaScript sera utilisé pour mettre à jour le contenu du `<span>` pour afficher l'année en cours.

### Afficher l'année en cours

JavaScript dispose d'une fonction `Date()` qui renvoie la date et l'heure actuelles, en utilisant le fuseau horaire du navigateur.

\--- collapse ---

---

## title: Voir un exemple

Un appel à `Date()` renvoie une chaîne de caractères.

Voici le résultat de l'appel à `Date()` lorsque cette page a été chargée :

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/comic-character-date" width="100%" height="100" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

\--- /collapse ---

\--- task ---

Ouvre `scripts.js`.

Crée une constante `currentDate` pour contenir un nouvel objet `Date()`.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 1
line_highlights: 2
-------------------------------------------------------

```
 // Mise à jour de la fonction Copyright Year
 const currentDate = new Date();
```

\--- /code ---

\--- /task ---

\--- collapse ---

---

## title: Qu'est-ce qu'une constante ?

Une constante est une valeur de données nommée.

La valeur ne peut pas être modifiée par le programme.

\--- /collapse ---

L'année en cours sera ajoutée à l'élément `<span>` que tu as créé plus tôt.

JavaScript peut être utilisé pour trouver et modifier des éléments HTML.

Pour accéder à l'élément `<span>`, tu vas le « sélectionner » en utilisant la méthode du modèle d'objet de document : `querySelector()`.

\--- collapse ---

---

## title: Qu'est-ce que le modèle objet de document ?

Le modèle objet de document (DOM) permet à JavaScript (et à d'autres langages de programmation) d'interagir avec les éléments d'une page web.

Il représente la structure d'une page web (document).

`querySelector()` est une méthode DOM qui renvoie le premier élément de ta page web qui correspond à un sélecteur CSS spécifié (par exemple `#copyrightYear`)

\--- /collapse ---

\--- task ---

Utilise la méthode `querySelector()` pour trouver l'élément dans le document de la page web avec l'attribut `id="copyrightYear"`.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 1
line_highlights: 3
-------------------------------------------------------

```
 // Mise à jour de la fonction Copyright Year 
 const currentDate = new Date();
 document.querySelector("#copyrightYear")
```

\--- /code ---

\--- /task ---

Le querySelector trouvera tout l'élément `<span>`.

Tu dois seulement modifier le texte **à l'intérieur** de l'élément.

La propriété `.innerText` peut être utilisée pour faire référence au contenu du texte d'un élément HTML.

La constante `currentDate` contient la date complète renvoyée par la fonction `Date()`, mais tu as besoin que de la partie année à quatre chiffres de la date.

Tu peux utiliser la méthode `.getFullYear()` pour cela.

\--- task ---

Définis le contenu `.innerText` de `<span>` avec l'attribut `id="copyrightYear"` à l'année en cours à quatre chiffres.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 1
line_highlights: 3
-------------------------------------------------------

```
 // Mise à jour de la fonction Copyright Year 
 const currentDate = new Date();
 document.querySelector("#copyright").innerText = currentDate.getFullYear();
```

\--- /code ---

\--- /task ---

\--- task ---

**Clique sur Run**

- Tu devrais voir l'année en cours dans le message de copyright.

\--- collapse ---

---

## title: L'année n'est pas affichée

- Vérifie qu'il y a un `#` dans `copyrightYear` dans le `querySelector`
- Vérifie que tu as des parenthèses ouvrantes et fermantes `()` à la fin de `.getFullYear()`
- Vérifie l'orthographe de `querySelector` et `.getFullYear` (y compris les majuscules)
- Vérifie qu'il y a un `;` à la fin des lignes 2 et 3

\--- /collapse ---

\--- /task ---

\--- task ---

Ouvre `index.html`.

Copie (CTRL + C ou CMD + C) l'élément `<p>` dans le pied de page.

\--- /task ---

\--- task ---

Ouvre le fichier `character.html`.

Trouve l'élément `footer`.

Colle (CTRL + V ou CMD + V) l'élément `<p>` que tu as copié plus tôt.

## --- code ---

language: html
filename: character.html
line_numbers: true
line_number_start: 27
line_highlights: 28
--------------------------------------------------------

```
  <footer>
    <p> <span id="copyrightYear"></span> Ⓒ Malik Johnson - Tous droits réservés</p>
  </footer>
```

\--- /code ---

**Rappel :** tu peux remplacer le nom fictif « Malik Johnson » par un nom de ton choix.

\--- /task ---

\--- task ---

**Clique sur Run**

- Le message de copyright sera affiché en bas (section footer) de ta page web
- Il comprendra l'année

\--- /task ---

\--- collapse ---

---

## title: Quelles autres méthodes de date puis-je utiliser ?

Récupère les composants spécifiques de la date et de l'heure :

```
const year = currentDate.getFullYear();
const month = currentDate.getMonth(); // (0 = Janvier, 11 = Décembre)
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
const milliseconds = currentDate.getMilliseconds();
```

\--- /collapse ---

Bravo ! Tu as ajouté du contenu dynamique à ta pages web !

Ensuite, tu vas créer une page web interactive où l'utilisateur peut créer son propre personnage.
