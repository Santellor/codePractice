const buildWordChain = (words) => {

    // empty arrays are not my friend, and so is an empty argument
    if (words === undefined || words[0] === undefined) {
    return words
    }
    
    // Create an object that will store letter matches for each given element
    const codex = {}
    
    // Loop through words to fill codex
    for (let word of words) {
        //takes the last letter of each word
        let finalLetter = word.slice(word.length - 1)
        //populates the codex: key = word, value = array of words that start with finalLetter
        //avoid any loop problems by preventing the word from being added to its own codex
        codex[word] = words.filter((element) => element.startsWith(finalLetter) && element !== word)
    }
    
      console.log(codex)
    //declares the start of the chain as the first word in the given array
    const chainArray = [words[0]]
    
    //loop through chain to place the correct next word from the codex
    for (let word of chainArray) {
    
        //defines the next word by searching the codex and returning the first value
        nextWord = codex[word][0]
    
        //checks if the next word is undefined, and pushes it if not
        if (nextWord !== undefined) {
        chainArray.push(nextWord)
    
        //removes any items from the codex that are present in the chain
        codex[nextWord] = codex[nextWord].filter((element) => !chainArray.includes(element))
        delete codex[word]
        }
    }
    
    return chainArray
    
}
    console.log(buildWordChain([`sunglasses`,`zany`, `yellowed`, `sundials`, `lane`, `yard`, `enumerated`, `sandy`, `dancer`]))
    console.log(buildWordChain(['zoo', 'sour', 'racket', 'octos']))
    console.log(buildWordChain([`noon`, `naan`, `nun`]))
    console.log(buildWordChain([`racecar`, `racers`, `racecar`, `racers`]))
    console.log(buildWordChain(['cute', 'antsy', 'etcetera', 'karat', 'yak']))
    console.log(buildWordChain([`a`,`b`,`c`]))
    console.log(buildWordChain([]))
    console.log(buildWordChain())