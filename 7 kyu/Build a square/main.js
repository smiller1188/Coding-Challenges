function generateShape(integer){
    let string = ''
    for(let i = 0; i < integer * integer; i++) {
      if(i % integer === 0 && i !== 0) {
        string += '\n'
      }
      string += '+'
    }
    return string
  }