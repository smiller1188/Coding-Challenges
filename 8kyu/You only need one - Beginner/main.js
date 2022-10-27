function check(a, x) {
    let i = a.length;
      while (i--) {
         if (a[i] === x) {
             return true;
         }
      }
      return false;
   }