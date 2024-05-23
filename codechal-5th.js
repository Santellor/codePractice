function domainName(url){
    // convert the string into an array with a single delimiter
    const urlArr = url.replaceAll(`.`, `/`).split(`/`)
    
    // remove the fluff at the front
    const cutFront = urlArr.filter((el) => !(el.includes(`http`) || el.includes(`www`) || el === ``) )
    
    //return the first thing after the fluff
    return cutFront[0]
  }

  function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
  };

//   my first idea was the top answer lmao I thought it was bad 

function domainName(url){
    return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
  }

  RegExp