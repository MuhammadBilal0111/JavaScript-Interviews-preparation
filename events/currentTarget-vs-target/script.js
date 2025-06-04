const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click", func);
form.addEventListener("click", func);
button.addEventListener("click", func);

function func(event) {
  console.log(event);
  alert(
    "currentTarget=" +
      event.currentTarget.tagName +
      ",target=" +
      event.target.tagName
  );
}
