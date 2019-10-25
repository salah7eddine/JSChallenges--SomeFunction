// unique values using Set() data structure
// pause to work on your solution and share

function unique(str) {

  return new Set(str).size === str.length;

  /*  let tempStr = new Set();

  for (let letter of str) {
    if (tempStr.has(letter)) {
      return false;
    }
    tempStr.add(letter);
  }
  return true; */


}

console.log(unique("abcd"));
// returns true
console.log(unique('abcdade'));
// return false ad = duplicate