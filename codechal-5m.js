function spinWords(string){
    // split the given string into array, using spaces as the delimiter, then map over each element
    return string.split(` `).map((element) => element.length > 4? 
        // if the element is longer than 4 characters, reverse it by converting the word into an array and using reverse
         element = element.split(``).reverse().join(``) :
         // if not, the element is unchanged
         element = element
        // rejoin the string array into a sentence
         ).join(` `)
   }