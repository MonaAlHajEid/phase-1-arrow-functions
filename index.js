// 1. Function expression called divide
const divide = function() {
    return 2000 / 100;
  };
  
  // 2. Arrow function called square
  const square = (parameter) => parameter * parameter;
  
  // 3. Arrow function called add
  const add = (parameter1, parameter2) => parameter1 + parameter2;
  
  // Make the functions available for testing
  module.exports = {
    divide,
    square,
    add,
  };
  