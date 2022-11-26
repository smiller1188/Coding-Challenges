var min = function(list){
    return list.reduce(function (p, v) {
    return ( p < v ? p : v );
  });
}

var max = function(list){
    return list.reduce(function (p, v) {
    return ( p > v ? p : v );
  });
}