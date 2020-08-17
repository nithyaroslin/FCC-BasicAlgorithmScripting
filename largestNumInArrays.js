//fetch the maximum number from each sub array and return them in an array!

function largestOfFour(arr) {
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    resultArr.push(Math.max(...arr[i]));
  }
  return resultArr;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
