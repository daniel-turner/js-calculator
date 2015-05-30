var calculator = require('./calculator.js');

var validate = function() {

  if(args.length < 2) {

    console.log("Need a numerical argument to be input.");

  }
}

var args = process.argv.slice(2);

if (args.length < 1) {

  console.log("No arguments were input.");
}

switch (args[0]) {

  case 'load':


    console.log("LOAD");

    break;
  case 'getTotal':
    console.log("GET_TOTAL");
    //console.log(calculator.getTotal);
    break;
  case 'add':
    console.log("ADD");
    //console.log(calculator.add(args[1]));
    break;
  case 'subtract':
    console.log("SUBTRACT");
    break;
  case 'multiply':
    console.log("MULTIPLY");
    break;
  case 'divide':
    console.log("DIVIDE");
    break;
  case 'recallMemory':
    console.log("RECALL");
    break;
  case 'saveMemory':
    console.log("SAVE");
    break;
  case 'clearMemory':
    console.log("CLEAR");
    break;

};


console.log(calculator);