/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
  function dfs(current, depth){
    if (current == undefined){
      return depth - 1;
    }
    let maxDepth = depth;
    for (let index = 0; index < current.children.length; index++){
      let child = current.children[index];
      let currentDepth = dfs(child, depth + 1);
      if (currentDepth > maxDepth){
        maxDepth = currentDepth;
      }
    }
    return maxDepth;
  }

  return dfs(root, 1);
};