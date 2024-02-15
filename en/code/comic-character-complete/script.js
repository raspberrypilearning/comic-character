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
    var summaryParagraph = document.querySelector("#summary-paragraph");

    summaryParagraph.textContent = `Your superhero name is ${name.value}. 
    Your abilities are ${ability.value}. Your appearance is ${appearance.value}. 
    Your origin story is ${origin.value}.`;

    characterSheet.style.display = "none";
    summary.style.display = "flex";
}

function changeSummary() {

    characterSheet.style.display = "block";
    summary.style.display = "none";
}

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
document.addEventListener("DOMContentLoaded", function () {
    const lightModeToggle = document.querySelector("#lightModeToggle");
  
    // Check if light mode preference is stored in local storage
    const isLightMode = localStorage.getItem("lightMode") === "true";
  
    // Set initial light mode state based on the stored preference
    document.body.classList.toggle("light-mode", isLightMode);
    lightModeToggle.checked = isLightMode;
  
    lightModeToggle.addEventListener("change", function () {
      const isLightMode = lightModeToggle.checked;
  
      // Check if light mode is already in the desired state
      if (isLightMode !== document.body.classList.contains("light-mode")) {
        // Update body class and store the user's preference in local storage
        document.body.classList.toggle("light-mode", isLightMode);
        localStorage.setItem("lightMode", isLightMode.toString());
      }
    });
});

// Place Hero slider variables here 
let currentHeroIndex = 0;
const heroSlides = document.querySelectorAll('.hero-slide');

// Change Hero function
function changeHero(direction) {
    //Turn the current slide off
    heroSlides[currentHeroIndex].classList.remove("active");

    // Find the next slide
    currentHeroIndex = currentHeroIndex + direction;

    // Wrap around
    if (currentHeroIndex < 0){
        currentHeroIndex = heroSlides.length - 1;
    } else if (currentHeroIndex > heroSlides.length - 1) {
        currentHeroIndex = 0;
    }

    // Update the slider
    heroSlides[currentHeroIndex].classList.add("active");
}


