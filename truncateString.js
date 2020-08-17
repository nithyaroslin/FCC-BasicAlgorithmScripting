//truncate the string after 'num' length and append '...' at the end.
//if the string's length is equal to the truncate length, return the string without appending '...'

function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return str.substring(0, num) + "...";
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
