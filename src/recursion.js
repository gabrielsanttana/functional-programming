//Iteration:
function iterationSum(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

console.log(iterationSum([1, 2, 3]));

//Recursion:
function recursionSum(numbers) {
  if (numbers.length === 1) {
    return numbers[0];
  }

  return numbers[0] + recursionSum(numbers.slice(1));
}

console.log(recursionSum([1, 2, 3]));
