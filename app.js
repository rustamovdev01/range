let btn = document.querySelector(".button-73");
let controls = document.querySelector(".controls");
let input = document.querySelector("#input_range");
let btn2 = document.querySelector(".button-70");
let input2 = document.querySelector("#input_color");
let body = document.querySelector("body");
btn.addEventListener("click", function () {
  input.classList.toggle("hidden");
  controls.classList.toggle("hidden");
  btn2.classList.toggle("hidden");
});
btn2.addEventListener("click", function () {
  input2.classList.toggle("hidden");
});
input.addEventListener("input", function () {
  body.style.fontSize = input.value + "px";
});
btn2.addEventListener("click", function () {
  let add = confirm("Colorni o'zgartiramizmi?");
  if (add == true) {
    input2.classList.remove("change-color");
  } else {
    alert("O'zingiz bilasiz :)");
  }
});
input2.addEventListener("input", function () {
  body.style.background = `${input2.value}`;
});
