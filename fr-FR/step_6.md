## Vérifier la saisie de l'utilisateur

Dans cette étape, tu vas vérifier que l'utilisateur a rempli le formulaire et l'avertir s'il a manqué une section.

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/comic-character-step6?page=character.html" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

Pour le moment, l'utilisateur peut soumettre les informations même s'il a laissé des champs de formulaire vides.

Tu dois créer une nouvelle fonction qui vérifie que l'utilisateur a rempli tous les champs de formulaire avant d'appeler la fonction `displaySummary()`.

### Modifier la fonction pour le bouton Créer

\--- task ---

Ouvre `character.html`.

Modifie la fonction qui gère l'événement `onclick` du bouton Créer.

## --- code ---

language: html
filename: character.html
line_numbers: true
line_number_start: 33
line_highlights: 35
--------------------------------------------------------

```
    <label for="origin-text">Histoire :</label>
    <textarea id="origin-text" placeholder="Add your superhero origin story!"></textarea>
    <button onclick="checkForm()">Créer</button>
```

\--- /code ---

\--- /task ---

### Créer une zone pour afficher un avertissement

Tu dois afficher un avertissement à l'utilisateur si une partie du formulaire est vide.

\--- task ---

Crée un élément vide `<div>` avec l'attribut `id="alert"` sous le bouton Créer.

## --- code ---

language: html
filename: character.html
line_numbers: true
line_number_start: 33
line_highlights: 35-36
-----------------------------------------------------------

```
    <label for="origin-text">Histoire :</label>
    <textarea id="origin-text" placeholder="Add your superhero origin story!"></textarea>
    <div id="alert"> 
    </div>
    <button onclick="checkForm()">Créer</button>
  </section>
```

\--- /code ---

\--- /task ---

### Créer un message d'alerte

Tu dois mettre à jour le contenu de l'alerte `<div>` avec un message.

\--- task ---

Ouvre `scripts.js`.

Utilise `querySelector()` pour trouver l'élément `<div>` avec l'attribut `id="alert"`.

Attribue ceci à une constante `alertBox`.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 32
--------------------------------------------------------

// Fonction pour vérifier le formulaire des informations du personnage
const alertBox = document.querySelector("#alert");

\--- /code ---

\--- /task ---

Tu as besoin d'une nouvelle fonction `checkForm()` pour vérifier que chaque champ de ton formulaire contient une valeur vide.

S'il y a une valeur vide, une alerte sera affichée à l'utilisateur dans le `alertBox`.

