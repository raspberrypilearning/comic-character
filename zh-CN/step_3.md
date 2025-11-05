## 添加表单输入字段

在此步骤中，您将设计一个交互式网页和一个表单，用户可以使用它来创建自己的超级英雄！

<iframe src="https://editor.raspberrypi.org/zh-CN/embed/viewer/comic-character-step3?page=character.html" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

您已将文本和图像添加到您的网站，但您的用户也可以更改内容！

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
HTML <span style="color: #0faeb0">**表单**</span>允许用户输入和提交信息。
</p>

您将添加不同类型的表单元素，以允许用户创建他们的超级英雄角色。

**注意：**表单的 CSS 样式已在文件 `style.css` 中提供。

--- collapse ---

---
title: 表单元素的类型
---

![An example HTML form with form fields annotated to show their use.](images/form-labelled.png)

- `<input>` 例如单行文本框、复选框、按钮
- `<select>` 下拉列表
- `<textarea>` 用于输入多行文本
- `<label>` 文本告诉用户要输入什么信息

--- /collapse ---

### 设置表单

所有输入元素都将位于具有 `id` 属性的 `<section>` 内，因此你可以稍后更新它。

--- task ---

打开 `character.html` 文件。

找到注释 `<!--- 超级英雄角色详情 --->`。

将属性 `id="character-details"` 添加到 `<section>` 标签。

--- code ---
---
language: html
filename: character.html
line_numbers: true
line_number_start: 23
line_highlights: 23
---

      <section id="character-details"> <!-- 超级英雄角色详情 -->

      </section>
--- /code ---

--- /task ---

### 超级英雄 `姓名` 部分

用户首先将命名他们的超级英雄！

`<label>` 告诉用户他们需要输入什么。

--- task ---

添加一个属性为 `"for=name-text"` 的 `<label>` 元素

--- code ---
---
language: html
filename: character.html
line_numbers: true
line_number_start: 23
line_highlights: 24
---

    <section id="character-details"> <!--- 超级英雄角色详情 --->
      <label for="name-text">超级英雄名称：</label>
    </section>

--- /code ---

--- collapse ---

---
title: 无障碍设计
---

当用户聚焦输入元素时，`<label>` 元素允许屏幕阅读器大声读出标签。
添加 `for` 属性将标签链接到输入元素。

--- /collapse ---

--- /task ---

`<input>` 元素允许用户输入数据。

你可以使用 `type=` 设置输入的类型。

--- collapse ---

---
title: 输入类型示例
---

- **文本：** 单行文本。
<br>`<input type="text">`
<br>*试试看*:
<br><input type="text">

- **密码：**隐藏输入的文本。
<br>`<input type="password">`
<br>*试试看*:
<br><input type="password">

- **复选框：** 勾选一个或多个选项。
<br>`<input type="checkbox"> <label>早餐</label>`
<br>`<input type="checkbox"> <label>午餐</label>`
<br>*试试看*:
<br><input type="checkbox"><label>早餐</label>
<br><input type="checkbox"><label>午餐</label>

- **单选框：**从一组选项中选择一个。
<br>`<input type="radio" name="meal"> <label>早餐</label>`
<br>`<input type="radio" name="meal"> <label>午餐</label>`
<br>*尝试一下*：
<br><input type="radio" name="meal"><label>早餐</label>
<br><input type="radio" name="meal"><label>午餐</label>
<br>**提示：**单选按钮必须具有相同的 `name` 属性，以便选择一个单选按钮会取消选择任何其他选定的单选按钮。

- **数字：** 带有箭头的数字数据，用于增加/减少值
<br>`<input type="number">`
<br>*试试看*:
<br><input type="number">

--- /collapse ---

--- task ---

添加一个带有属性 `id="name-text"` 的文本 `<input>` 元素。

--- code ---
---
language: html
filename: character.html
line_numbers: true
line_number_start: 23
line_highlights: 25
---

    <section id="character-details"> <!-- 超级英雄角色详情 -->
      <label for="name-text">超级英雄名称：</label>
      <input type="text" id="name-text">
    </section>

--- /code ---

--- /task ---

--- task ---

**点击运行**

- 你将看到一个文本框，其上方标有“超级英雄姓名：”。

--- collapse ---

---
title: 没有文本框
---

- 检查你是否已在 `text` 周围添加了 `""` 标记。

--- /collapse ---

--- collapse ---

---
title: 文本框很小
---

- 检查你是否为 `<input>` 赋予了 id `"name-text"`，而不是 `"name"`。

--- /collapse ---

--- /task ---

### 超级英雄 `能力` 部分

