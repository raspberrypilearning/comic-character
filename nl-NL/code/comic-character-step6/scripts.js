// Ververs Copyrightjaar-functie
const currentDate = new Date();
document.querySelector('#copyrightYear').innerText = `${currentDate.getFullYear()}`;

// Maak constanten voor superheld-formulier
const summary = document.querySelector('#summary-section');
const characterDetails = document.querySelector('#character-details');
const characterName = document.querySelector('#name-text');
const characterAbility = document.querySelector('#ability-choice');
const characterOrigin = document.querySelector('#origin-text');

// Functie om samenvatting weer te geven
function displaySummary() {
  const summaryParagraph = document.querySelector('#summary-paragraph');
  summaryParagraph.textContent = `Your superhero name is ${characterName.value}. 
  Their ability is ${characterAbility.value}. 
  Their origin story is ${characterOrigin.value}.`;
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

// Lichtmodus-functie

// Controleer lokale opslag

// Held-functie wijzigen
