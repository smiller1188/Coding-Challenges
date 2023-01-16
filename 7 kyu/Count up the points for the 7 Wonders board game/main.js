function solve(compasses, gears, tablets) {
    return Math.min(compasses, gears, tablets) * 7 + compasses ** 2 + gears ** 2 + tablets ** 2;
  }