接下来，用户将为他们的超级英雄选择一项能力！

- `<select>` 元素用于创建下拉列表
- `<option>` 元素用于提供选择

--- collapse ---

---
title: 查看示例
---

<br>`<select><option value="Water">水</option><option value="Juice">果汁</option></select>`
<br>*试试看*:
<br><select><option value="Water">水</option><option value="Juice">果汁</option></select>

--- /collapse ---

--- task ---

添加一个带有属性 `for="ability-choice` 的 `<select>` 元素。

添加一个具有属性 `id="ability-choice"` 的 `<select>` 元素和**四个** `<option>` 元素用于选择。

--- code ---
---
language: html
filename: character.html
line_numbers: true
line_number_start: 23
line_highlights: 26-32
---

    <section id="character-details"> <!-- 超级英雄角色详情 -->
      <label for="name-text">超级英雄名称：</label>
      <input type="text" id="name-text">     
      <label for="ability-choice">能力：</label>
      <select id="ability-choice">
        <option value="">选择一个选项</option>
        <option value="Flying">飞行</option>
        <option value="Invisibility">隐形</option>
        <option value="Time travel">时间旅行</option>
      </select>
    </section>

--- /code ---

**注意：**第一个选项有一个空白的 `value`。

--- /task ---

--- task ---

**点击运行**

- 你将看到一个下拉列表
- 单击箭头查看选项

--- collapse ---

---
title: 我的下拉列表中没有选项
---

- 检查你的 `<select>` 元素内是否有四个 `<option>` 元素
- 检查每个选项是否有结束的 `</option>` 标签

--- /collapse ---

--- /task ---

### 超级英雄 `起源故事` 部分

接下来，用户将描述他们的超级英雄的起源故事！

`<textarea>` 元素提供多行文本输入。

--- collapse ---

---
title: 查看示例
---

<br>`<textarea></textarea>`
<br>*试试看*:
<br><textarea></textarea>

--- /collapse ---

你可以向输入元素添加 `placeholder` 属性。

这提示用户应该输入什么。

当用户开始输入时，提示会被替换。

--- task ---

添加 `<label>` 和 `<textarea>` HTML。

为 `<textarea>` 元素包含一个占位符属性。

--- code ---
---
language: html
filename: character.html
line_numbers: true
line_number_start: 26
line_highlights: 33-45
---

    <label for="ability-choice">能力：</label>
    <select id="ability-choice">
      <option value="">选择一个选项</option>
      <option value="Flying">飞行</option>
      <option value="Invisibility">隐身</option>
      <option value="Time travel">时间旅行</option>
    </select>
    <label for="origin-text">起源故事：</label>
    <textarea id="origin-text" placeholder="添加你的超级英雄起源故事！"></textarea>
  </section>

--- /code ---

--- /task ---

--- task ---

**点击运行**

- 你将看到一个显示占位符文本的多行文本框。

--- /task ---

### 超级英雄 `概述` 部分

向用户展示其角色的概述会很棒。

--- task ---

添加一个新的 `<section>` 元素，其属性为 `id="summary-section"`。

--- code ---
---
language: html
filename: character.html
line_numbers: true
line_number_start: 35
line_highlights: 36-39
---
      
    </section>
    <section id="summary-section">
  
    </section>
    
--- /code ---

--- /task ---

--- task ---

添加 `<h2>` 元素来创建概述的标题。

添加一个带有属性 `id="summary-paragraph"` 的 `<p>` 元素。

--- code ---
---
language: html
filename: character.html
line_numbers: true
line_number_start: 36
line_highlights: 37-38
---

    <section id="summary-section">
      <h2>超级英雄概述</h2>
      <p id="summary-paragraph"></p>
    </section>

--- /code ---

--- /task ---

--- task ---

**点击运行**

- 你可能希望看到概述部分。 但是，`#summary-section` 选择器的 `display` 属性设置为 `none`，因此它被隐藏了。

--- collapse ---

---
title: 查看概述部分的CSS选择器
---

--- code ---
---
language: css
filename: style.css
line_numbers: false
line_number_start: 
line_highlights: 6
---

#summary-section {
  background-color: var(--background-colour-section);
  border: 1px solid var(--border-colour-section);
  border-radius: 5px;
  padding: 5px;
  display: none;
}
    
--- /code ---

--- /collapse ---

接下来，你将添加一个按钮，该按钮将运行一些 JavaScript 代码使概述可见。

--- /task ---

太棒了！ 你的角色详细信息页面现在包含一个带有输入字段的表单。

在下一步中，你将使表单具有交互性，以便用户可以查看其角色的概述。
