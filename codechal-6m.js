function findUniq(arr) {
    return arr.filter(
        //filter out the only element that appears once. Then return the element, not the array
      (el, i, arr) => arr.lastIndexOf(el) === arr.indexOf(el))[0]
    }

function findUniq(arr) {
    let answer;
        arr.forEach((el) => {
            if (arr.lastIndexOf(el) === arr.indexOf(el)) {
                answer = el
                return
            }
        })
    return answer
    }

//did an extra
function findOdd(A) {
    const counter = {}
    
    A.forEach((el) => {
        counter[el]? counter[el] ++ : counter[el] = 1
        counter[el] % 2 === 0 ? delete counter[el] : null
    })
    
    return Number(Object.keys(counter)[0])
    }

// WHOA
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);



