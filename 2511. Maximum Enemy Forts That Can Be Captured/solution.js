/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function(forts) {
  let result = 0;
  let startingPosition = -1;
  for (let index = 0; index < forts.length; index++){
    let fort = forts[index];
    if (fort == 1){
      startingPosition = index;
    }
    else if (fort == -1 && startingPosition != -1){
      let distance = index - startingPosition - 1;
      startingPosition = -1;
      if (distance > result){
        result = distance;
      }
    }
  }
  
  startingPosition = -1;
  for (let index = forts.length - 1; index > -1; index--){
    let fort = forts[index];
    if (fort == 1){
      startingPosition = index;
    }
    else if (fort == -1 && startingPosition != -1){
      let distance = startingPosition - index - 1;
      startingPosition = -1;
      if (distance > result){
        result = distance;
      }
    }
  }

  return result;
};