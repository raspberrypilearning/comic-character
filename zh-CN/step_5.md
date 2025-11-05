## 更改概述内容

在此步骤中，你将允许用户更改他们的表单选择。

<iframe src="https://editor.raspberrypi.org/zh-CN/embed/viewer/comic-character-step5?page=character.html" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### 添加 changeSummary() 函数

你需要一个功能，当用户单击编辑按钮时显示表单并隐藏概述。

--- task ---

打开 `scripts.js`。

找到注释 `//编辑概述的函数`。

添加函数 `changeSummary()`。

在你的函数中：

- 将角色详情 `<section>` 的 `display` 属性值设置为 `flex`
- 将概述 `<section>` 的 `display` 属性值设置为 `none`

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 25
line_highlights: 26-29
---
// 编辑概述的函数
function changeSummary() {
  characterDetails.style.display = "flex";
  summary.style.display = "none";
}

--- /code ---

--- /task ---

### 创建编辑按钮

你需要创建一个新按钮来调用 `changeSummary()` 函数。

--- task ---

打开 `character.html`。

在概述部分添加带有事件 `onlick="changeSummary()"` 的 `<button>` 元素。

将文本 `编辑` 添加到 `<button>`，以便用户知道该按钮的作用。

--- code ---
---
language: html
filename: character.html
line_numbers: true
line_number_start: 39
line_highlights: 42
---

      <section id="summary-section">
        <h2>超级英雄概要</h2>
        <p id="summary-paragraph"></p>
        <button onclick="changeSummary()">编辑</button>
      </section>

--- /code ---

--- /task ---

--- task ---

**点击运行**

- 再次填写表格。
- 当你单击创建按钮时，表单将被隐藏，并显示概述部分。
- 你应该会看到一个编辑按钮。 单击它即可编辑你的表单。

--- /task ---

太棒了！ 你已为您的网站添加了更多互动性！

接下来，你将检查用户是否已完成表格，并在他们错过某个部分时发出警告。
