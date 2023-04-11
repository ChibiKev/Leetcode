/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
  let result = edges[0][1];
  if (edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1]){
    result = edges[0][0];
  }
  return result;
};