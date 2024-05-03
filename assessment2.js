// //   => ['Hello, Clive!', 'Hello, Jill!', 'Hello, Torgal!']
// function createGreetings(names) {
//     return names.map((name) => `Hello, ${name}`)
// }
//   console.log(createGreetings(['Clive', 'Jill', 'Torgal']))

// //   => ['APPLE', 'PINATA']
// function loudLongWords(words) {
//    let mustBeLong = words.filter((word) => word.length > 4)
//   return mustBeLong.map((word) => word.toUpperCase())
// }
//   console.log(loudLongWords(['apple', 'pear', 'cake', 'pinata']))

//   const getName = ([
//     { firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' },
//     { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
//     { firstName: 'Karlach', lastName: 'Cliffgate', location: 'Avernus' }
//   ]);
// //   => ['Gale Dekarios', 'Wyll Ravengard', 'Karlach Cliffgate'];
// function getNames(people) {
//   return people.map((person) => person = `${person.firstName} ${person.lastName}`)
// }

// console.log(getNames(getName))

// //   
// //   => 'Gale Dekarios'
// function getNameUsingDestructuring(person) {
//   const {firstName, lastName} = person
//   return `${firstName} ${lastName}`
// }

// console.log(getNameUsingDestructuring({ firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' }))

//   => [
//     { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
//     { firstName: 'Astarion', lastName: 'Ancunin', location: "Baldur's Gate" }
//   ];
// function getPeopleByLocation(people, location) {
//  return people.filter((person) => person.location === location)
// }
//   console.log(getPeopleByLocation([
//     { firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' },
//     { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
//     { firstName: 'Karlach', lastName: 'Cliffgate', location: 'Avernus' },
//     { firstName: 'Astarion', lastName: 'Ancunin', location: "Baldur's Gate" }
//   ], "Baldur's Gate"))


// //   => 'avast me matey where be the head'
// const EN_PIRATE_LOOKUP = {
//   excuse: 'avast',
//   sir: 'matey',
//   is: 'be',
//   restroom: 'head',
//   student: 'swabbie',
//   friend: 'matey',
//   restaurant: 'galley',
//   your: 'yer',
//   are: 'be',
//   my: 'me',
//   hotel: 'fleabag inn',
//   hello: 'ahoy',
// };

// function translateToPirateTalk(phrase) {
  
//   let wordArray = phrase.split(` `)
//     //now an array
//   const Dictionary = Object.keys(EN_PIRATE_LOOKUP)
//     //now an array of words we are looking for
  
//     //we check the array for each key and change the value if it is included
//     for (let i = 0; i < wordArray.length; i++) {
//       if (Dictionary.includes(wordArray[i])) {
//        wordArray[i] = EN_PIRATE_LOOKUP[wordArray[i]]
//       }
//     }
//     return wordArray.join(` `)
// }
//   console.log(translateToPirateTalk('excuse me sir where is the restroom'))

// function wordCount(str) {
//   let words = str.split(` `)
// function wordCount(str) {
//   let words = str.split(` `)

//   let wordObj = {}
  
//   for (let word of words) {
//     if (wordObj[word] >= 1) {
//       wordObj[word] +=1
//     } else {
//       wordObj[word] = 1}
//     }
//     return wordObj
// }

// console.log(wordCount(`EYYYY ITS MAYBE WORKING ITS ITS ITS`))




// function isBugAvailable(bug, month) {
//   if(bug.availability.months.includes(month)) {
//    return true
//  }
//   return false
// }

// console.log(isBugAvailable({
//     name: 'common butterfly',
//     availability: {
//       rarity: 'common',
//       months: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
//     }
//   }, 1))


// // Ex.:
//   const bugs = [
//     {
//     name: 'zebra butterfly',
//       availability: {
//         rarity: 'common',
//         months: [1, 2, 3, 6, 8],
//       },
//     },
//     {
//       name: 'peacock butterfly',
//       availability: {
//         rarity: 'common',
//         months: [1, 2, 3],
//       },
//     },
//     {
//       name: 'yellow butterfly',
//       availability: {
//         rarity: 'common',
//         months: [3, 10, 12],
//       },
//     },
//   ];

// function buildBugHuntCalendar(bugs) {
// // I need to produce a new object with 12 keys numbered 1 - 12 and values of arrays
//   const bugHuntCalendar = {}
//   for (let i = 1; i < 13; i++) {
//   bugHuntCalendar[i] = []
//   }
// // for each object in the parameter array, I need to check the months
//   // for each month present, push the name of that object into the correct month
//   //OH NO I NEED TWO LOOPS
//   for(let i=0; i < bugs.length; i++) {
//     for (let season of bugs[i].availability[`months`]) {
//       bugHuntCalendar[season].push(bugs[i].name)
//     }
//   }
//   //Jiminey Crickets that took forever to debug
// return bugHuntCalendar
// }


// console.log(buildBugHuntCalendar(bugs))

function fact(num1) {
    factRes = num1 
    for (let i = 1; i < num1; i++){
      factRes = factRes * (num1 - i) 
    } 
    return factRes
  }
  // takes in a number of 6
  //sets the number to equal a changeable version of the number
  // begins a loop. ZERO is our worst nightmare, so we start it at 1
    //we have it count down FROM THE ORIGINAL NUMBER so that it never reaches zero. When i = 6, it fails. 
    // for each loop we set our changeable version of the number equal to itself minus one less of itself
    // the loop stops in time because we have it set to equal the ORIGINAL NUMBER
  //returns the total product
  
  const factorialAgain = (num) => {
    let factorialProduct = num
      for(let i = 1; i < num; i++) {
        factorialProduct = factorialProduct * (num - i) 
        console.log(i)
        console.log(factorialProduct)
      }
    return factorialProduct
  }
  
  console.log(factorialAgain(12))
  