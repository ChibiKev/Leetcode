/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  let result = [];
  
  function dfs(current, array){
    if (current != undefined){
      array = dfs(current.left, array);
      array = dfs(current.right, array);
      array.push(current.val);
    }
    return array;
  }

  return dfs(root, result);
};