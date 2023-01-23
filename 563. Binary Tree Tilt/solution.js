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
 * @return {number}
 */
var findTilt = function(root) {
  let totalTilt = 0;
  
  function dfs(current){
    if (current == undefined){
      return 0;
    }
    let left = dfs(current.left);
    let right = dfs(current.right);
    totalTilt += Math.abs(left - right);
    return current.val + left + right;
  }
  
  dfs(root);
  return totalTilt;
};