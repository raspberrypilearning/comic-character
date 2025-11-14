## 检查用户输入

在此步骤中，你将检查用户是否已完成表格，并在他们错过某个部分时发出警告。

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/comic-character-step6?page=character.html" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

目前，即使用户的一些表单字段留空，他们也可以提交信息。

你需要创建一个新函数，在调用 `displaySummary()` 函数之前检查用户是否已完成所有表单字段。

### 更改创建按钮的功能

\--- task ---

打开 `character.html`。

更改处理创建按钮的 `onclick` 事件的函数。

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
    <button onclick="checkForm()">创造</button>
```

\--- /code ---

\--- /task ---

### 创建一个区域来显示警告

如果表单的一部分是空白的，你需要向用户显示警告。

\--- task ---

在创建按钮下方创建一个空的 `<div>` 元素，其属性为 `id="alert"`。

## --- code ---

language: html
filename: character.html
line_numbers: true
line_number_start: 33
line_highlights: 35-36
-----------------------------------------------------------

```
    <label for="origin-text">起源故事：</label>
    <textarea id="origin-text" placeholder="Add your superhero origin story!"></textarea>
    <div id="alert"> 
    </div>
    <button onclick="checkForm()">创建</button>
  </section>
```

\--- /code ---

\--- /task ---

### 创建警告消息

你需要使用消息更新警告 `<div>` 的内容。

\--- task ---

打开 `scripts.js`。

使用 `querySelector()` 查找具有属性 `id="alert"` 的 `<0>` 元素。

将其分配给常量 `alertBox`。

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 32
--------------------------------------------------------

// 用于检查字符详细信息的函数
const alertBox = document.querySelector("#alert");

\--- /code ---

\--- /task ---

你需要一个新的 `checkForm()` 函数来检查表单上的每个字段是否为空值。

如果值为空，则会在 `alertBox` 中向用户显示警告。

`alertBox` `<div>` 将会被隐藏，直到需要它为止。

### 创建 checkForm() 函数

\--- task ---

创建函数 `checkForm()`。

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 34-36
-----------------------------------------------------------

// 用于检查字符详细信息的函数
const alertBox = document.querySelector("#alert");

function checkForm(){

}

\--- /code ---

\--- /task ---

### 创建一个变量来保存警告消息

如果函数发现空值，则需要一个变量来保存警告消息。

\--- task ---

创建变量 `alertMessage` 并为其分配一个空字符串（`""`）。

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 36
--------------------------------------------------------

// 用于检查字符详细信息的函数
const alertBox = document.querySelector("#alert");

function checkForm(){

var alertMessage = "";

}

\--- /code ---

\--- /task ---

\--- collapse ---

---

## title: 什么是变量？

变量是计算机内存中保存值的命名区域。

该值可以在程序运行时更改。

例如，`var age = 10;`

- `age` 是变量的名称。
- 它被赋值为 `10`。

\--- /collapse ---

### 检查用户是否输入了超级英雄的名称

你需要检查每个字段以确定它是否为空。

从第一个字段 `characterName` 开始，它包含具有属性 `id="name-text"` 的 HTML 元素。

如果用户错过了，表单字段的 `.value` 属性将为空。

\--- task ---

使用 `if` 语句检查 `characterName` 的值是否为空。

\*\*注意：\*\*使用了运算符 `==`。 意思是‘与……相同’。

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 38-40
-----------------------------------------------------------

// 用于检查字符详细信息的函数
const alertBox = document.querySelector("#alert");

function checkForm(){

var alertMessage = "";

if (characterName.value == ""){

}

}

\--- /code ---

\--- /task ---

在 `if` 语句中，如果结果为 **true**（意味着 `characterName` **为**空），则需要运行代码。

\--- task ---

如果条件为真，则为 `alertMessage` 分配一个字符串。

该字符串需要是一条消息，告诉用户如果**超级英雄名称**字段留空该怎么办。

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 39
--------------------------------------------------------

// 用于检查字符详细信息的函数
const alertBox = document.querySelector("#alert");

function checkForm(){

var alertMessage = "";

if (characterName.value == ""){
alertMessage = "请输入名称";
}

}

\--- /code ---

\--- /task ---

### 显示警告

当你创建 `alertMessage` 时，你为其分配了一个空字符串（`""`）。

如果**超级英雄名称**字段为空，则你可以将 `alertMessage` 设置为一条消息来提醒用户。

仅当 `alertMessage` 中有消息时才显示警告。

所以现在你需要检查 `alertMessage` **不**为空字符串。

\--- task ---

使用 `if` 语句检查变量 `alertMessage` 不为空字符串（意味着它已为用户分配了一条消息）。

**注意：**使用了运算符 `!=`。 它的意思是**不**相同。

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 42-44
-----------------------------------------------------------

// 用于检查字符详细信息的函数
const alertBox = document.querySelector("#alert");

function checkForm(){

var alertMessage = "";

if (characterName.value == ""){
alertMessage = "请输入名称";
}

if (alertMessage != ""){

}
}

\--- /code ---

\--- /task ---

如果 `alertMessage` 包含给用户的消息，则需要将 `alertBox` 的 `.innerText` 内容设置为该消息。

\--- task ---

将 `alertBox` 的 `.innerText` 内容设置为 `alertMessage` 中保存的字符串。

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 43
--------------------------------------------------------

// 用于检查字符详细信息的函数
const alertBox = document.querySelector("#alert");

function checkForm(){

var alertMessage = "";

if (characterName.value == ""){
alertMessage = "请输入名称";
}

if (alertMessage != ""){
alertBox.innerText = alertMessage;

}
}

\--- /code ---

\--- /task ---

`#alert` 选择器的 `display` 属性默认设置为 `none`，因此页面加载时警告框会被隐藏。

