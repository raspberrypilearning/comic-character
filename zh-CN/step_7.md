## 创建浅色模式主题

在此步骤中，你将创建一个切换开关，让用户可以在深色模式和亮色模式之间切换。

网站会记住用户的选择，即使他们导航到其他页面。

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/comic-character-step7" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
<span style="color: #0faeb0">**深浅**</span>颜色主题用于设计网站和应用程序。 深色模式是一种在深色背景上使用浅色文本和图标的配色方案。 浅色模式与此相反。 向用户提供此选项可提高可读性和可访问性。
</p>

你的 `style.css` 文件包含用于更新你网站配色方案的选择器。

\--- collapse ---

\*\*提示：\*\*这只是为了提醒你。 你不必再写一遍！

---

## title: 浅色模式样式

## --- code ---

language: css
filename: style.html
line_numbers: true
line_number_start: 244
--------------------------------------------------------------------------------

/\* 浅色模式样式 \*/

body.light-mode {
background: var(--background-colour-light-mode);
color: var(--text-colour-light-mode);
}

.light-mode .navigation {
background-color: var(--background-colour-light-mode-navigation);
}

.light-mode .year {
color: var(--text-colour-light-mode-year);
}

.light-mode .logo {
color: var(--text-colour-light-mode-logo);
}

.light-mode nav a {
color: var(--text-colour-light-mode-nav);
}

.light-mode nav a:hover {
color: var(--text-colour-light-mode-nav-hover);
}

.light-mode .header {
background: var(--background-colour-light-mode-header);
}

.light-mode footer {
background: var(--background-colour-light-mode-footer);
color: var(--text-colour-light-mode-footer);
}

\--- /code ---

\--- /collapse ---

### 在头部添加切换开关

你已经使用过 `<button>` 元素来触发事件。

这次，你将使用一个复选框（`<input type="checkbox">`）并将其样式化为开关，以便用户可以更改配色主题。

\--- task ---

打开 `index.html`。

在 `<header>` 部分的 `<nav>` 元素下面创建一个 `<div>` 元素。

给它添加属性 `class="switch-container"`。

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 19
line_highlights: 20-22
-----------------------------------------------------------

```
  </nav>
  <div class="switch-container">

  </div>
</header>  
  
```

\--- /code ---

\--- /task ---

开关使用三个元素：`<label>`、`<input>` 和 `<span>`。

你在创建角色详情表单时也使用过其中的一些元素。

\--- task ---

在 `<div>` 标签内，添加一个带有属性 `class="switch"` 的 `<label>`。

在 `<label>` 标签内，添加

- 一个带有两个属性的 `<input>` 元素：`type="checkbox"` 和 `id="lightModeSwitch"`
- 一个具有属性 `class="switch-slider"` 的 `<span>` 元素

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 20
line_highlights: 21-24
-----------------------------------------------------------

```
<div class="switch-container">
  <label class="switch">
    <input type="checkbox" id="lightModeSwitch">
    <span class="switch-slider"></span>
  </label>
  
</div>
  
```

\--- /code ---

\--- /task ---

\--- task ---

**点击运行**

- **注意：** `.switch` 选择器已提供样式以将复选框转换为开关形状。

\--- /task ---

### 为开关添加图标

你可以向用户显示表示亮色模式的图标，而不是显示文字“light mode”。

Google 字体提供图标并可以将其添加到你的网站。

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
<span style="color: #0faeb0">**图标**</span>是以可访问的方式表示文本的一种手段，因为它们具有通用的可理解性。
</p>

Google 图标已经在网页的 `<head>` 元素中引入。相应的 CSS 样式也已提供。 还提供了 CSS 样式。

\--- collapse ---

---

## title: 如何使用 Google 字体导入图标

打开 [fonts.google.com](https://fonts.google.com/icons){:target="_blank"}. 该链接将在新选项卡中打开。

![Google 字体图标页面，其中显示格子图标和搜索栏。](images/google-icons.png)
你可以搜索图标。 每个图标都有一个唯一的名称。

单击你想要添加的图标。 这将打开一些说明。
![The Google Fonts icons page with the 'Home' icon selected and an instructions panel.](images/google-selected-icon.png)

- 在 HTML 中包含图标：
  将其添加到 HTML 文件的 `<head>` 部分。

  `<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">`

- 在 HTML 中使用图标：
  向 HTML 元素添加一个类。 例如：

  `<span class="material-symbols-outlined">主页</span>`

- CSS 样式：
  将图标的自定义样式添加到您的 CSS 样式表。 你还可以自定义它：

  .material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
  }

\--- /collapse ---

\--- task ---

