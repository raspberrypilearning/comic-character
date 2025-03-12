// Fonction de mise à jour de l'année du Copyright
const currentDate = new Date();
document.querySelector('#copyrightYear').innerText = currentDate.getFullYear();

// Créer des constantes pour le formulaire de super-héros
const characterDetails = document.querySelector('#character-details');
const summary = document.querySelector('#summary-section');
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
function changeSummary() {
  characterDetails.style.display = 'flex';
  summary.style.display = 'none';
}

// Fonction pour vérifier le formulaire d'informations du personnage
const alertBox = document.querySelector('#alert');
function checkForm() {
  var alertMessage = '';
  if (characterName.value == '') {
    alertMessage = 'Merci d’indiquer un nom';
  } else if (characterAbility.value == '') {
    alertMessage = 'Veuillez choisir un pouvoir';
  } else if (characterOrigin.value == '') {
    alertMessage = 'Merci d’écrire l’histoire';
  }
  if (alertMessage != '') {
    alertBox.innerText = alertMessage;
    alertBox.style.display = 'block';
  } else {
    alertBox.style.display = 'none';
    displaySummary();
  }
}

// Créer la constante pour le light mode
const lightModeSwitch = document.querySelector('#lightModeSwitch');

// Fonction du light mode
function changeLightMode() {
  var isLightMode = lightModeSwitch.checked;
  document.body.classList.toggle('light-mode');
  localStorage.setItem('lightMode', isLightMode);
}

// Vérifiez le stockage local
document.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem('lightMode') == 'true') {
    document.body.classList.toggle('light-mode');
    lightModeSwitch.checked = true;
  }
});

// Fonction changer de héros
const heroSlides = document.querySelectorAll('.hero-slide');
var currentHeroIndex = 0;
function changeHero(direction) {
  heroSlides[currentHeroIndex].classList.remove('active');
  currentHeroIndex = currentHeroIndex + direction;
  if (currentHeroIndex < 0) {
    currentHeroIndex = 2;
  } else if (currentHeroIndex > 2) {
    currentHeroIndex = 0;
  }
  heroSlides[currentHeroIndex].classList.add('active');
}
