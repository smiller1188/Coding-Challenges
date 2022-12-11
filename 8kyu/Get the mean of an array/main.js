function getAverage(marks){
    const total = marks.reduce((acc, c) => acc + c, 0);
    return Math.floor(total / marks.length);
  }