在 `</label>` 标签下面，添加一个属性为 `class="switch-label material-symbols-outlined"` 的 `<span>` 元素。

在该 `<span>` 元素内添加文本 'light_mode'。

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 20
line_highlights: 25
--------------------------------------------------------

```
<div class="switch-container">
  <label class="switch">
    <input type="checkbox" id="lightModeSwitch">
    <span class="switch-slider"></span>
  </label>
  <span class="switch-label material-symbols-outlined">light_mode</span>
</div>
  
```

\--- /code ---

\--- /task ---

\--- task ---

**点击运行**

- 你的开关应该出现在导航栏的右侧
- 你可以点击开关，但它尚未生效！

\--- collapse ---

---

## title: 开关显示不正确

- 检查元素中多个属性之间是否留有空格。

\--- /collapse ---

\--- /task ---

### 为开关创建事件处理函数

\--- task ---

打开 `scripts.js`。

找到注释 `// Create the constant for light mode`。

使用 `querySelector()` 查找具有属性 `id="lightModeSwitch"` 的元素。

将其赋值给常量 `lightModeSwitch`。

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 55
line_highlights: 56
--------------------------------------------------------

// 创建浅色模式常量
const lightModeSwitch = document.querySelector("#lightModeSwitch");

\--- /code ---

\--- /task ---

\--- task ---

找到注释 `// Light mode function`。

创建函数 `changeLightMode()`。

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 58
line_highlights: 59-61
-----------------------------------------------------------

// 浅色模式函数
function changeLightMode(){

}

\--- /code ---

\--- /task ---

你添加了一个带有属性 `type="checkbox"` 的 `<input>` 元素并将其样式化为开关。

可以使用 `.checked` 属性检查开关是否处于“开启”状态。

`.checked` 属性的值为布尔值，即可以是 **true**（开）或 **false**（关）。

\--- task ---

使该函数将开关的 `.checked` 属性的值赋给变量 `isLightMode`。

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 58
line_highlights: 60
--------------------------------------------------------

//浅色模式函数
function changeLightMode(){
var isLightMode = lightModeSwitch.checked;

}

\--- /code ---

\--- /task ---

`.classList` 属性返回元素的类属性。

可以使用方法修改元素的类属性。

例如，可以使用 add()、toggle() 或 remove()。

\--- collapse ---

---

## title: classList 方法

- 访问 classList：
  `element.classList` 返回指定元素的类属性列表。

- 添加一个类：`element.classList.add("className")`

- 删除一个类：`element.classList.remove("className")`

- 切换类：`element.classList.toggle("className")`（如果该类存在，则将其删除；否则，则添加该类。）

- 检查某个类是否存在：`element.classList.contains("className")` 返回一个布尔值，确认元素是否包含指定的类。

- 替换一个类：`element.classList.replace("oldClass", "newClass")` 用一个新类替换指定的旧类。

\--- /collapse ---

\--- task ---

使用 `.toggle` 方法向 `<body>` 元素添加或移除 `light-mode` 类。

如果该类不存在则添加，存在则移除。

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 58
line_highlights: 61
--------------------------------------------------------

// 浅色模式函数
function changeLightMode(){
var isLightMode = lightModeSwitch.checked;
document.body.classList.toggle("light-mode");

}

\--- /code ---

\--- /task ---

### 将事件处理函数添加到开关

\--- task ---

打开 `index.html`。

在开关元素上添加事件 `onchange="changeLightMode()"`。

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 20
line_highlights: 22
--------------------------------------------------------

```
  <div class="switch-container">
    <label class="switch">
      <input onchange="changeLightMode()" type="checkbox" id="lightModeSwitch">
      <span class="switch-slider"></span>
    </label>
    <span class="switch-label material-symbols-outlined">light_mode</span>
  </div>
  
```

\--- /code ---

\--- /task ---

\--- task ---

**点击运行**

- 点击开关将其滑动到亮色模式位置
- 网页的配色应当发生变化

\--- /task ---

### 保存用户的偏好设置

开关会添加或移除 `light-mode` 类。

当用户导航到另一个页面（或重新加载当前页面）时，这些更改将丢失，因为 HTML 文件中没有设置 `light-mode` 类。

你需要一种方法来保留用户的选择。

可以使用 `localStorage` 属性来实现。

`localStorage` 以键值对的形式保存数据。键是值的“标签”。 **键** 是值的“标签”。

\--- collapse ---

---

## title: localStorage 方法

- setItem(key, value):
  向 localStorage 添加一个键值对。
  例如：`localStorage.setItem("username", "raspberry")`

