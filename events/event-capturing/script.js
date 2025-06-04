const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener(
  "click",
  function (e) {
    alert("This is div");
  },
  {
    capture: true,
  }
);
button.addEventListener(
  "click",
  function (e) {
    alert("This is button");
  },
  {
    capture: true,
  }
);

form.addEventListener(
  "click",
  function (e) {
    e.stopPropagation();
    alert("This is form");
  },
  {
    capture: true,
  }
);
