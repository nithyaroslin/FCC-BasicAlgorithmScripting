function reverseString(str) {
  let arr = str.split("");
  console.log(arr);
  let revStr = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    revStr += arr[i];
  }
  return revStr;
}

console.log(reverseString("hello world!"));
