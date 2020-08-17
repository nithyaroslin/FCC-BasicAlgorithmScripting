//find the longest word in a sentence.
function findLongestWordLength(str) {
  let arr = str.split(" ");
  let lengthArr = [];
  for (let i = 0; i < arr.length; i++) {
    lengthArr.push(arr[i].length);
  }

  return Math.max(...lengthArr);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
