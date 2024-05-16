function duplicateEncode(word){
    // ...
  word = word.toLowerCase().split(``)
  let dict = {}
  let wordEncode = []
  
  word.forEach((element) => {
    element in dict ? dict[element] ++ : dict[element] = 1 
  })
  
  word.forEach((element, i) => {
    dict[element] > 1 ? element = `)` : element = `(`
    wordEncode[i] = element
  })
  return wordEncode.join(``);
}

function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      // letter is a
      // index is not used but is preprogrammed in map
      // word as an array is w, the THIRD param finally makes sense to me
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }