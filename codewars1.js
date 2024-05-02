function isPalindrome(word) {
  word = word.toLowerCase()
  return word.split(``).reverse().join(``) === word ? true : false
}

console.log(isPalindrome(`aba`))
const arr1 = [1,2,3]
const arr2 = [1,2,3]


console.log([...arr1])
console.log(([...arr1] === [...arr2]))
//evaluation of arrays gets funky
    // objects are compared by position

    