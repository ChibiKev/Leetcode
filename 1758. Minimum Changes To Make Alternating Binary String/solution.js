/**
 * @param {string} s
 * @return {number}
 */
 var minOperations = function(s) {
  let current = s[0];
  let count = 0;
  for (let index = 0; index < s.length; index++){
    let number = s[index];
    if (current != number){
      count += 1;
    }
    if (current == "0"){
      current = "1";
    }
    else{
      current = "0";
    }
  }

  if (s.length - count < count){
    count = s.length - count;
  }

  return count;
};