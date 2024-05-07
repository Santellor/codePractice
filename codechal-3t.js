function likes(names) {
    switch (names.length) {
        case 0:
          return `no one likes this`;
        case 1:
          return `${names[0]} likes this`;
        case 2:
          return `${names[0]} and ${names[1]} like this`;
        case 3:
          return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default: 
          return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
}

function getSum(a, b) {

    let greater;
    let lesser;
    a > b ? greater = a : greater = b;
    a < b ? lesser = a : lesser = b;
    
    let sum = 0
    for (let i = lesser; i <= greater; i++){
      sum += i
    }
    return sum 
}

// Sean's is more concise - the while loop is really clever too
function getSum(a, b){
    let min = a > b ? b : a
    let max = a > b ? a : b
    let sum = 0
     
    while (min <= max) {
     sum += min
     min += 1
    }
    
    return sum
  }