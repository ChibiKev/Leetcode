/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
 var findContentChildren = function(g, s) {
  g.sort(function(a,b){return a - b});
  s.sort(function(a,b){return a - b});
  let childrenIndex = 0;
  let count = 0;
  for (let cookies of s){
    if (childrenIndex >= g.length){
      break;
    }
    if (g[childrenIndex] <= cookies){
      count += 1;
      childrenIndex += 1;
    }
  }

  return count;
};