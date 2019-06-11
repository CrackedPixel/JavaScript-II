// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let initVal = 0;
  return () => {
    initVal++;
    console.log(initVal);
    return initVal;
  }
};

const newCounter = counter();
newCounter();
newCounter();

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let initVal = 0;
  return {
    increment: () => {
      initVal++;
      console.log(initVal);
      return initVal;
    },
    decrement: () => {
      initVal--;
      console.log(initVal);
      return initVal;
    }
  }
};

const newCounterFactory = counterFactory();
newCounterFactory.increment();
newCounterFactory.increment();
newCounterFactory.increment();
newCounterFactory.increment();
newCounterFactory.increment();
newCounterFactory.decrement();
newCounterFactory.decrement();
newCounterFactory.decrement();


















