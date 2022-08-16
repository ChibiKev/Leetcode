/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 var buddyStrings = function(s, goal) {
  if (s.length != goal.length){
    return false;    
  }
  let sSet = new Set(s);
  if (s == goal && sSet.size < s.length){
    return true;
  }

  let difference = [];
  for (let index = 0; index < s.length; index++){
    if (s[index] != goal[index]){
      difference.push(index);
    }
  }

  return difference.length == 2 && s[difference[0]] == goal[difference[1]] && s[difference[1]] == goal[difference[0]];
};