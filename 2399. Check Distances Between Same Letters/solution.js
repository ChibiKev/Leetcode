/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
 var checkDistances = function(s, distance) {
  for (let index = 0; index < s.length; index++){
    let letter = s[index];
    let letterIndex = letter.charCodeAt(0) - 97;
    let distanceValue = distance[letterIndex];
    let nextValue = index + distanceValue + 1;
    if (s.length <= nextValue){
      return false;
    }
    if (letter == s[nextValue]){
      distance[letterIndex] = -1;
    }
    else if (distance[letterIndex] != -1){
      return false;
    }
  }
  return true;
};