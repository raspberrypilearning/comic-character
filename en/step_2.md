## Add a footer/ DOM Manipulation

#### HTML
<footer>
            <p> Ⓒ <span id="currentYear"></span> - All Rights Reserved</p>
        </footer>
        <script src="script.js"></script>

#### Javascript
// Update Copyright Year function 
const currentYear = new Date();
document.querySelector("#currentYear").innerHTML = `${currentYear.getFullYear()}`;

## Add a Hero slider - Might be better after functions

#### HTML
<main>

            <div class="hero-container">
                <div class="hero-slider">
                    <div class="hero-slide"><img src="stacey_hero.jpg" alt="Slide 1"></div>
                    <div class="hero-slide"><img src="safina_hero.jpg" alt="Slide 2"></div>
                    <div class="hero-slide"><img src="layton_hero.jpg" alt="Slide 3"></div>
                </div>
                <button class="hero-nav-btn prev" onclick="prevHero()">❮</button>
                <button class="hero-nav-btn next" onclick="nextHero()">❯</button>
            </div>
        </main>

#### Javascript
// Hero slider function 
let currentHeroIndex = 0;
const totalHeroSlides = document.querySelectorAll('.hero-slide').length;

function nextHero() {
    currentHeroIndex = (currentHeroIndex + 1) % totalHeroSlides;
    updateHeroSlider();
}

function prevHero() {
    currentHeroIndex = (currentHeroIndex - 1 + totalHeroSlides) % totalHeroSlides;
    updateHeroSlider();
}

function updateHeroSlider() {
    const heroSlider = document.querySelector('.hero-slider');
    const heroSlideWidth = document.querySelector('.hero-slide').offsetWidth;
    heroSlider.style.transform = `translateX(${-currentHeroIndex * heroSlideWidth}px)`;
}


~~~

~~~

<div style="display: flex; flex-wrap: wrap">
<div style="flex-basis: 200px; flex-grow: 1; margin-right: 15px;">
Add an introductory sentence. What will learners achieve by the end of this step?
</div>
<div>
Image, gif or video showing what they will achieve by the end of the step. ![](images/image.png){:width="300px"}
</div>
</div>

--- task ---

Open a [new Scratch project](http://rpf.io/scratch-new){:target="_blank"}. Scratch will open in another browser tab.

[[[working-offline]]]

--- /task ---

--- task ---

Step content... 
Can use:
**Test:**
**Choose:**
**Tip:**

--- /task ---

--- save ---

### Code to add

