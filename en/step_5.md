## Captcha / Logout

<div style="display: flex; flex-wrap: wrap">
<div style="flex-basis: 200px; flex-grow: 1; margin-right: 15px;">
Add an introductory sentence. What will learners achieve by the end of this step?
</div>
<div>
Image, gif or video showing what they will achieve by the end of the step. ![](images/image.png){:width="300px"}
</div>
</div>

--- task ---

Another step of tasks to complete.

--- /task ---

--- task ---

Step content... 
Can use:
**Test:**
**Choose:**
**Tip:**

--- /task ---

--- save ---

### Code to Add

## Captcha

#### HTML add to index before header

  <section id="captchaSection" class="center-container" onload="generate()">
        <h1>Login</h1>
        <p>Welcome Comic book creator, enter the captcha to unlock exclusive content!</p>
        <span id="user-input" class="inline">
            <input type="text"
                   id="submit"
                   placeholder=" Enter Captcha code" />
        </span>
     
        <span class="inline" onclick="generate()">
            <i class="fas fa-sync"></i>
        </span>
     
        <span id="image"
             class="inline"
             selectable="False">
        </span>
        <input type="Submit"
               id="btn"
               onclick="printmsg()" />
     
        <p id="key"></p>
    </section>

    Add just above header:
     <div id="successfulLogin" style="display: none;">

#### Javascript
// Captcha Function
let captcha;

document.addEventListener("DOMContentLoaded", function () {
    // Check if the user has already successfully logged in during this session
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn === 'true') {
        // If already logged in, hide the captcha section and show the successful login section
        document.getElementById("captchaSection").style.display = 'none';
        document.getElementById("successfulLogin").style.display = 'block';
    } else {
        // If not logged in, show the captcha section
        document.getElementById("captchaSection").style.display = 'block';
        document.getElementById("successfulLogin").style.display = 'none';

        // Call generate function to load captcha
        generate();
    }
});

function generate() {
    // Clear old input
    document.getElementById("submit").value = "";

    // Access the element to store the generated captcha
    captcha = document.getElementById("image");
    let uniquechar = "";

    const randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    // Generate captcha for length of 5 with random character
    for (let i = 0; i < 5; i++) {
        uniquechar += randomchar.charAt(
            Math.random() * randomchar.length
        );
    }

    // Store generated input
    captcha.innerHTML = uniquechar;
}

function printmsg() {
    const usr_input = document.getElementById("submit").value;

    // Check whether the input is equal to the generated captcha or not
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