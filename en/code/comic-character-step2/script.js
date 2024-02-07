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

// Update Create Comic function 


     // Call displaySummary after all changeDisplay actions  

// Function to display summary

// Light mode function 

    // Check if dark mode preference is stored in local storage
   
    // Set initial dark mode state based on the stored preference
    
      // Check if dark mode is already in the desired state
    
      // Update body class and store the user's preference in local storage
    
// Update Copyright Year function 

// Captcha Check Function

// Generate Random characters

// Captcha print message function

// Function to logout and clear local storage

// Update Copyright Year function 
