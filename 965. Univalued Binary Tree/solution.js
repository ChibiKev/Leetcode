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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  function dfs(current){
    let left = true;
    if (current.left != undefined){
      left = current.val == current.left.val && dfs(current.left);
    }
    let right = true;
    if (current.right != undefined){
      right = current.val == current.right.val && dfs(current.right);
    }
    return left && right;
  }
  
  return dfs(root);
};