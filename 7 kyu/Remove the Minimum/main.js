function removeSmallest(numbers) {
    return numbers.filter((_, index) => index != numbers.indexOf(Math.min(...numbers)))
  }