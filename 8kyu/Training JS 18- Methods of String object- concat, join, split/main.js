function splitAndMerge(string, separator) {
    return string.split(" ").map(index => index.split("").join(separator)).join(" ")
  }