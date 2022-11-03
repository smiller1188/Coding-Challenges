function past(h, m, s){
    const convertHours = h * 60 * 60 * 1000;
    const convertMinutes = m * 60 * 1000;
    const convertSeconds = s * 1000;
      return convertHours + convertMinutes + convertSeconds;
  }
  