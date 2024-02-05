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

// Update Copyright Year function 

// Update Create Comic function 

// Function to display summary

// Light mode function 


// Captcha Function


// Function to logout and clear local storage