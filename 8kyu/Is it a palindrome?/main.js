function isPalindrome(x) {
    let regEx = /[\W_]/g;
    let lowRegStr = x.toLowerCase().replace(regEx, '');
    let reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }