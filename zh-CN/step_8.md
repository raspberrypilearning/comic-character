## 创建首页横幅滑块

在此步骤中，你将为你的网页创建一个交互式英雄图像滑块。

用户可以使用按钮移动到下一个或上一个首页横幅图像。

<iframe src="https://editor.raspberrypi.org/zh-CN/embed/viewer/comic-character-complete" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### 首页横幅图像 HTML

你已获得 HTML 和 CSS 样式。

以下是 HTML：

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 28
line_highlights: 
---

      <main>
        <div class="hero-container">
          <div class="hero-slider">
            <span class="hero-slide active"><img src="stacey-hero.jpg" alt="一位金发超级英雄，身穿蓝色服装和红色斗篷，背景为蓝色和黄色。"></span>
            <span class="hero-slide"><img src="safina-cape.jpg" alt="一位黑发超级英雄，身穿红白相间的服装和蓝色斗篷，背景为蓝色和黄色。"></span>
            <span class="hero-slide"><img src="layton-slider.jpg" alt="蓝色背景前，一位金发超级英雄，身穿蓝色服装和红色斗篷。"></span>
          </div>
          <button class="hero-nav-btn prev" onclick="changeHero(-1)">❮</button>
          <button class="hero-nav-btn next" onclick="changeHero(+1)">❯</button>
        </div>
      </main>

--- /code ---

--- collapse ---

---
title: 我需要 HTML 解释
---

**第 31、32 和 33 行：**

- `<span>` 元素包含首页横幅图像
  - 它们都具有相同的属性：`class="hero-slide"`
- `active` 类用于显示特定图像

**第 35 行和第 36 行：**

- 用于向左导航的按钮 `<` 和向右导航的按钮 `>`
- JavaScript 函数 `changeHero()` 用作按钮按下的事件处理程序
  - 当单击 `<` 按钮时，将使用参数 `-1` 调用 `changeHero()` 函数
  - 当单击 `>` 按钮时，将使用参数 `+1` 调用 `changeHero()` 函数

--- /collapse ---

### 查找所有图像

你在前面的步骤中使用了 `querySelector()` 来查找与指定 CSS 选择器匹配的第一个元素。

你可以使用 `querySelectorAll()` 来查找并返回**所有** `<span>` 元素的列表。

--- task ---

打开 `scripts.js`。

找到注释 `//更改英雄功能`。

使用 `querySelectorAll()` 返回具有属性 `class="hero-slide"` 的所有元素的列表。

将列表分配给常量 `heroSlides`。

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 75
line_highlights: 76
---

// 更改 Hero 函数
const heroSlides = document.querySelectorAll('.hero-slide');

--- /code ---

--- /task ---

### 跟踪活跃的英雄形象

`heroSlides` 返回列表中的第一个元素位于索引 0。

     ___________   ___________   ___________  
    | 元素 1    | |   元素 2 | |    元素 3 |
     ‾‾‾‾‾‾‾‾‾‾‾   ‾‾‾‾‾‾‾‾‾‾    ‾‾‾‾‾‾‾‾‾‾‾
    |  索引 0   | |  索引 1  | |    索引 2 |


它将是滑块中第一个活动图像。

--- task ---

创建变量 `currentHeroIndex` 并赋值 `0`。

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 75
line_highlights: 77
---

// 更改 Hero 函数
const heroSlides = document.querySelectorAll('.hero-slide');
var currentHeroIndex = 0;

--- /code ---

--- /task ---

### 创建 changeHero() 函数

当用户移动到下一个或上一个图像时，将调用`changeHero()` 函数。

--- task ---

找到注释 `//更改英雄功能`。

创建一个带有参数 `direction` 的函数 `changeHero()`。

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
 <span style="color: #0faeb0">**参数**</span> 充当函数使用的值的占位符。
</p>

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 75
line_highlights: 79-81
---

// 更改 Hero 函数
const heroSlides = document.querySelectorAll('.hero-slide');
var currentHeroIndex = 0;

function changeHero(direction) {

}

--- /code ---

--- /task ---

### 删除活动图像

`changeHero()` 函数需要更新当前图像。

首先，它从当前 `<span>` 元素中删除 `active` 类。

