function reverseLetter(str) {
    const replaced = str.replace(/[^a-z]/gi, '');
    return replaced.split("").reverse().join("");
  }