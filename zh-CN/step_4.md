## 使物品出现和消失

在此步骤中，你将使用 JavaScript 让表单的各个部分显示和消失。

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/comic-character-step4?page=character.html" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### 显示概述部分

你的用户需要按下按钮来显示概述部分。

可以向按钮添加 `onclick` 事件。

JavaScript 可用于对此事件做出反应并显示概述。

\--- collapse ---

---

## title: 其他事件

事件可以由用户或浏览器触发。

- 用户事件：
  - 鼠标事件（单击、双击、鼠标悬停）
  - 键盘事件（按键、键盘按下、键盘弹起）
  - 触摸事件（触摸开始、移动、触摸结束）

- 浏览器事件：
  - 页面加载事件（加载、卸载）
  - 窗口事件（调整大小、滚动）
  - 时间事件（setInterval、setTimeout）

\--- /collapse ---

\--- task ---

打开 `character.html` 文件。

在起源故事的 `div` 下方添加一个带有事件 `onclick="displaySummary()"` 的 `<button>` 元素。

将文本“创建”添加到 `<button>` ，以便用户知道该按钮的作用。

## --- code ---

language: html
filename: character.html
line_numbers: true
line_number_start: 33
line_highlights: 35
--------------------------------------------------------

```
    <label for="origin-text">起源故事：</label>
    <textarea id="origin-text" placeholder="Add your superhero origin story!"></textarea>
    <button onclick="displaySummary()">创造</button>
  </section>
```

\--- /code ---

\--- /task ---

\--- task ---

**点击运行**

- 你将在超级英雄表单下方看到一个创建按钮
- 创建按钮目前没有任何作用

\--- /task ---

当用户单击创建按钮时不会发生任何事情。

这是因为概述部分的 CSS `display` 属性设置为 `none`。

你需要使用 JavaScript 将概述部分的 `display` 属性更改为 `flex`。

当显示概述部分时，你将隐藏角色详细信息表单。

### 创建常量来引用每个部分

你的函数将使用常量来引用每个部分。

\--- task ---

打开 `scripts.js`。

使用 `querySelector()` 方法查找：

- 概述部分元素并将其分配给常量 `summary`
- 角色详细信息部分元素并将其分配给常量 `characterDetails`

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 5
line_highlights: 6-7
---------------------------------------------------------

// 为超级英雄表单创建常量
const summary = document.querySelector("#summary-section");
const characterDetails = document.querySelector("#character-details");

\--- /code ---

\--- /task ---

### 创建常量来引用每个表单字段

你需要在概述部分显示三个角色的详细信息。

将每个设置为常量，以便你可以在代码中引用它们。

\--- task ---

使用 `querySelector()` 方法查找表单元素并将每个元素分配给一个常量。

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 5
line_highlights: 9-11
----------------------------------------------------------

// 为超级英雄表单创建常量
const summary = document.querySelector("#summary-section");
const characterDetails = document.querySelector("#character-details");

const characterName = document.querySelector("#name-text");
const characterAbility = document.querySelector("#ability-choice");
const characterOrigin = document.querySelector("#origin-text");

\--- /code ---

\--- /task ---

### 更新概述内容

在 `character.html` 中，你添加了一个具有属性 `id="summary-paragraph"` 的 `<p>` 元素。

\--- collapse ---

\*\*提示：\*\*这只是为了提醒你。 你不必再写一遍！

---

## title: 你之前创建的概述段落

## --- code ---

language: html
filename: character.html
line_numbers: false
line_number_start:
line_highlights: 3
-------------------------------------------------------

```
  <section id="summary-section">
    <h2>超级英雄概要</h2>
    <p id="summary-paragraph"></p>
  </section>
```

\--- /code ---

\--- /collapse ---

概述段落将显示角色详细信息的概述。

你需要一个函数来更新概述段落的内容。

\--- task ---

创建一个函数 `displaySummary()`。

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 13
line_highlights: 14-16
-----------------------------------------------------------

// 显示概述的函数
function displaySummary() {

}

\--- /code ---

\--- /task ---

`displaySummary()` 函数需要使用属性 `id="summary-paragraph"` 更改 `<p>` 元素。

\--- task ---

使用 `querySelector()` 查找具有属性 `id="summary-paragraph"` 的 `<p>` 元素。

将元素分配给常量 `summaryParagraph`。

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 13
line_highlights: 15
--------------------------------------------------------

