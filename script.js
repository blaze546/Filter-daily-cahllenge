function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(b => !geese.includes(b));
};


function gooseFilter (birds) {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  /* 
  return non-matches
    return an array containing all of the strings in the input array except those that match strings in geese
    Use a combination of Array.prototype.filter and Array.prototype.inclues
    
    Steps
    1. filter creates new array
    2. elements that pass test are implemented
    3. includes determins whether an array includes a certain value 
      3.a) returns a true or false (we want the false values to be returned) 
    4. Non-Geese elements are returned
  */
  
  let filterGeese = birds.filter((word) => !geese.includes(word));
  
  //console.log(filterGeese)
  return filterGeese
};

