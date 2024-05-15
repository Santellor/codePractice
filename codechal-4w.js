function isValidWalk(walk) {
    
    let nCount = 0
    let sCount = 0
    let eCount = 0
    let wCount = 0
    
    walk.forEach((element) => {
      if (element === 'n') {
        nCount++
      }
      if (element === 's') {
        sCount++
      }
      if (element === 'e') {
        eCount++
      }
      if (element === 'w') {
        wCount++
      }
      
    })
    
    return (nCount === sCount && eCount === wCount && walk.length === 10)
  }


  function isValidWalk(walk) {

    let xDist = 0
    let yDist = 0

    walk.forEach((element) => {
      
      switch (element) {
        case `n` : 
          yDist--;
          break
        case `s` : 
          yDist++;
          break
        case `e` : 
          xDist--;
          break
        case `w` : 
          xDist++;
          break
      }
    })

    return (xDist === 0 && yDist === 0 && walk.length === 10)
}


//Koas way was really cool
const isValidWalk = (walk) => {
    if (walk.length !== 10) {
      return false
    }
    const dict = {}
    walk.forEach((dir) => dict[dir] ? dict[dir]++ : dict[dir] = 1)
    const {w, e, n, s} = dict
    return (w === e && n === s)
  }