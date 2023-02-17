function squareSum(numbers){
    return numbers.reduce((acc, curr) => acc + curr ** 2, 0) 
  }