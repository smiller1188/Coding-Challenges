function findShort(s){
    const stringArray = s.split(" ");
    const orderedArray = stringArray.sort((a, b) => {
      return a.length - b.length
    })
    return orderedArray[0].length;
  }