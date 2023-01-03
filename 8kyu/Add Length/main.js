function addLength(str) {
    const words = str.split(" ")
    const wordslength = []
    words.forEach((word) => {
      wordslength.push(word + " " + word.length)
   })
     return wordslength
   }