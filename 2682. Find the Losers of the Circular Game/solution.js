/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function(n, k) {
  let visited = new Array(n).fill(false);

  let i = 0;
  let visit = 0;
  while (visited[i % n] == false){
    visit += 1;
    visited[i % n] = true;
    i += visit * k;
  }
  
  let result = [];
  for (let index = 0; index < visited.length; index++){
    let value = visited[index];
    if (value == false){
      result.push(index + 1);
    }
  }
  
  return result;
};