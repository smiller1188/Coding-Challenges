function inAscOrder(arr) {
    for (let i = 0; i < arr.length; i++) {
       if (i > 0 && arr[i - 1] > arr[i]) {
         return false;
       }
    }
    return true;
  }