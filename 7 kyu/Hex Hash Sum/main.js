function hexHash(code){
    return code
     .split('')
     .map(c=>c.charCodeAt())
     .map(n=>n.toString(16))
     .join('')
     .split('')
     .filter(c=>'123456789'.includes(c))
     .map(d=>parseInt(d))
     .reduce((a, b)=>a+b, 0)
  }