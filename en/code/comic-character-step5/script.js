// Update Copyright Year function 
const currentYear = new Date();
document.querySelector("#currentYear").innerHTML = `${currentYear.getFullYear()}`;

// Create constants for superhero form
const characterSheet = document.querySelector("#character-sheet");
const summary = document.querySelector("#summary-section");

const name = document.querySelector("#name-text");
const ability = document.querySelector("#ability-choice");
const appearance = document.querySelector("#appearance-text");
const origin = document.querySelector("#origin-text");

// Function to display summary
function displaySummary() {
  const summaryParagraph = document.querySelector("#summary-paragraph");

  summaryParagraph.textContent = `Your superhero name is ${name.value}. 
  Your abilities are ${ability.value}. Your appearance is ${appearance.value}. 
  Your origin story is ${origin.value}.`;

  characterSheet.style.display = "none";
  summary.style.display = "flex";
}

// Function to edit summary
function changeSummary() {

  characterSheet.style.display = "flex";
  summary.style.display = "none";
}

// Function to validate the character creation form 
const alertBox = document.querySelector("#alert");

function validateForm(){

    var alertMessage = ""

    if (name.value == ""){
        alertMessage = "Please enter a name"; 
    } else if (ability.value == "") {
        alertMessage = "Please choose an ability";
    }  else if (appearance.value == "") {
        alertMessage = "Please describe the appearance";
    } else if (origin.value == "") {
        alertMessage = "Please write the origin story";
    } 
    
    if (alertMessage != ""){
        alertBox.innerHTML = alertMessage;
        alertBox.style.display = "block";
    } else {
        alertBox.style.display = "none";
        displaySummary();
    }
}


// Light mode function 
  
    // Check if light mode preference is stored in local storage
  
    // Set initial light mode state based on the stored preference
  
      // Check if light mode is already in the desired state
     
// Place Hero slider variables here 

// Change Hero function

    //Turn the current slide off

    // Find the next slide

    // Wrap around

    // Update the slider



