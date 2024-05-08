function disemvowel(str) {
    const vowels = [`a`,`e`, `i`, `o`,`u`, `A`,`E`, `I`, `O`,`U`]
// could work as a string 
    // aeiou
    // when checking, use .lowercase in the filter. that won't change the value of the original 

    return str.split(``).filter((letter) => !vowels.includes(letter)).join(``);
  }

function createPhoneNumber(numbers){
      return `(${numbers.slice(0,3).join(``)}) ${numbers.slice(3,6).join(``)}-${numbers.slice(6).join(``)}`
}
    
    // using RegEx
    function disemvowel(str) {
      return str.replace(/[aeiou]/gi, '');
    } // g is global, i is case insensitive


  function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]); // this is the money on this one. .replace is a cool method
    }
    
    return format;
  }


  // how .replace works
  const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", 'my'));
// Expected output: "I think my dog is cuter than your dog!"

const regex = /Dog/i;
console.log(paragraph.replace(regex, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your dog!"