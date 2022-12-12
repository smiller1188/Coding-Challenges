function isVow(a){
    return a.map(x => /[a, e, i, o, u]/.test(String.fromCharCode(x)) ? String.fromCharCode(x) : x)
  }