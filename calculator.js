function sum(a, b) {
  if((a === undefined) && (b === undefined)){
    return 0;
  } else if ((a === undefined) || (b === undefined)){
    return a || b + 0;
  }else{
    return a + b;
  }
}

function subtract(a, b) {
  if((a === undefined) && (b === undefined)){
    return 0;
  } else if ((a === undefined) || (b === undefined)){
    return a || b - 0;
  } else {
    return a - b;
  }
}

function divide(a, b) {
  if (b == 0){
    return console.error(error);;
  } else{
    return a / b;
  }

}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
