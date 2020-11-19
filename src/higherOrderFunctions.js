//Closures:
function generateAdjectifier(adjective) {
  return function (noun) {
    return `${adjective}, ${noun}!`;
  };
}

const holify = generateAdjectifier('Holy');

console.log(holify('JavaScript'));
console.log(holify('Python'));

//Combining higher order functions
function generateEnder(ending) {
  return function (input) {
    return input + ending;
  };
}

const adore = generateEnder(' is cool');
const announce = generateEnder(", y'all");
const exclaim = generateEnder('!');

function hypeUp(hype) {
  return exclaim(announce(adore(hype)));
}

console.log(hypeUp('JavaScript'));
