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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  let total = 0;
  function dfs(current, amount){
    if (current == undefined){
      return false;
    }
    amount += current.val;
    if (current.left == undefined && current.right == undefined && amount == targetSum){
      return true;
    }
    return dfs(current.left, amount) || dfs(current.right, amount);
  }
  return dfs(root, total);
};