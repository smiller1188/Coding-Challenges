function newAvg(arr, newavg) {
    let result = (arr.length + 1) * newavg
    for(let i = 0; i < arr.length; i++) {
      result -= arr[i]
    }
  if(result <= 0) {
    throw 'Expected New Average is too low'
  }
  return Math.ceil(result)
}