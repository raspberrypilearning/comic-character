// Update Copyright Year function 
const currentYear = new Date();
document.querySelector("#currentYear").innerText = currentYear.getFullYear();

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
    Your abilities are ${characterAbility.value}. Your appearance is ${characterAppearance.value}. 
    Your origin story is ${characterOrigin.value}.`;

    characterDetails.style.display = "none";
    summary.style.display = "flex";
}

// Function to edit form content
function changeSummary() {
    characterDetails.style.display = "flex";
    summary.style.display = "none";
}

// Function to validate the character creation form 
const alertBox = document.querySelector("#alert");

function validateForm(){

    var alertMessage = ""

    if (characterName.value == ""){
        alertMessage = "Please enter a name"; 
    } else if (characterAbility.value == "") {
        alertMessage = "Please choose an ability";
    } else if (characterAppearance.value == "") {
        alertMessage = "Please describe the appearance";
    } else if (characterOrigin.value == "") {
        alertMessage = "Please write the origin story";
    } 
    
    if (alertMessage != ""){
        alertBox.innerText = alertMessage;
        alertBox.style.display = "block";
    } else {
        alertBox.style.display = "none";
        displaySummary();
    }
}

//Create the constant for light mode
const lightModeToggle = document.querySelector("#lightModeToggle");

// Light mode function
function changeLightMode(){
    var isLightMode = lightModeToggle.checked;

    document.body.classList.toggle("light-mode", isLightMode);

    localStorage.setItem("lightMode", isLightMode.toString());
}

// Check local storage 
document.addEventListener("DOMContentLoaded", function () {    
  
    // Check if light mode preference is stored in local storage
    var isLightMode = localStorage.getItem("lightMode") === "true";
  
    // Set initial light mode state based on the stored preference
    document.body.classList.toggle("light-mode", isLightMode);
    lightModeToggle.checked = isLightMode;
});

// Place Hero slider variables here 

// Change Hero function


