function squareDigits(num){
    return +Array.from(num.toString(), v => v * v).join('');
  }
  