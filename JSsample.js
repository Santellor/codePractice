// variables
let example = 2
example+2 
console.log(example+2);
example = '3'
example+2
console.log(example+2);
const stray = 3
console.log(stray+" Blind Mice")
// Data Types

// Strings
"robert"
let bruver = "Le Robert"
// 0 specifies to clip the beginning of the string
console.log(bruver[0])

// slice allows to take chunks from the string
console.log(bruver.slice(1,10))

// Arrays
// numbered by positions 
const myList = [true,2,'puppy',5]
console.log(myList[3]);
console.log(myList[1]);

//This replaces the second value from 0,1,2,3, etc.
myList[1]= "kitten"
console.log(myList[1])

//this tacks another boyo onto the end
myList.push("I hate cactuses")
console.log(myList)


// Numbers
Infinity
//Percent symbol will give the remainder after division
console.log(70 % 2)
4.1244
0
1
45.002
// Objects - Variables with further descriptors

const myObj = {
    name : "bert",
    health : 400,
    pet: "jimbo"
}

console.log(myObj.health);
console.log(myObj.pet);

// Functions

function reaper(slingBlade=true) {

    if (slingBlade === true) {
        console.log("I am the reaper");
    } else {
        console.log ("i am just a normal gold");
    }

}

reaper()

// For loops

myArr = [1,2,3,4,5]

for (let i = 0; i < myArr.length; i++) {
    console.log(myArr[i])
    
}

// Strict Equality will fail when confronted with numbers versus strings
if (2 === "2") {
    console.log("good to go");
}


