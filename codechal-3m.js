// const XO = (str) => {
//     str = str.toLowerCase()
//     let xCount = 0
//     let oCount = 0
    
//     str.split(``).forEach((element) => {
//         console.log(element)
//         if (element === `x`) {
//             xCount++
//             console.log(xCount)
//         }
//         if (element === `o`) {
//             oCount ++
//             console.log(oCount)
//         }
//     })
//     if (xCount === oCount) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(XO(`xooox`))
// console.log(XO(`xo`))
// console.log(XO(`xxxm`))
// console.log(XO(`Oo`))


`whoa`
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    str.match()
    return (x && x.length) === (o && o.length);
}

// function getMiddle(s) { 
//     return s.length % 2 === 0 
    // ? s.slice((s.length / 2) - 1, (s.length / 2) + 1) 
    // : s.slice(Math.floor(s.length / 2),Math.floor(s.length / 2) + 1);
// }

// console.log(getMiddle(`dancer`))
// console.log(getMiddle(`dance`))

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}


