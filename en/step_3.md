## Add form input fields

Create an interactive hero slider for your webpage, so users can navigate through different hero images with next and previous buttons.
<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/comic-character-step3" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 1
line_highlights: 3
---

    

--- /code ---

## Add a Hero slider - Might be better after functions

#### HTML index.html
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


#### HTML comicbook.html
Add to main
<section>
            <div class="character-sheet">
                <div class="name-section">
                <div id="name-input">
                    <label>Superhero Name:</label>
                    <input type="text" id="name">
                    <button onclick="changeDisplay('name')">Submit</button>
                </div>
                <div id="name-display">
                    <h2>Superhero Name:</h2>
                    <span id="name-span"></span>
                </div>
            </div>
            <div class="class-section">
                <div id="class-input">
                    <label>Abilities:</label>
                    <select id="class">
                        <option value="Flight">Flying</option>
                        <option value="XXL Strength">XXL Strength</option>
                        <option value="Fire">Fire</option>
                        <option value="Ice">Ice</option>
                        <option value="Laser Rays">Laser Rays</option>
                        <option value="Telepathy">Telepathy</option>
                        <option value="Visions">Visions</option>
                        <option value="Stretch">Stretch</option>
                        <option value="Invisibility">Invisibility</option>
                        <option value="Shapeshift">Shapeshift</option>
                        <option value="Super speed">Speedstar</option>
                        <option value="Magic">Magic</option>
                        <option value="Time hop">Time travel</option>
                    </select>
                    <button onclick="changeDisplay('class')">Submit</button>
                </div>
                <div id="class-display">
                    <h2>Abilities:</h2>
                    <span id="class-span"></span>
                </div>
            </div>
            <div class="description-section">
                <div id="description-input">
                    <label>Appearance: </label> 
                    <textarea id="description">Type the appearance of your comic character here....</textarea>
                    <button onclick="changeDisplay('description')">Submit</button>
                </div>
                <div id="description-display">
                    <h2>Appearance:</h2>
                    <span id="description-span"></span>
                </div>
            </div>
            <div class="origin-section">
                <div id="origin-input">
                    <label>Origin Story: </label> 
                    <textarea id="origin">Type your origin story here....</textarea>
                    <button onclick="changeDisplay('origin')">Submit</button>
                </div>
                <div id="origin-display">
                    <h2>Origin Story:</h2>
                    <span id="origin-span"></span>
                </div>
            </div>
        </section>
        <section id="summary-section">
            <h2>Superhero Summary</h2>
            <p id="summary-paragraph"></p>
        </section>


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

