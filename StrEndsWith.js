//check if the string str ends with the target string and return true if so.

function confirmEnding(str, target) {
  let strLen = str.length;
  let srchStrLen = target.length;

  let resPosition = strLen - srchStrLen;

  let indexPosition = str.lastIndexOf(target);

  if (resPosition === indexPosition) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("Bastian", "n"));
