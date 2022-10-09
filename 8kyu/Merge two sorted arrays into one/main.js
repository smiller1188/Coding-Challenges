function mergeArrays(arr1, arr2) {
    let arr3 = arr1.concat(arr2)
    let uniqueArray = [];
      
          for(i = 0; i < arr3.length; i++){
              if(uniqueArray.indexOf(arr3[i]) === -1) {
                  uniqueArray.push(arr3[i]);
              }
          }
          return uniqueArray.sort((a, b) => a - b);
  }