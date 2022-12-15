var humanYearsCatYearsDogYears = function(humanYears) {
    let catYear1 = 15;
    let catYear2 = catYear1 + 9;
    let catYear3 = 4;
    
    let dogYear1 = 15;
    let dogYear2 = dogYear1 + 9;
    let dogYear3 = 5;
    
      if(humanYears <= 2) {
        if(humanYears == 1) {
          return [1, catYear1, dogYear1];
        } else if(humanYears == 2) {
          return[2, catYear2, dogYear2]
        } else if(humanYears == 0) {
          return [0, 0, 0]
        } 
    } else {
      let twighlightYears = humanYears - 2
      let catYears = catYear2 + (twighlightYears * catYear3)
      let dogYears = dogYear2 + (twighlightYears * dogYear3)
      return [humanYears, catYears, dogYears]
    }
  }