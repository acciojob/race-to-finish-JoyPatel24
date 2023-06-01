window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
// Promise 1
window.promises.push(
  new Promise((resolve) => setTimeout(() => resolve("Promise 1"), Math.random() * 5000 + 1000))
);

// Promise 2
window.promises.push(
  new Promise((resolve) => setTimeout(() => resolve("Promise 2"), Math.random() * 5000 + 1000))
);

// Promise 3
window.promises.push(
  new Promise((resolve) => setTimeout(() => resolve("Promise 3"), Math.random() * 5000 + 1000))
);

// Promise 4
window.promises.push(
  new Promise((resolve) => setTimeout(() => resolve("Promise 4"), Math.random() * 5000 + 1000))
);

// Promise 5
window.promises.push(
  new Promise((resolve) => setTimeout(() => resolve("Promise 5"), Math.random() * 5000 + 1000))
);