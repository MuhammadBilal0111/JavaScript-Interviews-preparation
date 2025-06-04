const btn = document.querySelector(".btn");
const btnPressed = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

let pressedCount = 0;
let triggeredCount = 0;

const myDebounce = (cb, d) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};

// Using Lodash library
// const debouncedCount = _.debounce(() => {
//   count.innerHTML = ++triggeredCount;
// }, 800);
const debouncedCount = myDebounce(() => {
  count.innerHTML = ++triggeredCount;
}, 800);
btn.addEventListener("click", () => {
  btnPressed.innerHTML = ++pressedCount;
  debouncedCount();
});
