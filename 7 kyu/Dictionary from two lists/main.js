function createDict(keys, values){
    let result = {};
      keys.forEach((key, i) => result[key] = values[i]!=undefined?values[i]:null);
      return result
  }