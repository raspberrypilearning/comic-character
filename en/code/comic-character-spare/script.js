// Place Hero slider variables here 
let currentHeroIndex = 0;
const totalHeroSlides = document.querySelectorAll('.hero-slide').length;

// Place Hero slider next button function here 
function nextHero() {
    currentHeroIndex = (currentHeroIndex + 1) % totalHeroSlides;

    // Function to update the slider
    const heroSlider = document.querySelector('.hero-slider');
    const heroSlideWidth = document.querySelector('.hero-slide').offsetWidth;
    heroSlider.style.transform = `translateX(${-currentHeroIndex * heroSlideWidth}px)`;
}

// Place Hero slider previous button function here 
function prevHero() {
    currentHeroIndex = (currentHeroIndex - 1 + totalHeroSlides) % totalHeroSlides;

    // Function to update the slider
    const heroSlider = document.querySelector('.hero-slider');
    const heroSlideWidth = document.querySelector('.hero-slide').offsetWidth;
    heroSlider.style.transform = `translateX(${-currentHeroIndex * heroSlideWidth}px)`;
}

// Update Create Character function 
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

function displaySummary() {
    const summaryParagraph = document.getElementById("summary-paragraph");

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

// CAPTCHA Check Function
let captcha;

document.addEventListener("DOMContentLoaded", function () {
    // Check if the user has already successfully logged in during this session
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn === 'true') {
        // If already logged in, hide the CAPTCHA section and show the successful login section
        document.getElementById("captchaSection").style.display = 'none';
        document.getElementById("successfulLogin").style.display = 'block';
    } else {
        // If not logged in, show the CAPTCHA section
        document.getElementById("captchaSection").style.display = 'block';
        document.getElementById("successfulLogin").style.display = 'none';

        // Call generate function to load CAPTCHA
        generate();
    }
});

// Generate Random characters
function generate() {
    // Clear old input
    document.getElementById("submit").value = "";

    // Access the element to store the generated CAPTCHA
    captcha = document.getElementById("image");
    let uniquechar = "";

    const randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    // Generate CAPTCHA for length of 5 with random character
    for (let i = 0; i < 5; i++) {
        uniquechar += randomchar.charAt(
            Math.random() * randomchar.length
        );
    }

    // Store generated input
    captcha.innerHTML = uniquechar;
}

// CAPTCHA print message function
function printmsg() {
    const usr_input = document.getElementById("submit").value;

    // Check whether the input is equal to the generated CAPTCHA or not
    if (usr_input == captcha.innerHTML) {
        document.getElementById("key").innerHTML = "Matched";
        // Store the successful login state in local storage
        localStorage.setItem('isLoggedIn', 'true');
        document.getElementById("captchaSection").style.display = 'none';
        document.getElementById("successfulLogin").style.display = 'block';
        generate();
    } else {
        document.getElementById("key").innerHTML = "not Matched";
        generate();
    }
}

// Function to logout and clear local storage
function logout() {
    localStorage.removeItem('isLoggedIn');
    document.getElementById("captchaSection").style.display = 'block';
    document.getElementById("successfulLogin").style.display = 'none';
    generate();
}

// Update Copyright Year function 
const currentYear = new Date();
document.querySelector("#currentYear").innerHTML = `${currentYear.getFullYear()}`;