\--- collapse ---

---

## title: 查看警告 CSS 选择器

## --- code ---

language: css
filename: style.css
line_numbers: false
line_number_start:
line_highlights: 4
-------------------------------------------------------

\#alert {
text-align: center;
color: var(--text-colour-alert);
display: none;
}

\--- /code ---

\--- /collapse ---

如果有消息要向用户显示，你需要显示警告框。

\--- task ---

在新的 `if` 语句中，将 `#alert` 选择器的 `display` 属性设置为 `block`。

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 44
--------------------------------------------------------

// 用于检查字符详细信息的函数
const alertBox = document.querySelector("#alert");

function checkForm(){

var alertMessage = "";

if (characterName.value == ""){
alertMessage = "请输入名称";
}

if (alertMessage != ""){
alertBox.innerText = alertMessage;
alertBox.style.display = "block";
}
}

\--- /code ---

\--- /task ---

\--- task ---

**点击运行**

- 将超级英雄名称字段留空
- 点击创建按钮
- 警告信息将显示

\--- /task ---

### 隐藏警告并显示概述

如果`alertMessage` 仍然设置为空字符串(`""`)，
你需要使用 `else` 语句来隐藏提醒 (并显示概述)

这是思考 `else` 语句与 `if` 语句如何运作的另一种方法：

```
如果警告消息不是“”
  - 显示警告。
否则
  - 隐藏警告
  - 显示概述。
```

\--- task ---

使用 `else` 语句将 `#alert` 选择器的 `display` 属性设置为 `none`，并调用 `displaySummary()` 函数。

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 45-48
-----------------------------------------------------------

// 用于检查字符详细信息的函数
const alertBox = document.querySelector("#alert");

function checkForm(){

var alertMessage = "";

if (characterName.value == ""){
alertMessage = "请输入名称";
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

\--- /task ---

\--- task ---

**点击运行**

- 填写超级英雄名称字段
- 点击创建按钮
- 警告消息将不会显示
- 概述将显示

\*\*注意：\*\*能力和起源故事部分将为空白

\--- collapse ---

---

## title: 概述部分不显示

- 检查你是否在 `if` 和 `else` 语句中使用了括号 `()`，例如 `if (characterName.value == "")`
- 检查您是否已在 `else` 块中调用了`displaySummary()` 函数

\--- /collapse ---

\--- /task ---

### 检查能力字段

你已使用 `if` 语句检查 `characterName` 的值是否为空。

如果它不为空，则需要使用 `else if`语句来检查其他表单字段。

这是思考 `else if` 语句如何与 `if` 语句协同工作的另一种方式：

```
如果角色名称为 ""
  - 设置警告。
否则如果角色能力为 ""
  - 设置警告。
否则如果角色起源为 ""
  - 设置警告。
```

\--- collapse ---

---

## title: 为什么不使用三个 if 语句？

**提示**：将 `if` 与 `else if` 语句一起使用意味着如果任何条件为`true`，则后续的 `else if` 语句将被忽略。 这节省了资源和时间。 如果使用多个 `if` 语句，则会检查所有 `if` 语句，即使只满足一个条件。

在这个表单中，用户会收到关于第一个空白字段的警告。

\--- /collapse ---

\--- task ---

使用 `else if` 语句检查 `characterAbility` 的值是否为空。

如果是，则为 `alertMessage` 分配一个字符串。

该字符串需要是一条消息，告诉用户如果**能力**字段留空该怎么做。

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 40-42
-----------------------------------------------------------

// 用于检查字符详细信息的函数
const alertBox = document.querySelector("#alert");

function checkForm(){

var alertMessage = "";

if (characterName.value == ""){
alertMessage = "请输入名称";
} else if (characterAbility.value == "") {
alertMessage = "请选择一项能力";
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

\--- /task ---

\--- task ---

### 检查起源故事字段

使用另一个 `else if` 语句来检查 `characterOrigin` 的值。

如果为空白，则添加警告消息以向用户显示。

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 31
line_highlights: 42-44
-----------------------------------------------------------

// 用于检查字符详细信息的函数
const alertBox = document.querySelector("#alert");

function checkForm(){

var alertMessage = "";

if (characterName.value == ""){
alertMessage = "请输入名称";
} else if (characterAbility.value == "") {
alertMessage = "请选择一项能力";
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

\--- /task ---

\--- task ---

**点击运行**

- 在一些表单字段中输入值，但保留一些空白。
- 点击创建按钮。 对于任何留空的字段，将显示一条警告消息。
- 使用不同的表单字段测试几次。
- 填写所有表单字段。 单击创建查看概述。

\--- collapse ---

---

## title: 我应该收到警告，但我没有

- 检查您是否已在 `characterName` 、`characterAbility` 和 `characterOrigin` 后添加了`.value`。

\--- /collapse ---

\--- /task ---

太棒了！ 你已经创建了检查和警告来帮助用户创建他们的超级英雄！

接下来，你将创建一个开关，以便用户可以在明暗模式之间切换！
