function freqSeq(str, sep) {
    return str.split('').map(i => str.split(i).length -1).join(sep);
  }