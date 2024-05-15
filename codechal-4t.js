function missingNo(nums) {
    // I used gauss summation (Craig, I remembered!) to find the sum of numbers 1-100
    let maximum = 5050

    // subtract each element from the maximum
    nums.forEach((element) => {
      maximum = maximum - element
    })
    
    // whatever is left will be the missing number
    return maximum
}

function sumTwoSmallestNumbers(numbers) {  
    // arrange numbers from low to high
const numSort = numbers.sort((a,b) => a - b)

    // add the lowest 2
return numSort[0] + numSort[1]
}