## 升级你的项目

如果你有时间，你可以：

- 在 `character.html` 上添加更多能力
- 向你的超级英雄创作表单添加更多表单元素
- 向首页横幅滑块添加更多图像

\--- collapse ---

---

## title: 为超级英雄创建表单添加更多能力

## --- code ---

language: html
filename: character.html
line_numbers: false
line_number_start:
line_highlights:
-----------------------------------------------------

```
    <label for="ability-choice">能力：</label>
    <select id="ability-choice">
      <option value="">选择一个选项</option>
      <option value="Flight">飞行</option>
      <option value="Invisibility">隐形</option>
      <option value="Time travel">时间旅行</option>
      <option value="Telepathy">心灵感应</option>
      <option value="Visions">预测未来</option>
      <option value="Stretch">弹力伸展</option>
      <option value="Shapeshift">变形</option>
      <option value="Speedstar">极速</option>
      <option value="Ice">冰冻</option>
    </select>
```

\--- /code ---

\--- /collapse ---

\--- collapse ---

---

## title: 添加更多表单字段

### 示例：添加角色所在的国家/地区

- 将 HTML 添加到 `character.html`

## --- code ---

language: html
filename: character.html
line_numbers: false
line_number_start:
line_highlights:
-----------------------------------------------------

```
    <label for="country-choice">你的英雄来自哪里？：</label>
    <select id="country-choice">
      <option value="">选择一个选项</option>
      <option value="Space">太空</option>
      <option value="Wakanda">瓦坎达</option>
      <option value="USA">美国</option>
      <option value="UK">英国</option>
      <option value="India">印度</option>
      <option value="China">中国</option>
      <option value="Nigeria">尼日利亚</option>
      <option value="Australia">澳大利亚</option>
      <option value="South Africa">南非</option>
    </select>
```

\--- /code ---

- 更新 `scripts.js` 上的 JavaScript。

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 8, 15, 41, 42
-------------------------------------------------------------------

// 为超级英雄表单创建常量
const characterDetails = document.querySelector("#character-details");
const summary = document.querySelector("#summary-section");

const name = document.querySelector("#name-text");
const characterAbility = document.querySelector("#ability-choice");
const characterCountry = document.querySelector("#country-choice");
const characterOrigin = document.querySelector("#origin-text");

// 显示概述的函数
function displaySummary() {
const summaryParagraph = document.querySelector("#summary-paragraph");

summaryParagraph.textContent = `你的超级英雄名字是 ${characterName.value}。 
  他们的能力是 ${characterAbility.value}。 它们来自 ${characterCountry.value}。
  他们的起源故事是 ${characterOrigin.value}。`;

characterDetails.style.display = "none";
summary.style.display = "flex";
}

// 编辑概述的函数
function changeSummary() {
characterDetails.style.display = "flex";
summary.style.display = "none";
}

// 用于检查字符详细信息的函数
const alertBox = document.querySelector("#alert");

function checkForm(){

var alertMessage = "";

if (characterName.value == ""){
alertMessage = "请输入名称";
} else if (characterAbility.value == "") {
alertMessage = "请选择一项能力";
} else if (characterCountry.value == "") {
alertMessage = "请选择你的英雄来自哪里";
} else if (characterOrigin.value == "") {
alertMessage = "请写下起源故事";
}

if (alertMessage != ""){
alertBox.innerText = alertMessage;
alertBox.style.display = "block";
} else {
alertBox.style.display = "none";
displaySummary();
}
}

\--- /code ---

\--- /collapse ---

\--- collapse ---

---

## title: 向滑块添加更多首页横幅图像

在初始项目中，你可以为你的首页横幅滑块使用更多图像：

`kwame-cape.jpg` 和 `ellenhero-image.jpg`

你可以通过更新 `index.html` 和 `scripts.js` 向滑块添加更多图像。

## --- code ---

language: html
filename: index.html
line_numbers: false
line_number_start:
line_highlights:
-----------------------------------------------------

```
  <div class="hero-container">
    <div class="hero-slider">
      <span class="hero-slide active"><img src="stacey-hero.jpg" alt="A superhero character with blonde hair, wearing a blue costume and red cape, in front of a blue and yellow background"></span>
      <span class="hero-slide"><img src="safina-cape.jpg" alt="A superhero character with black hair, wearing a red and white costume and blue cape, in front of a blue and yellow background"></span>
      <span class="hero-slide"><img src="layton-slider.jpg" alt="A superhero character with blonde hair, wearing a blue costume and red cape, in front of a blue background"></span>
      <span class="hero-slide"><img src="kwame-cape.jpg" alt="A superhero character in a superhero costume standing proudly in front of majestic mountain range."></span>
      <span class="hero-slide"><img src="ellenhero-image.jpg" alt="A superhero character in a red cape and blue shirt standing in front of mountains."></span>
  </div>
```

\--- /code ---

当你拥有更多英雄图像时，您需要更改 `if` 和 `else if` 语句以处理 `querySelectorAll` 返回的更长的 `currentHeroIndex` 长度。

如果你有五张图片，那么你将需要像这样更改代码：

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 75
line_highlights: 85-86
-----------------------------------------------------------

// 更改 Hero 函数
const heroSlides = document.querySelectorAll('.hero-slide');
var currentHeroIndex = 0;

function changeHero(direction) {

heroSlides[currentHeroIndex].classList.remove("active");
currentHeroIndex = currentHeroIndex + direction;

if (currentHeroIndex < 0){
currentHeroIndex = 4;
} else if (currentHeroIndex > 4) {
currentHeroIndex = 0;
}

heroSlides[currentHeroIndex].classList.add("active");

}

\--- /code ---

如果你想处理任意数量的图像，那么你只需检查 `currentHeroIndex` 的长度，而不是处理固定长度。

`.length` 属性返回列表中元素的数量。

- 如果 `currentHeroIndex` 的值小于 `0`，则将其设置为列表中的最后一个索引（与列表长度减 1 相同的索引）
- 如果 `currentHeroIndex` 的值大于列表中的最后一个索引，则将其设置为 `0`

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 75
line_highlights: 85-86
-----------------------------------------------------------

// 更改 Hero 函数
const heroSlides = document.querySelectorAll('.hero-slide');
var currentHeroIndex = 0;

function changeHero(direction) {

heroSlides[currentHeroIndex].classList.remove("active");
currentHeroIndex = currentHeroIndex + direction;

if (currentHeroIndex < 0){
currentHeroIndex = heroSlides.length - 1;
} else if (currentHeroIndex > heroSlides.length - 1) {
currentHeroIndex = 0;
}

heroSlides[currentHeroIndex].classList.add("active");

}

\--- /code ---

\--- /collapse ---

\--- collapse ---

---

## title: 查看升级后的项目

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/comic-character-upgrade" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

你可以在此处查看 [升级后的项目文件](https://editor.raspberrypi.org/en/projects/comic-character-upgrade){:target="_blank"}。

\--- /collapse ---
