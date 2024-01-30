## Add form input fields

Create an interactive hero slider for your webpage, so users can navigate through different hero images with next and previous buttons.
<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/comic-character-step3" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

--- task ---

Open comicbook.html.


--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 20
line_highlights: 24-25
---

      <section>
        <div class="character-sheet">
         
        </div>
      </section>
    
--- /code ---

--- /task ---

--- task ---

Open comicbook.html.


--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 20
line_highlights: 24-25
---

      <section>
        <div class="character-sheet">
          <div class="name-section">
            <div id="name-input">
              <label>Superhero Name:</label>
              <input type="text" id="name">
              <button onclick="changeDisplay('name')">Submit</button>
           </div>
         </div>
       </div>
      </section>
    
--- /code ---

--- /task ---

--- task ---

Open comicbook.html.


--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 20
line_highlights: 24-25
---

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
       </div>
      </section>
    
--- /code ---

--- /task ---

--- task ---


--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 20
line_highlights: 24-25
---

      <div class="class-section">
                <div id="class-input">
                    <label>Abilities:</label>
                    <select id="class">
                        <option value="Flying">Flying</option>
                        <option value="Invisibility">Invisibility</option>
                        <option value="Time travel">Time travel</option>
                    </select>
                    <button onclick="changeDisplay('class')">Submit</button>
                </div>
               


            </div>
    
--- /code ---

--- /task ---

--- task ---


--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 20
line_highlights: 24-25
---

      <div class="class-section">
                <div id="class-input">
                    <label>Abilities:</label>
                    <select id="class">
                        <option value="Flying">Flying</option>
                        <option value="Invisibility">Invisibility</option>
                        <option value="Time travel">Time travel</option>
                    </select>
                    <button onclick="changeDisplay('class')">Submit</button>
                </div>
                <div id="class-display">
                    <h2>Abilities:</h2>
                    <span id="class-span"></span>
                </div>
            </div>
    
--- /code ---

--- /task ---

--- task ---


--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 20
line_highlights: 24-25
---

     <div class="description-section">
                <div id="description-input">
                    <label>Appearance: </label> 
                    <textarea id="description">Type the appearance of your comic character here....</textarea>
                    <button onclick="changeDisplay('description')">Submit</button>
                </div>
                
            </div>
    
--- /code ---

--- /task ---

--- task ---


--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 20
line_highlights: 24-25
---

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
    
--- /code ---

--- /task ---

--- task ---


--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 20
line_highlights: 24-25
---

       <div class="origin-section">
                <div id="origin-input">
                    <label>Origin Story: </label> 
                    <textarea id="origin">Type your origin story here....</textarea>
                    <button onclick="changeDisplay('origin')">Submit</button>
                </div>
            </div>
    
--- /code ---

--- /task ---

--- task ---


--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 20
line_highlights: 24-25
---

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
    
--- /code ---

--- /task ---

--- task ---


--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 20
line_highlights: 24-25
---

 <section id="summary-section">
            <h2>Superhero Summary</h2>
            <p id="summary-paragraph"></p>
        </section>
    
--- /code ---

--- /task ---

