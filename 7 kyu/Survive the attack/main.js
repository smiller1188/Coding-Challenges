function hasSurvived(attackers, defenders){
    let survive = defenders.length - attackers.length;
    for(let i = 0; i < attackers.length && i < defenders.length; i++) {
      survive += (defenders[i] > attackers[i]) - (defenders[i] < attackers[i]);
    }
      return survive > 0 || survive == 0 && attackers.reduce((acc, curr) => acc + curr, 0) <= defenders.reduce((acc, curr) => acc + curr, 0)
  }