Le `alertBox`<div>\` sera caché jusqu'à ce qu'il soit nécessaire.

### Créer la fonction checkForm()

\--- task ---

Crée la fonction `checkForm()`.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 34-36
-----------------------------------------------------------

// Fonction pour vérifier le formulaire des informations du personnage
const alertBox = document.querySelector("#alert");

function checkForm(){

}

\--- /code ---

\--- /task ---

### Créer une variable pour conserver un message d'alerte

Tu as besoin d'une variable pour contenir un message d'alerte si la fonction trouve une valeur vide.

\--- task ---

Crée la variable `alertMessage` et attribue-lui une chaîne vide (`""`).

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 36
--------------------------------------------------------

// Fonction pour vérifier le formulaire des informations du personnage
const alertBox = document.querySelector("#alert");

function checkForm(){

var alertMessage = "";

}

\--- /code ---

\--- /task ---

\--- collapse ---

---

## title: Qu'est-ce qu'une variable ?

Une variable est une zone nommée de mémoire d'ordinateur qui contient une valeur.

La valeur peut être modifiée lorsque le programme est en cours d'exécution.

Par exemple, `var age = 10;`

- `age` est le nom de la variable.
- La valeur « 10 » lui est attribuée.

\--- /collapse ---

### Vérifie que l'utilisateur a entré un nom de super-héros

Tu dois cocher chaque champ pour décider s'il est vide.

Commence par le premier champ, `characterName`, qui contient l'élément HTML avec l'attribut `id="name-text"`.

La propriété `.value` d'un champ de formulaire sera vide si l'utilisateur l'a manqué.

\--- task ---

Utilise une instruction `if` pour vérifier si la valeur de `characterName` est vide.

**Remarque :** l'opérateur `==` est utilisé. Cela signifie "est le même que".

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 38-40
-----------------------------------------------------------

// Fonction pour vérifier le formulaire des informations du personnage
const alertBox = document.querySelector("#alert");

function checkForm(){

var alertMessage = "";

if (characterName.value == ""){

}

}

\--- /code ---

\--- /task ---

Dans l'instruction `if`, tu as besoin de code pour exécuter si le résultat est **true** (ce qui signifie que `characterName` **est** vide).

\--- task ---

Attribue à `alertMessage` une chaîne de caractères si la condition est vraie.

La chaîne de caractères doit être un message qui indique à l'utilisateur ce qu'il faut faire si le champ **Nom du super-héros** a été laissé vide.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 39
--------------------------------------------------------

// Fonction pour vérifier le formulaire des informations du personnage
const alertBox = document.querySelector("#alert");

function checkForm(){

var alertMessage = "";

if (characterName.value == ""){
alertMessage = "Veuillez saisir un nom";
}

}

\--- /code ---

\--- /task ---

### Afficher une alerte

Lorsque tu as créé `alertMessage`, tu lui as attribué une chaîne vide (`""`).

Si le champ **Nom du super-héros** est vide, alors tu définis `alertMessage` à un message pour alerter l'utilisateur.

Tu souhaites uniquement afficher l'alerte que s'il y a un message dans `alertMessage`.

Donc maintenant tu dois vérifier si `alertMessage` n'est **pas** une chaîne vide.

\--- task ---

Utilise une instruction `if` pour vérifier si la variable `alertMessage` n'est **pas** une chaîne vide (ce qui signifie qu'un message lui a été attribué pour l'utilisateur).

**Remarque :** l'opérateur `!=` est utilisé. Cela signifie que "n'est **pas** le même que".

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 42-44
-----------------------------------------------------------

// Fonction pour vérifier le formulaire des informations du personnage
const alertBox = document.querySelector("#alert");

function checkForm(){

var alertMessage = "";

if (characterName.value == ""){
alertMessage = "Veuillez saisir un nom";
}

if (alertMessage != ""){

}
}

\--- /code ---

\--- /task ---

Si `alertMessage` contient un message pour l'utilisateur, tu dois définir le contenu `.innerText` de `alertBox` comme étant ce message.

\--- task ---

Définis le contenu `.innerText` de `alertBox` à la chaîne contenue dans `alertMessage`.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 43
--------------------------------------------------------

// Fonction pour vérifier le formulaire des informations du personnage
const alertBox = document.querySelector("#alert");

function checkForm(){

var alertMessage = "";

if (characterName.value == ""){
alertMessage = "Veuillez saisir un nom";
}

if (alertMessage != ""){
alertBox.innerText = alertMessage;

}
}

\--- /code ---

\--- /task ---

La propriété `display` du sélecteur `#alert` est définie par défaut à `none`, donc la fenêtre d'alerte est cachée lorsque la page se charge.

\--- collapse ---

---

## title: Voir le sélecteur d'alerte CSS

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

S'il y a un message à afficher à l'utilisateur, tu dois faire apparaître la fenêtre d'alerte.

\--- task ---

Dans ta nouvelle instruction `if`, définis la propriété `display` du sélecteur `#alert` à `block`.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 44
--------------------------------------------------------

// Fonction pour vérifier le formulaire des informations du personnage
const alertBox = document.querySelector("#alert");

function checkForm(){

var alertMessage = "";

if (characterName.value == ""){
alertMessage = "Veuillez saisir un nom";
}

if (alertMessage != ""){
alertBox.innerText = alertMessage;
alertBox.style.display = "block";
}
}

\--- /code ---

\--- /task ---

\--- task ---

**Clique sur Run**

- Laisse vide le champ Nom du super-héros
- Clique sur le bouton Créer
- Le message d'alerte s'affichera

\--- /task ---

### Masquer l'alerte et afficher le résumé

Tu dois utiliser une instruction `else` pour masquer l'alerte (et afficher le résumé) si `alertMessage` est toujours défini sur une chaîne vide (`""`).

C'est une autre façon de penser à la façon dont l'instruction `else` fonctionne avec l'instruction `if`:

```
Si le message d'alerte n'est pas ""
  - afficher l'alerte.
Sinon (else)
  - masquer l'alerte
  - afficher le résumé.
```