--- task ---

从 `heroSlides` 列表中的 `currentHeroIndex` 处的元素中删除 `active` 类。

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 75
line_highlights: 81
---

// 更改 Hero 函数
const heroSlides = document.querySelectorAll('.hero-slide');
var currentHeroIndex = 0;

function changeHero(direction) {

  heroSlides[currentHeroIndex].classList.remove("active");

}

--- /code ---

方括号用于指代元素在列表中的位置。

因此，`heroSlides[currentHeroIndex]` 是列表 `heroSlides` 中位于 `currentHeroIndex` 的元素。

--- /task ---

### 更新当前索引

该函数改变了 `currentHeroIndex`。

它会根据传递给函数的 `direction` 值添加 `1` 或减去 `1`。

- 当单击 `<` 按钮时，将使用参数 `-1` 调用 `changeHero()` 函数
- 当单击 `>` 按钮时，将使用参数 `+1` 调用 `changeHero()` 函数

--- task ---

更新 `currentHeroIndex` 的值。

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 75
line_highlights: 82
---

// 更改 Hero 函数
const heroSlides = document.querySelectorAll('.hero-slide');
var currentHeroIndex = 0;

function changeHero(direction) {

  heroSlides[currentHeroIndex].classList.remove("active");
  currentHeroIndex = currentHeroIndex + direction;

}

--- /code ---

--- /task ---

### 处理“超出范围”

`heroSlides` 列表中有三个元素。

它们位于索引 `0`、`1` 和 `2`。

如果变量 `currentHeroIndex` 的值为 `2`，则调用 `changeHero(+1)` 会将其更改为 `3`。

🚨 但是没有索引 `3`🚨

如果变量 `currentHeroIndex` 的值为 `0`，则调用 `changeHero(-1)` 会将其更改为 `-1`。

🚨 但是没有索引 `-1` 🚨

你需要一种方法来处理这些“超出范围”的问题！

方法如下：

- 如果 `currentHeroIndex` 的值小于 `0`，则将其设置为列表中的最后一个索引（`2`）
- 如果 `currentHeroIndex` 的值大于 `2`，则将其设置为 `0`

--- task ---

使用带有 `else if` 语句的 `if` 语句来处理超出范围的问题。

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 75
line_highlights: 84-88
---

// 更改 Hero 函数
const heroSlides = document.querySelectorAll('.hero-slide');
var currentHeroIndex = 0;

function changeHero(direction) {

  heroSlides[currentHeroIndex].classList.remove("active");
  currentHeroIndex = currentHeroIndex + direction;

  if (currentHeroIndex < 0){
    currentHeroIndex = 2;
  } else if (currentHeroIndex > 2) {
    currentHeroIndex = 0;
  }

}

--- /code ---

--- /task ---

### 设置新的活动图像

你需要使当前索引处的元素处于活动状态。

--- task ---

将 `active` 类添加到当前索引处的元素。

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 75
line_highlights: 90
---

// 更改 Hero 函数
const heroSlides = document.querySelectorAll('.hero-slide');
var currentHeroIndex = 0;

function changeHero(direction) {

  heroSlides[currentHeroIndex].classList.remove("active");
  currentHeroIndex = currentHeroIndex + direction;

  if (currentHeroIndex < 0){
    currentHeroIndex = 2;
  } else if (currentHeroIndex > 2) {
    currentHeroIndex = 0;
  }

heroSlides[currentHeroIndex].classList.add("active");

}

--- /code ---

--- /task ---

--- task ---

打开 `index.html`。

**点击运行**

- 单击首页横幅图像滑块上的左侧 (<) 按钮，图像应该会发生变化
- 单击首页横幅图像滑块上的右侧 (>) 按钮，图像应该会发生变化

--- collapse ---

---
title: 按钮无法正常工作
---

- 确保在正确的位置使用了“小于”`<`符号或“大于”`>`符号。

--- /collapse ---

--- /task ---

太棒了！

你已经创建了一个交互式网站，以便用户可以创建自己的超级英雄角色。 你已检查用户输入并允许用户选择网站的主题。

下一步，使用回顾测验检查你对项目的理解。
