const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click", function () {
  alert("This is div");
});
form.addEventListener("click", function () {
  alert("This is form");
});
button.addEventListener("click", function () {
  alert("This is button");
});
