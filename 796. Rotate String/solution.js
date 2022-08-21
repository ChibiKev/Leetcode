/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 var rotateString = function(s, goal) {
  if (s.length != goal.length){
    return false;
  }

  for (let index = 0; index < s.length; index++){
    if (s == goal){
      return true;
    }
    s = s.slice(1, s.length) + s[0];
  }

  return false;
};