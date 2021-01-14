//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
    let array = str.split('');
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      newArray[array.length-1-i] = array[i];
    }
    return newArray.join('');
}
  
function reverseStringRecursion(str) {
    if (str === '') {
      return '';
    } else {
      return reverseStringRecursion(str.substr(1)) + str.charAt(0);
    }
}
  
reverseStringRecursion('yoyo mastery')
//should return: 'yretsam oyoy'