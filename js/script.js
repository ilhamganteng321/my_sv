// Array untuk semua skill
const skills = [
  { class: "html-css", valueClass: "html-progress", endValue: 100, color: "#fca61f" },
  { class: "javascript", valueClass: "javascript-progress", endValue: 80, color: "#7d2ae8" },
  { class: "php", valueClass: "php-progress", endValue: 90, color: "#20c997" },
  { class: "python", valueClass: "python-progress", endValue: 75, color: "#ff6f61" },
  { class: "flutter", valueClass: "flutter-progress", endValue: 75, color: "#3f396d" },
  { class: "laravel", valueClass: "laravel-progress", endValue: 90, color: "#3f396d" },
  { class: "csharp", valueClass: "csharp-progress", endValue: 80, color: "#0078d7" },
  { class: "kotlin", valueClass: "kotlin-progress", endValue: 70, color: "#fcba03" },
];

// Fungsi untuk membuat progress bar dinamis
skills.forEach((skill) => {
  let skillProgress = document.querySelector(`.${skill.class}`);
  let skillValue = document.querySelector(`.${skill.valueClass}`);
  let startValue = 0;
  const speed = 50;

  let progress = setInterval(() => {
    startValue++;

    skillValue.textContent = `${startValue}%`;
    skillProgress.style.background = `conic-gradient(${skill.color} ${
      startValue * 3.6
    }deg, #ededed 0deg)`;

    if (startValue == skill.endValue) {
      clearInterval(progress);
    }
  }, speed);
});

// Filter menggunakan jQuery
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value === "all") {
      $(".post").show("1000");
    } else {
      $(".post").not("." + value).hide("1000");
      $(".post").filter("." + value).show("1000");
    }
  });
});

// Navbar sticky behavior
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar-top");
    if (window.scrollY > 50) {
      navbar.classList.add("fixed-top");
      const navbarHeight = navbar.offsetHeight;
      document.body.style.paddingTop = `${navbarHeight}px`;
    } else {
      navbar.classList.remove("fixed-top");
      document.body.style.paddingTop = "0";
    }
  });
});



// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


const backendSkills = [
  { class: "nodejs", valueClass: "progress-value", endValue: 90, color: "#68a063" },
  { class: "flask", valueClass: "progress-value", endValue: 80, color: "#000000" },
  { class: "grpc", valueClass: "progress-value", endValue: 85, color: "#4285f4" },
  { class: "restful", valueClass: "progress-value", endValue: 90, color: "#fca61f" },
  { class: "graphql", valueClass: "progress-value", endValue: 80, color: "#e535ab" },
];

// Animasi progress bar
backendSkills.forEach((skill) => {
  let skillProgress = document.querySelector(`.${skill.class}`);
  let skillValue = skillProgress.querySelector(`.${skill.valueClass}`);
  let startValue = 0;
  const speed = 50; // Kecepatan animasi

  let progress = setInterval(() => {
    startValue++;

    skillValue.textContent = `${startValue}%`;
    skillProgress.style.background = `conic-gradient(${skill.color} ${
      (startValue / 100) * 360
    }deg, #ededed 0deg)`;

    if (startValue === skill.endValue) {
      clearInterval(progress);
    }
  }, speed);
});
