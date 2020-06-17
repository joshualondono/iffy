// Your code here!

const comb = require('./color-combinator.js');
const decon = require('./color-deconstructor.js');

const color1 = getInput(0)
const color2 = getInput(1)


if (color1 === undefined){
  console.log('Wee')
} else if (color2 === undefined){
  const message = decon(color1)
  console.log(message)
} else {
  const message = comb(color1, color2)
  console.log(message)
}



// Our helper function here! Don't  touch!
function getInput(i) {
  return process.argv[i + 2];
}
