/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
  let result = [];
  
  function dfs(current, array){
    if (current == undefined){
      return;
    }
    array.push(current.val);
    for (let index = 0; index < current.children.length; index++){
      let child = current.children[index];
      dfs(child, array);
    }
  }
  
  dfs(root, result);
  return result;
};