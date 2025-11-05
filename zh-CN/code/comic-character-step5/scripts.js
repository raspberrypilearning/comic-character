// 更新版权年份函数
const currentDate = new Date();
document.querySelector("#copyrightYear").innerText = `${currentDate.getFullYear()}`;

// 为超级英雄表单创建常量
const summary = document.querySelector("#summary-section");
const characterDetails = document.querySelector("#character-details");

const characterName = document.querySelector("#name-text");
const characterAbility = document.querySelector("#ability-choice");
const characterOrigin = document.querySelector("#origin-text");

// 显示概述的函数
function displaySummary() {
  const summaryParagraph = document.querySelector("#summary-paragraph");

  summaryParagraph.textContent = `你的超级英雄名字是 ${characterName.value}。 
  他们的能力是 ${characterAbility.value}。
  他们的起源故事是 ${characterOrigin.value}.`;

  characterDetails.style.display = "none";
  summary.style.display = "flex";
}

// 编辑概述的函数
function changeSummary() {
  characterDetails.style.display = "flex";
  summary.style.display = "none";
}

// 检查角色详细信息表单的函数

// 创建浅色模式常量

// 浅色模式函数

// 检查本地存储

// 更改英雄函数
