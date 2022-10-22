function updateLight(current) {
    if(current === 'green') {
      return 'yellow'
    } else if(current === 'yellow') {
      return 'red'
    } 
    return 'green'
  }