// Update Copyright Year function
const currentDate = new Date();
document.querySelector('#copyrightYear').innerText = `${currentDate.getFullYear()}`;

// Create constants for superhero form
const summary = document.querySelector('#summary-section');
const characterDetails = document.querySelector('#character-details');
const characterName = document.querySelector('#name-text');
const characterAbility = document.querySelector('#ability-choice');
const characterOrigin = document.querySelector('#origin-text');

// Function to display summary
function displaySummary() {
  const summaryParagraph = document.querySelector('#summary-paragraph');
  summaryParagraph.textContent = `De naam van jouw superheld is ${characterName.value}. 
  De vaardigheid is ${characterAbility.value}. 
  Het oorsprongsverhaal is ${characterOrigin.value}.`;
  characterDetails.style.display = 'none';
  summary.style.display = 'flex';
}

// Function to edit summary
function changeSummary() {
  characterDetails.style.display = 'flex';
  summary.style.display = 'none';
}

// Function to check the character details form

// Create the constant for light mode

// Light mode function

// Check local storage

// Change Hero function
