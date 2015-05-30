var calculator = require('./calculator.js');

var isNumberValid = function() {

  if(args.length < 2) {

    console.log("Need a numerical argument to be input.");

    return false;

  }

  return true;
}

var args = process.argv.slice(2);

if (args.length < 1) {

  console.log("No arguments were input.");
}

switch (args[0]) {

  case 'load':
    console.log("LOAD");
    if(isNumberValid) {

      console.log(calculator.calculatorModule.load(args[1]));
    }
    break;
  case 'getTotal':
    console.log("GET_TOTAL");
    console.log(calculator.calculatorModule.getTotal());
    break;
  case 'add':
    console.log("ADD");
    if(isNumberValid) {

      console.log(calculator.calculatorModule.add(args[1]));
    }
    break;
  case 'subtract':
    console.log("SUBTRACT");
    if(isNumberValid) {

      console.log(calculator.calculatorModule.subtract(args[1]));
    }
    break;
  case 'multiply':
    console.log("MULTIPLY");
    if(isNumberValid) {

      console.log(calculator.calculatorModule.multiply(args[1]));
    }
    break;
  case 'divide':
    console.log("DIVIDE");
    if(isNumberValid) {

      console.log(calculator.calculatorModule.divide(args[1]));
    }
    break;
  case 'recallMemory':
    console.log("RECALL");
    console.log( calculator.calculatorModule.recallMemory());
    break;
  case 'saveMemory':
    console.log("SAVE");
    console.log( calculator.calculatorModule.saveMemory());
    break;
  case 'clearMemory':
    console.log("CLEAR");
    console.log(calculator.calculatorModule.clearMemory());
    break;

};