// 显示概述的函数
function displaySummary() {
const summaryParagraph = document.querySelector("#summary-paragraph");

}

\--- /code ---

\--- /task ---

你之前已更改 HTML 元素的 `.innerText`属性。

在这里，你将更改概述段落的 `.textContent` 属性以包含用户在每个字段中输入的值。

每个值都会出现在介绍该值的文本旁边（例如“你的超级英雄名称是”）

你可以使用 `字符串格式化` 来执行此操作。

\--- collapse ---

---

## title: 什么是字符串格式化？

字符串是 JavaScript 和其他编程语言中的一种数据类型。

字符串是双引号 `“”` 或单引号 `''` 之间的字符集合。

你可以使用模板字符串或字符串连接来格式化字符串。

### 模板字符串

如果你想在字符串中包含常量、变量或表达式的值，那么你可以使用模板字符串。

不要使用 `" "` 或 `' '`，而是使用反引号 `` ` ` `` 来表示字符串。

然后使用 `${}` 并将常量、变量或表达式放在 `{}` 部分内。

下面是一个示例：

- 将常量 `heroName` 和 `age` 中的值包含在字符串中。

## --- code ---

language: js
filename: scripts.js
line_numbers: false
--------------------------------------------------------

const heroName =“蜘蛛侠”;
const age = 25;
const message =`你好， ${heroName}！ 你已经 ${age} 岁了。`;

\--- /code ---

### 字符串连接

连接是将事物拼接在一起的行为。

你可以使用 `+` 运算符将字符串连接在一起。

下面是一个示例：

## --- code ---

language: js
filename: scripts.js
line_numbers: false
--------------------------------------------------------

const superhero = "钢铁侠";
const power = "盔甲套装";

const description = "超级英雄 " + superhero + " 拥有 " + 力量 + "。";

\--- /code ---

\--- /collapse ---

\--- task ---

更新 `summaryParagraph` 的 `.textContent`。

\*\*注意：\*\*文本内容在反引号 `` ` ` `` 内，而不是使用 `" "` 或 `' '`。

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 13
line_highlights: 17-19
-----------------------------------------------------------

// 显示概述的函数
function displaySummary() {
const summaryParagraph = document.querySelector("#summary-paragraph");

summaryParagraph.textContent = `你的超级英雄名字是 ${characterName.value}。 
  他们的能力是 ${characterAbility.value}。 
  他们的起源故事是 ${characterOrigin.value}。`;

}

\--- /code ---

\--- /task ---

### 隐藏角色详细信息表单

\--- task ---

将角色详细信息 `<section>` 的 `display` 属性值设置为 `none`。

这将隐藏页面上的整个表单。

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 13
line_highlights: 21
--------------------------------------------------------

// 显示概述的函数
function displaySummary() {
const summaryParagraph = document.querySelector("#summary-paragraph");

summaryParagraph.textContent = `你的超级英雄名字是 ${characterName.value}。 
  他们的能力是 ${characterAbility.value}。 
  他们的起源故事是 ${characterOrigin.value}。`;

characterDetails.style.display = "none";

}

\--- /code ---

\--- /task ---

\--- task ---

将概述 `<section>` 的 `display` 属性值设置为 `flex`。

这将在你的页面上显示概述部分。

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 13
line_highlights: 22
--------------------------------------------------------

// 显示概述的函数
function displaySummary() {
const summaryParagraph = document.querySelector("#summary-paragraph");

summaryParagraph.textContent = `你的超级英雄名字是 ${characterName.value}。 
  他们的能力是 ${characterAbility.value}。 
  他们的起源故事是 ${characterOrigin.value}。`;

characterDetails.style.display = "none";
summary.style.display = "flex";
}

\--- /code ---

\--- /task ---

\--- task ---

打开 `character.html`。

**点击运行**

- 填写角色详细信息
- 单击创建按钮时，表单将被隐藏，并显示概述部分
- 概述段落将包括你的性格的总结

\--- collapse ---

---

## title: 概述部分显示不正确

- 检查所有常量（`const`）的命名是否正确
- 检查创建函数时是否使用了正确的语法，包括 `()` 和 `{}`
- 检查你是否将 `onclick = "displaySummary()"` 添加为 `<button>` 元素上的事件
- 检查你是否在声明末尾添加了分号 `;`

\--- /collapse ---

\--- /task ---

太棒了！ 你已经创建了一个显示和隐藏元素的交互式表单。

接下来，你将允许用户编辑他们的选择！
