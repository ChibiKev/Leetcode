type ReturnObj = {
  increment: () => number,
  decrement: () => number,
  reset: () => number,
}

function createCounter(init: number): ReturnObj {
let currentCount: number = init;

return {
  increment() {
    return ++currentCount;
  },
  decrement() {
    return --currentCount;
  },
  reset() {
    currentCount = init;
    return currentCount;
  }
}
};

/**
* const counter = createCounter(5)
* counter.increment(); // 6
* counter.reset(); // 5
* counter.decrement(); // 4
*/