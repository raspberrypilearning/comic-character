// Place Hero slider variables here 
let currentHeroIndex = 0;
const totalHeroSlides = document.querySelectorAll('.hero-slide').length;
// Place Hero slider next button function here 
function nextHero() {
    currentHeroIndex = (currentHeroIndex + 1) % totalHeroSlides;
    updateHeroSlider();
}
// Place Hero slider previous button function here 
function prevHero() {
    currentHeroIndex = (currentHeroIndex - 1 + totalHeroSlides) % totalHeroSlides;
    updateHeroSlider();
}
// Place Update Slider function here 
function updateHeroSlider() {
    const heroSlider = document.querySelector('.hero-slider');
    const heroSlideWidth = document.querySelector('.hero-slide').offsetWidth;
    heroSlider.style.transform = `translateX(${-currentHeroIndex * heroSlideWidth}px)`;
}

// Update Copyright Year function 
const currentYear = new Date();
document.querySelector("#currentYear").innerHTML = `${currentYear.getFullYear()}`;

// Update Create Comic function 
function changeDisplay(id) {
    var input = document.querySelector("#" + id);
    var inputSection = document.querySelector("#" + id + "-input");
    var displaySection = document.querySelector("#" + id + "-display");
    var valueDisplay = document.querySelector("#" + id + "-span");

    valueDisplay.textContent = input.value;
    inputSection.style.display = "none";
    displaySection.style.display = "flex";

    // Check if all changeDisplay actions are completed
    if (id === "origin") {
        displaySummary(); // Call displaySummary after all changeDisplay actions
    }
}

// Function to display summary
function displaySummary() {
    var summaryParagraph = document.getElementById("summary-paragraph");

    var name = document.getElementById("name-span").textContent;
    var abilities = document.getElementById("class-span").textContent;
    var appearance = document.getElementById("description-span").textContent;
    var origin = document.getElementById("origin-span").textContent;

    summaryParagraph.textContent = `Your superhero name is ${name}. 
    Your abilities are ${abilities}. Your appearance is ${appearance}. 
    Your origin story is ${origin}.`;

    document.getElementById("summary-section").style.display = "block";
}

// Light mode function 
document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
  
    // Check if dark mode preference is stored in local storage
    const isDarkMode = localStorage.getItem("darkMode") === "true";
  
    // Set initial dark mode state based on the stored preference
    document.body.classList.toggle("dark-mode", isDarkMode);
    darkModeToggle.checked = isDarkMode;
  
    darkModeToggle.addEventListener("change", function () {
      const isDarkMode = darkModeToggle.checked;
  
      // Check if dark mode is already in the desired state
    if (isDarkMode !== document.body.classList.contains("dark-mode")) {
      // Update body class and store the user's preference in local storage
      document.body.classList.toggle("dark-mode", isDarkMode);
      localStorage.setItem("darkMode", isDarkMode.toString());
    }
    });
  });

