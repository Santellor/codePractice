function toCamelCase(str){
    let arr = str.split(/_|-/)
     let newArr = [arr[0]]
     
     console.log(arr)
    for (let word of arr) {
       if  (word !== arr[0]) {
         word = word.slice(0,1).toUpperCase() + word.slice(1)
         newArr.push(word)
       }
     }
     return newArr.join(``)
   }
   
   console.log(toCamelCase("Here-is_My-string"))

//Craig
function toCamelCase(str){
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
  }

  function toCamelCase(str){ return str.replace(/-_/g, (x, y) => y.toUpperCase()); }

  `I learned a lot thanks to this solution, therefore I will provide an explanation so that other newbies like me can understand it quicker than me:

  _ (Underscore) as a parameter name means that that parameter will not be used in the function 
            (i.e. it is unnecessary to get the desired return, so doesn't deserve a name.)---

  He creates a separate regexp capture group by having the dot in the parantheses.---

  So the whole match is underscore|hyphen + a letter but he also has just the letter as a separate capture group 1.

  first parameter is the whole match including the underscore|hyphen + the letter (e.g. "-s") and is not used.---

  the second parameter is capture group 1, which is only the letter part of the whole match.---

  he converts only parameter 2 (i.e. capture group 1) to uppercase and returns that to be used as replacement.
  
  Hope this helps guys! Read other people's code. It's extremely helpful and the best way to learn.`