/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
  let dictionary = {};
  for (let index = 0; index < edges.length; index++){
    let start = edges[index][0];
    let end = edges[index][1];
    if (dictionary[start]){
      dictionary[start].push(end);
    }
    else {
      dictionary[start] = [end];
    }
    if (dictionary[end]){
      dictionary[end].push(start);
    }
    else {
      dictionary[end] = [start];
    }
  }

  let seen = new Array(n).fill(false);

  function dfs(current){
    if (current == destination){
      return true;
    }
    if (!seen[current]){
      seen[current] = true;
      for (let index2 = 0; index2 < dictionary[current].length; index2++){
        let nextNode = dictionary[current][index2];
        if (dfs(nextNode)){
          return true;
        }
      }
    }
    return false;
  }
  
  return dfs(source);
};