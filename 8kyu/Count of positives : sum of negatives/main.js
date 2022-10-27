function countPositivesSumNegatives(input) {
    return input && input.length ? input.reduce((prev, curr) => (curr > 0 ? 
     prev[0] = prev[0] + 1 : prev[1] = prev[1] + curr, prev), [0, 0]) : []
   }