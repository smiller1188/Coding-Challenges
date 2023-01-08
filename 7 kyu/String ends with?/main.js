function solution(str, ending){
    if(ending.length == 0) return true
    return str.substr(-ending.length) == ending;
  }
  