\--- task ---

Utilise une instruction `else` pour définir la propriété `display` du sélecteur `#alert` à `none` et appelle la fonction `displaySummary()`.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 45-48
-----------------------------------------------------------

// Fonction pour vérifier le formulaire des informations du personnage
const alertBox = document.querySelector("#alert");

function checkForm(){

var alertMessage = "";

if (characterName.value == ""){
alertMessage = "Veuillez saisir un nom";
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

**Clique sur Run**

- Remplis le champ Nom du super-héros
- Clique sur le bouton Créer
- Le message d'alerte ne sera **pas** affiché
- Le résumé sera affiché

**Remarque :** les sections du pouvoir et de l'histoire seront vides

\--- collapse ---

---

## title: La section résumé ne s'affiche pas

- Vérifie que tu as utilisé des parenthèses`()` dans tes instructions `if` et `else`, par exemple `if (characterName.value == "")`
- Vérifie que tu as appelé la fonction `displaySummary()` dans ton bloc `else`

\--- /collapse ---

\--- /task ---

### Vérifier le champ Pouvoir

Tu as utilisé une instruction `if` pour vérifier si la valeur de `characterName` est vide.

S'il n'est **pas** vide, tu dois utiliser les instructions `else if` pour vérifier les autres champs de formulaire.

C'est une autre façon de penser à la façon dont les instructions `else if` fonctionnent avec l'instruction `if` :

```
Si characterName est ""
  - définir une alerte.
Sinon (else) si characterAbility est ""
  - définir une alerte.
Sinon (else) si characterOrigin est ""
  - définir une alerte.
```

\--- collapse ---

---

## title: Pourquoi ne pas utiliser trois instructions if ?

**Astuce :** utiliser `if` avec les instructions `else if` signifie que si une condition est 'true', les instructions suivantes `else if` sont ignorées. Cela permet d'économiser du temps et des ressources. Si plusieurs instructions `si` sont utilisées, toutes les instructions `si` sont vérifiées, même si une condition est remplie.

Dans ce formulaire, l'utilisateur est averti du premier champ vide.

\--- /collapse ---

\--- task ---

Utilise une instruction `else if` pour vérifier si la valeur de `characterAbility` est vide.

Si c'est le cas, attribue à `alertMessage` une chaîne.

La chaîne doit être un message qui indique à l'utilisateur ce qu'il faut faire si le champ **Pouvoir** a été laissé vide.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 40-42
-----------------------------------------------------------

// Fonction pour vérifier le formulaire des informations du personnage
const alertBox = document.querySelector("#alert");

function checkForm(){

var alertMessage = "";

if (characterName.value == ""){
alertMessage = "Veuillez saisir un nom";
} else if (characterAbility.value == "") {
alertMessage = "Veuillez choisir un pouvoir";
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

### Vérifier le champ Histoire

Utilise une autre instruction `else if` pour vérifier la valeur de `characterOrigin`.

Ajoute un message d'alerte pour montrer à l'utilisateur si le champ est vide.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 42-44
-----------------------------------------------------------

// Fonction pour vérifier le formulaire des informations du personnage
const alertBox = document.querySelector("#alert");

function checkForm(){

var alertMessage = "";

if (characterName.value == ""){
alertMessage = "Veuillez saisir un nom";
} else if (characterAbility.value == "") {
alertMessage = "Veuillez choisir un pouvoir";
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

\--- /code ---

\--- /task ---

\--- task ---

**Clique sur Run**

- Saisis des valeurs dans certains champs du formulaire, mais laisse certains vides.
- Clique sur le bouton Créer. Un message d'alerte s'affichera pour n'importe quel champ que tu as laissé vide.
- Teste ceci plusieurs fois avec un champ de formulaire différent.
- Remplis tous les champs du formulaire. Clique sur Créer pour voir le résumé.

\--- collapse ---

---

## title: Je devrais recevoir des alertes mais je n'en reçois pas

- Vérifie que tu as ajouté `.value` après `characterName`, `characterAbility` et `characterOrigin`.

\--- /collapse ---

\--- /task ---

Bien joué ! Tu as créé des vérifications et des alertes pour aider l'utilisateur à créer son super-héros !

Ensuite, tu vas créer un bouton pour que l'utilisateur puisse passer du mode clair au mode sombre !
