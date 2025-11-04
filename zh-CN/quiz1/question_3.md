\--- question ---

---

## legend: 问题 3/3

你使用 JavaScript 函数来处理英雄图像滑块的“超出范围”问题。

这个代码可以处理多少幅图像？

## --- code ---

language: JavaScript
filename: scripts.js
line_numbers: true
line_number_start:
line_highlights:
-----------------------------------------------------

if (currentHeroIndex < 0){
currentHeroIndex = 3;
} else if (currentHeroIndex > 3) {
currentHeroIndex = 0;
}

\--- /code ---

\--- choices ---

- ( ) 0

  \--- feedback ---

  不正确。 `0` 是第一张图像的索引。

  \--- /feedback ---

- ( ) 3

  \--- feedback ---

  不完全对！ `3` 是最终索引号。 索引从 `0` 开始。

  \--- /feedback ---

- (x) 4

  \--- feedback ---

  正确！ `currentHeroIndex` 包含四个项目，从索引 `0` 开始到索引 `3` 结束。

  \--- /feedback ---

\--- /choices ---

\--- /question ---
