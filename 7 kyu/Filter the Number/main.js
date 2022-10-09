function filterString(value) {
    var numsStr = value.replace(/[^0-9]/g, '');
    return parseInt(numsStr);
  }