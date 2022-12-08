function lastSurvivor(letters, coords) {
    return coords.reduce((acc, curr) => acc.slice(0, curr) + acc.slice(curr + 1), letters)
  }