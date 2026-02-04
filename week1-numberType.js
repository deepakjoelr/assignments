let input = -7
function isNumberType(input) {
  if (input > 0) {
    console.log(`${input} is positive`);
  } else if (input < 0) {
    console.log(`${input} is negative`);
  } else {
    console.log(`${input} is zero`);
  }
}

isNumberType(input);