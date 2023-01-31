function snail(column, day, night) {
    return Math.max(1, Math.ceil((column - day)/ (day - night)) + 1)
  }