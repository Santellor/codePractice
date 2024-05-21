function deleteNth(arr,n){
  
    let preventRepeats = {}
    
    //this could have gone inside the filter
    arr.forEach((element, i) => {
      if (preventRepeats[element] >= n) {
        arr.splice(i, 1,`destroy`) 
      }
    
      preventRepeats[element] ? 
        preventRepeats[element] ++ : 
      preventRepeats[element] = 1 
  
    })

    // only needed this logic 
  return arr.filter((element) => element !== `destroy` )
  }



  // invoke your methods, boy
  function solution(string) {
    return string.split(``).map((element) => 
           element === element.toUpperCase()?
           element = ` `+element :
           element = element
         ).join(``)
  }