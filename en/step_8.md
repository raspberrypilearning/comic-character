## Upgrade your project

+ conditional statement for the summary area

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
                        <option value="Super Strength">Super Strength</option>
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

<div style="display: flex; flex-wrap: wrap">
<div style="flex-basis: 200px; flex-grow: 1; margin-right: 15px;">
Summary or upgrade project task
</div>
<div>
![](images/image.png){:width="300px"}
</div>
</div>

--- collapse ---

---
title: Completed project
---

You can view the [completed project here](https://scratch.mit.edu/projects/485673032/){:target="_blank"}.

--- /collapse ---

--- save ---