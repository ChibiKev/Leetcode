/**
 * @param {string[]} logs
 * @return {number}
 */
 var minOperations = function(logs) {
  let count = 0; 
  for (let log of logs){
    if (log === "../"){
      if (count > 0){
        count -= 1;
      }
    }
    else if (log === "./"){
      continue;
    }
    else{
      count += 1;
    }
  }

  return count;
};