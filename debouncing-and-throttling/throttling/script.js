const btn = document.querySelector(".btn");
const btnPressed = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

let pressedCount = 0;
let triggeredCount = 0;

const myThrottle = (cn, d) => {
  let last = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - last < d) return;
    last = now;
    return cn(...args);
  };
};

const debouncedCount = myThrottle(() => {
  count.innerHTML = ++triggeredCount;
}, 800);

// Using Lodash library
// const debouncedCount = _.throttle(() => {
//   count.innerHTML = ++triggeredCount;
// }, 800); // execute every 800ms at most once

btn.addEventListener("click", () => {
  btnPressed.innerHTML = ++pressedCount;

  debouncedCount();
});


