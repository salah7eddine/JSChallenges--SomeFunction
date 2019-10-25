// pause to work on your solution and share

/* function ArraySum(arr) {
  let i;
  var sum = 0;

  for (i = 0; i < arr.length - 1; i++) {
    sum += arr[i];
  }
  console.log(sum);
  console.log(arr[i]);
  return sum === arr[i];
} */

function ArraySum(arr) {
  let tempArr = arr.sort((a, b) => a - b);

  let largest = tempArr.pop();
  let num = 0;
  tempArr.forEach(item => num += item);

  return largest === num;
}

console.log(ArraySum([1, 2, 4, 6, 13]));
// returns true 1+2+4+6=13
console.log(ArraySum([1, 2, 4, 34, 22]));
// return false 1+2+4+22=19 19!=34

