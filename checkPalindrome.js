/* function checkPalindrome(str) {
  str = str.toLowerCase();
  let first = str.split(' ').join('');
  let second = first.split('').reverse().join('');

  return first === second;
} */

function checkPalindrome(str) {
  let tempStr = str.match(/[a-z0-9]+/ig).join('').toLowerCase();
  let second = tempStr.split('').reverse().join('');

  return tempStr === second;
}

console.log(checkPalindrome("Was it a car or a cat I saw"));
// true
console.log(checkPalindrome('Red -rum-, sir,-is-murder'));
// true
console.log(checkPalindrome('I got up early this morning'));
// false