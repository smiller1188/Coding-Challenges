function mostFrequentItemCount(collection) {
    return collection.length ? Math.max(...collection.map(x => collection.filter(y => y == x).length)) : 0;
 }