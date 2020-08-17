/*
Basic Algorithm Scripting: Slice and SplicePassed
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/

function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.splice(0, n);
  // console.log(arr1)
  newArr.push(...arr1.slice());
  // console.log(arr2)
  newArr.push(...arr2.slice());
  console.log(newArr);

  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
frankenSplice([1, 2, 3], [4, 5], 1);
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
