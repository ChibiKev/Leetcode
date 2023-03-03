/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function(words, target, startIndex) {
  let shortestDistance = -1;
  for (let index = 0; index < words.length; index++){
    let word = words[index];
    if (word == target){
      let distance = Math.abs(index - startIndex);
      let distance2 = words.length - Math.abs(index - startIndex);
      if (shortestDistance > distance || shortestDistance == -1){
        shortestDistance = distance;
      }
      if (shortestDistance > distance2){
        shortestDistance = distance2;
      }
    }
  }

  return shortestDistance;
};