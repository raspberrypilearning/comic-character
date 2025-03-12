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

// Maak de constante voor de lichtmodus

// Lichtmodus-functie

// Controleer lokale opslag

// Held-functie wijzigen
