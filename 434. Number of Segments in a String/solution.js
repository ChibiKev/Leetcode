/**
 * @param {string} s
 * @return {number}
 */
 var countSegments = function(s) {
  let count = 0;
  let found = false;

  for (let index = 0; index < s.length; index++){
    let character = s[index];
    if (character == " " && found == true){
      count += 1;
      found = false;
    }
    else if (character != " "){
      found = true;
    }
  }

  if (found == true){
    return count + 1;
  }

  return count;
};