- getItem(key):
  检索与指定键关联的值。
  例如：`var username = localStorage.getItem("username")`

- removeItem(key):
  删除与指定键关联的键值对。
  例如：`localStorage.removeItem("username")`

- clear()：
  从 localStorage 中删除所有键值对。
  例如：`localStorage.clear()`

\--- /collapse ---

\--- task ---

打开 `scripts.js`。

使用 `.setItem` 方法添加以下键值对：

- 将 'key' 设置为 `"lightMode"`
- 将 'value' 设置为 `isLightMode`，表示切换开关的 `.checked` 布尔值（true 或 false）

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 58
line_highlights: 62
--------------------------------------------------------

// 浅色模式函数
function changeLightMode(){
var isLightMode = lightModeSwitch.checked;
document.body.classList.toggle("light-mode");
localStorage.setItem("lightMode", isLightMode);
}

\--- /code ---

\--- /task ---

### 获取用户的偏好设置

当网页加载时，需要检查是否设置了 lightMode。

可以使用 addEventListener 来完成此检查。

\--- collapse ---

---

## title: addEventListener 方法

像这样使用 `.addEventListener`：

## --- code ---

language: js
filename:
line_numbers: false
line_number_start:
line_highlights:
-----------------------------------------------------

element.addEventListener(eventType, callbackFunction);

\--- /code ---

- element：要附加事件监听器的 HTML 元素
- eventType：你想要监听的事件类型（例如“click”、“keydown”、“DOMContentLoaded”）
- callbackFunction：事件发生时执行的函数

\--- /collapse ---

\--- task ---

使用 `.addEventListener` 在页面加载事件时触发一个函数。

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 65
line_highlights: 66-68
-----------------------------------------------------------

// 检查本地存储
document.addEventListener("DOMContentLoaded", function () {

});

\--- /code ---

`"DOMContentLoaded"` 是在网页准备就绪时触发的事件类型。

提示：在这里使用 `"DOMContentLoaded"` 比使用 `"load"` 更好，后者仅在所有图片加载完毕时才触发。

\--- /task ---

需要函数检查 `localStorage` 中与 `lightMode` 键关联的值是否为 **"true"**。

\--- task ---

添加一个 `if` 语句来检查 `lightMode` 是否被设置为 `"true"`。

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 65
line_highlights: 68-70
-----------------------------------------------------------

// 检查本地存储
document.addEventListener("DOMContentLoaded", function () {

if (localStorage.getItem("lightMode") == "true") {

}

});

\--- /code ---

\--- /task ---

如果 `lightMode` 被设置为 `"true"`，你需要添加 `.light-mode` 类。

你可以使用 `classList` 的 `.toggle` 方法实现这一点。

提示：也可以使用 `.add` 方法。

\--- task ---

切换 `light-mode` 类。

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 65
line_highlights: 69
--------------------------------------------------------

// 检查本地存储
document.addEventListener("DOMContentLoaded", function () {

if (localStorage.getItem("lightMode") == "true") {
document.body.classList.toggle("light-mode");
}

});

\--- /code ---

\--- /task ---

你还必须将开关显示为“开启”状态。

如果不这样做，亮色模式偏好会被设置，但开关位置仍然显示为“关闭”。

\--- task ---

将开关的 `.checked` 属性设置为布尔值 `true`。

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 65
line_highlights: 70
--------------------------------------------------------

// 浅色模式函数
document.addEventListener("DOMContentLoaded", function () {

if (localStorage.getItem("lightMode") == "true") {
document.body.classList.toggle("light-mode");
lightModeSwitch.checked = true;
}

});

\--- /code ---

\--- /task ---

\--- task ---

打开 `character.html`。

将开关的 HTML 添加到头部，放在 `</nav>` 标签下面。

## --- code ---

language: html
filename: character.html
line_numbers: true
line_number_start: 19
line_highlights: 20-26
-----------------------------------------------------------

```
  </nav>
  <div class="switch-container">
    <label class="switch">
      <input onchange="changeLightMode()" type="checkbox" id="lightModeSwitch">
      <span class="switch-slider"></span>
    </label>
    <span class="toggle-label material-symbols-outlined">light_mode</span>
  </div>
</header>  
  
```

\--- /code ---

\--- /task ---

\--- task ---

**点击运行**

- 开关应该出现在导航栏的右侧
- 打开或关闭开关以查看主题颜色变化
- 导航到 `index.html` 页面以检查亮色模式偏好是否保持

\--- /task ---

做得好！ 干得好！你已经创建了一个允许用户更改配色主题的开关。

接下来，你将为网站添加一个英雄图片滑块并允许用户查看不同的图片！
