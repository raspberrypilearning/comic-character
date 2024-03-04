// Update Copyright Year function 
const currentYear = new Date();
document.querySelector("#currentYear").innerText = `${currentYear.getFullYear()}`;

// Create constants for superhero form
const summary = document.querySelector("#summary-section");
const characterDetails = document.querySelector("#character-details");

const characterName = document.querySelector("#name-text");
const characterAbility = document.querySelector("#ability-choice");
const characterAppearance = document.querySelector("#appearance-text");
const characterOrigin = document.querySelector("#origin-text");

// Function to display summary
function displaySummary() {
  const summaryParagraph = document.querySelector("#summary-paragraph");

  summaryParagraph.textContent = `Your superhero name is ${characterName.value}. 
  Your ability is ${characterAbility.value}. Your appearance is ${characterAppearance.value}. 
  Your origin story is ${characterOrigin.value}.`;

  characterDetails.style.display = "none";
  summary.style.display = "flex";
}

// Function to edit summary

// Function to validate the character creation form 

// Light mode function 
  
// Check local storage 

    // Check if light mode preference is stored in local storage
  
    // Set initial light mode state based on the stored preference
     
// Place Hero slider variables here 

// Change Hero function

    //Turn the current slide off

    // Find the next slide

    // Wrap around

    // Update the slider



