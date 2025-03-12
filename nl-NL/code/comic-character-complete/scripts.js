// Ververs Copyrightjaar-functie
const currentDate = new Date();
document.querySelector('#copyrightYear').innerText = currentDate.getFullYear();

// Maak constanten voor superheld-formulier
const characterDetails = document.querySelector('#character-details');
const summary = document.querySelector('#summary-section');
const characterName = document.querySelector('#name-text');
const characterAbility = document.querySelector('#ability-choice');
const characterOrigin = document.querySelector('#origin-text');

// Functie om samenvatting weer te geven
function displaySummary() {
  const summaryParagraph = document.querySelector('#summary-paragraph');
  summaryParagraph.textContent = `De naam van jouw superheld is ${characterName.value}. 
  De vaardigheid is ${characterAbility.value}.
  Het oorsprongsverhaal is ${characterOrigin.value}.`;
  characterDetails.style.display = 'none';
  summary.style.display = 'flex';
}

// Functie om samenvatting te bewerken
function changeSummary() {
  characterDetails.style.display = 'flex';
  summary.style.display = 'none';
}

// Functie om het karakterdetails-formulier te controleren
const alertBox = document.querySelector('#alert');
function checkForm() {
  var alertMessage = '';
  if (characterName.value == '') {
    alertMessage = 'Voer een naam in';
  } else if (characterAbility.value == '') {
    alertMessage = 'Kies een vaardigheid';
  } else if (characterOrigin.value == '') {
    alertMessage = 'Schrijf het oorsprongsverhaal';
  }
  if (alertMessage != '') {
    alertBox.innerText = alertMessage;
    alertBox.style.display = 'block';
  } else {
    alertBox.style.display = 'none';
    displaySummary();
  }
}

// Maak de constante voor de lichtmodus
const lightModeSwitch = document.querySelector('#lightModeSwitch');

// Lichtmodus-functie
function changeLightMode() {
  var isLightMode = lightModeSwitch.checked;
  document.body.classList.toggle('light-mode');
  localStorage.setItem('lightMode', isLightMode);
}

// Controleer lokale opslag
document.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem('lightMode') == 'true') {
    document.body.classList.toggle('light-mode');
    lightModeSwitch.checked = true;
  }
});

// Held-functie wijzigen
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
