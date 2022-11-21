var isAnagram = function(test, original) {
    let str1 = test.toLowerCase().split('').sort().join('');
    let str2 = original.toLowerCase().split('').sort().join('');
    if(str1 === str2){
       return true;
    } else { 
       return false;
    }
 };