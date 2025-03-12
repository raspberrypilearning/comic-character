// Fonction de mise à jour de l'année du Copyright
const currentDate = new Date();
document.querySelector('#copyrightYear').innerText = `${currentDate.getFullYear()}`;

// Créer des constantes pour le formulaire de super-héros
const summary = document.querySelector('#summary-section');
const characterDetails = document.querySelector('#character-details');
const characterName = document.querySelector('#name-text');
const characterAbility = document.querySelector('#ability-choice');
const characterOrigin = document.querySelector('#origin-text');

// Fonction pour afficher le résumé
function displaySummary() {
  const summaryParagraph = document.querySelector('#summary-paragraph');
  summaryParagraph.textContent = `Le nom de ton super-héros est ${characterName.value}. 
  Son pouvoir est ${characterAbility.value}. 
  Son histoire est ${characterOrigin.value}.`;
  characterDetails.style.display = 'none';
  summary.style.display = 'flex';
}

// Fonction pour modifier le résumé

// Fonction pour vérifier le formulaire d'informations du personnage

// Créer la constante pour le light mode

// Fonction du light mode

// Vérifiez le stockage local

// Fonction changer de héros
