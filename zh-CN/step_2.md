## 在页脚添加版权信息

在此步骤中，你将创建版权信息和一个自动将其更新为当前年份的功能。 你将把它添加到页脚部分。

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/comic-character-step2" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
<span style="color: #0faeb0">**Copyright**</span> 是一种法律保护，禁止人们未经许可使用他人的作品（例如网站、图像、音乐）。
</p>

在现代网页设计中，网站包含一个页脚部分，显示版权信息。

版权信息通常包含：

- 版权符号Ⓒ
- 网站所有者的姓名
- 内容发布的年份

\--- task ---

打开 [漫画人物入门项目](https://editor.raspberrypi.org/en/projects/comic-character-starter){:target="_blank"}.

\--- /task ---

你的入门项目包含：

- 两个包含一些内容的 HTML 页面
- 包含部分内容样式的 CSS 文件
- 你将在项目中使用的图像
- 一个可以让你的网站具有互动性和吸引力的JavaScript文件

这个项目已经包含了一个导航栏和一个首页横幅，你已经在[欢迎来到南极洲](https://projects.raspberrypi.org/en/projects/welcome-to-antarctica)中学会了如何创建他们。

你将使用的 **JavaScript** 文件已经在结束标签 `</body>` 之前链接到你的网页。

你将使用的**CSS**文件也已链接到你的网页。

### 将内容添加到你的页脚部分

\--- task ---

打开 `index.html` 文件。

找到 `footer` 元素。

添加包含版权信息的 `<p>` 元素。

（你可以将化名 `Malik Johnson` 更改为你选择的名称。）

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 32
line_highlights: 33
--------------------------------------------------------

```
  <footer>
    <p> Ⓒ Malik Johnson - All Rights Reserved</p>
  </footer>
```

\--- /code ---

\--- /task ---

\--- task ---

在 Ⓒ 符号和名称之间添加一个带有属性 `id="copyrightYear"` 的 `<span>` 元素。

`id` 属性用于为 HTML 元素指定唯一标识符。

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 32
line_highlights: 33
--------------------------------------------------------

```
  <footer>
    <p> Ⓒ<span id="copyrightYear"></span> Malik Johnson - All Rights Reserved</p>
  </footer>
```

\--- /code ---

\--- /task ---

\--- task ---

**点击运行**

- 版权信息将显示在你的网页底部（页脚）。

\*\*注意：\*\*尚未显示日期。

\--- /task ---

`<span>` 元素内没有文本。

JavaScript 将用于更新 `<span>` 的内容以显示当前年份。

### 显示当前年份

JavaScript 有一个 `Date()` 函数，它使用浏览器的时区返回当前日期和时间。

\--- collapse ---

---

## title: 查看示例

调用 `Date()` 返回一个字符串。

这是此页面加载时调用 `Date()` 的结果：

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/comic-character-date" width="100%" height="100" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

\--- /collapse ---

\--- task ---

打开 `scripts.js`。

创建一个常量 `currentDate` 来保存一个新的 `Date()` 对象。

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 1
line_highlights: 2
-------------------------------------------------------

```
 // 更新版权年份函数 
 const currentDate = new Date();
```

\--- /code ---

\--- /task ---

\--- collapse ---

---

## title: 什么是常量

常量是一个命名的数据值。

该值不能被程序改变。

\--- /collapse ---

当前年份将被添加到你之前创建的 `<span>` 元素中。

JavaScript 可用于查找和更改 HTML 元素。

要访问 `<span>` 元素，你将使用文档对象模型方法 `querySelector()` 来“选择”它。

\--- collapse ---

---

## title: 什么是文档对象模型？

文档对象模型（DOM）为 JavaScript（和其他编程语言）提供了一种与网页元素交互的方式。

它代表网页（文档）的结构。

`querySelector()` 是一种 DOM 方法，它返回网页中与指定 CSS 选择器（例如 `#copyrightYear`）匹配的第一个元素

\--- /collapse ---

\--- task ---

使用 `querySelector()` 方法在网页文档中查找属性为 `id="copyrightYear"` 的元素。

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 1
line_highlights: 3
-------------------------------------------------------

```
 // 更新版权年份函数 
 const currentDate = new Date();
 document.querySelector("#copyrightYear")
```

\--- /code ---

\--- /task ---

querySelector 将找到整个 `<span>` 元素。

你只需要更改元素**内部**的文本。

`.innerText` 属性可用于引用 HTML 元素的文本内容。

`currentDate` 常量保存由 `Date()` 函数返回的完整日期，但你只需要日期的四位数年份部分。

你可以为此使用 `.getFullYear()` 方法。

\--- task ---

将带有属性 `id="copyrightYear"` 的 `<span>` 的 `.innerText` 内容设置为当前的四位数年份。

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 1
line_highlights: 3
-------------------------------------------------------

```
 // 更新版权年份函数 
 const currentDate = new Date();
 document.querySelector("#copyrightYear").innerText = currentDate.getFullYear();
```

\--- /code ---

\--- /task ---

\--- task ---

**点击运行**

- 你应该会看到版权信息中显示的当前年份。

\--- collapse ---

---

## title: 年份没有显示

- 检查 `querySelector` 中 `copyrightYear` 中是否有 `#`
- 检查 `.getFullYear()` 末尾是否有左括号和右括号 `()`
- 检查 `querySelector` 和 `.getFullYear` 的拼写（包括大写字母）
- 检查第 2 行和第 3 行末尾是否有 `;`

\--- /collapse ---

\--- /task ---

\--- task ---

打开 `index.html`。

复制 (CTRL + C 或者 CMD + C) 页脚内的 `<p>` 元素。

\--- /task ---

\--- task ---

打开 `character.html` 文件。

找到 `footer` 元素。

粘贴 (CTRL + V 或者 CMD + V) 你之前复制的 `<p>` 元素。

## --- code ---

language: html
filename: character.html
line_numbers: true
line_number_start: 27
line_highlights: 28
--------------------------------------------------------

```
  <footer>
    <p> <span id="copyrightYear"></span> Ⓒ Malik Johnson - All Rights Reserved</p>
  </footer>
```

\--- /code ---

\*\*记住：\*\*你可能已将化名 `Malik Johnson` 更改为你选择的名称。

\--- /task ---

\--- task ---

**点击运行**

- 版权信息将显示在你的网页底部（页脚部分）。
- 它将包括年份

\--- /task ---

\--- collapse ---

---

## title: 我还可以使用哪些其他的日期方法？

获取日期和时间的特定组件：

```
const year = currentDate.getFullYear();
const month = currentDate.getMonth(); // (0 = January, 11 = December)
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
const milliseconds = currentDate.getMilliseconds();
```

\--- /collapse ---

做得好！ 你已经向你的网页添加了一些动态内容！

接下来，你将设计一个交互式网页，用户可以在其中创建自己的角色。
