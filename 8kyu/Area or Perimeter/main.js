const areaOrPerimeter = function(l , w) {
    if(l === w) {
      return 'square' && l * w
    } else {
      return 'rectangle' && l * 2 + w * 2
    }
  };