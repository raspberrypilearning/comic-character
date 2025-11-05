// 更新版权年份函数
const currentDate = new Date();
document.querySelector("#copyrightYear").innerText = currentDate.getFullYear();

// 为超级英雄表单创建常量
const characterDetails = document.querySelector("#character-details");
const summary = document.querySelector("#summary-section");
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
const alertBox = document.querySelector("#alert");

function checkForm(){

  var alertMessage = "";

  if (characterName.value == ""){
    alertMessage = "Please enter a name";
  } else if (characterAbility.value == "") {
    alertMessage = "Please choose an ability";
  } else if (characterOrigin.value == "") {
    alertMessage = "Please write the origin story";
  }

  if (alertMessage != ""){
    alertBox.innerText = alertMessage;
    alertBox.style.display = "block";
  } else {
    alertBox.style.display = "none";
    displaySummary();
  }
}

// 创建浅色模式常量
const lightModeSwitch = document.querySelector("#lightModeSwitch");

// 浅色模式函数
function changeLightMode(){
  var isLightMode = lightModeSwitch.checked;
  document.body.classList.toggle("light-mode");
  localStorage.setItem("lightMode", isLightMode);
}

// 检查本地存储
document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("lightMode") == "true") {
    document.body.classList.toggle("light-mode");
    lightModeSwitch.checked = true;
  }
});

// 更改英雄函数
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