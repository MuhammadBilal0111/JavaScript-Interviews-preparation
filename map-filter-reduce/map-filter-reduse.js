// map, filter, reduce are array methods in JavaScript
// give the new array, filter the array, and reduce the array

// map
// map is used to create a new array from an existing array
// map function is used to apply the function on each element of the array

const arr = [1, 5, 8];
console.log(
  arr.map((element, i, arr) => {
    return element * 3;
  })
); // [3,15,24]

// filter
// filter is used to filter the array based on some condition
const moreThanTwo = arr.filter((element, i, arr) => {
  return element > 2;
});
console.log(moreThanTwo); // [5,8]

// reduce
// reduce is used to reduce the array to a single value
// accumulator is basically the result of the previous computation

const nums = [1, 2, 3, 4, 5];
console.log(
  nums.reduce((acc, curr, i, arr) => {
    return acc + curr;
  }, 0)
);
// if accumulator value is not provided then it will take the first element of the array as accumulator value

// creating these functions from scratch are polyfills
// pollyfills for map, filter, reduce
// map
// adding the MyMap function to the Array prototype
Array.prototype.MyMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

nums.MyMap((element, i, arr) => {
  return element * 2;
});

// filter
Array.prototype.MyFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

console.log(
  nums.MyFilter((element, i, arr) => {
    return element > 2;
  })
);

// Difference between map() and filter()
/*
map basically returns each and every values and modifies it according to the condition of the callback but filter only returns the value that satisfy the condition of callback
*/

// reducer
// arr.reduce((acc, curr, i, arr) => {}, acc);
Array.prototype.MyReduce = function (cb, initialValue) {
  var accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

// Difference between map and forEach
// map creates a new array and forEach does not create a new array only modifies the existing array
// in map() you can chain other js methods but in case of forEach you can't chain js method like filter, reduce

const arr1 = [1, 2, 4];
arr1.forEach((element) => {
  return element * 2;
});
console.log(arr1); // [1,2,4]

Array.prototype.Map = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
};
// base on the use case either to user map() or forEach()
// you can apply chain method on map() but not on forEach()
