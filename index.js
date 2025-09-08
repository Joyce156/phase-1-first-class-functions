// 1. Function that receives a callback and calls it
function receivesAFunction(callback) {
  callback();
}

// 2. Function that returns a named function
function returnsANamedFunction() {
  function namedFunction() {
    return "I'm named!";
  }
  return namedFunction;
}

// 3. Function that returns an anonymous function
function returnsAnAnonymousFunction() {
  return function () {
    return "I'm anonymous!";
  };
}
