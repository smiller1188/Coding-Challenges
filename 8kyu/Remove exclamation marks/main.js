function removeExclamationMarks(s) {
    return [...s].filter((value) => value !== '!').join('');
  }