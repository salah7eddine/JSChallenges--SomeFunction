function checkPalindome(str) {
  /*  str = str.toLowerCase();
   let first = str.split(' ').join('');
   let second = str.split(' ').reverse().join('');
 
   return first === second; */

  let tempStr = str.match(/[a-z0-9]+/ig).join('').toLowerCase();

  let second = tempStr.split('').reverse().join('');

  return tempStr === second;
}

console.log(checkPalindome('Was it a car or a cat I saw'));
// true
console.log(checkPalindome('Red -rum-, sir,-is-murder'));
// true
console.log(checkPalindome('I got up early this morning'));
// false
