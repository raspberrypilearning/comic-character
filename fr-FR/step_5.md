## Modifier le contenu du résumé

Dans cette étape, tu permettras à l'utilisateur de modifier ses choix de formulaire.

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/comic-character-step5?page=character.html" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### Ajouter la fonction changeSummary()

Tu as besoin d'une fonction qui affiche le formulaire et masque le résumé lorsque l'utilisateur clique sur un bouton Modifier.

\--- task ---

Ouvre `scripts.js`.

Trouve le commentaire `// Fonction pour modifier le résumé`.

Ajoute la fonction `changeSummary()`.

Dans ta fonction :

- Définis la valeur de la propriété `display` des informations du personnage `<section>` sur `none`
- Définis la valeur de la propriété `display` du résumé `<section>` sur `none`

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 25
line_highlights: 26-29
-----------------------------------------------------------

// Fonction pour modifier le résumé
function changeSummary() {
characterDetails.style.display = "flex";
summary.style.display = "none";
}

\--- /code ---

\--- /task ---

### Créer un bouton Modifier

Tu dois créer un nouveau bouton pour appeler la fonction `changeSummary()`.

\--- task ---

Ouvre `character.html`.

Ajoute un élément `<button>` avec l'événement `onlick="changeSummary()"` à la section résumé.

Ajoute le texte 'Modifier' au `<button>`, afin que l'utilisateur sache ce que fait le bouton.

## --- code ---

language: html
filename: character.html
line_numbers: true
line_number_start: 39
line_highlights: 42
--------------------------------------------------------

```
  <section id="summary-section">
    <h2>Résumé du super-héros</h2>
    <p id="summary-paragraph"></p>
    <button onclick="changeSummary()">Modifier</button>
  </section>
```

\--- /code ---

\--- /task ---

\--- task ---

**Clique sur Run**

- Remplis à nouveau le formulaire.
- Lorsque tu cliques sur le bouton Créer, le formulaire sera masqué et la section résumé sera affichée.
- Tu devrais voir un bouton Modifier. Clique dessus pour modifier ton formulaire.

\--- /task ---

Bien joué ! Tu as ajouté encore plus d'interactivité à ton site web !

Ensuite, tu vérifieras que l'utilisateur a rempli le formulaire et l'avertiras s'il a manqué une section.
