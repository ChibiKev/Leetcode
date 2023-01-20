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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
  function dfs(current, low, high){
    if (current == undefined){
      return 0;
    }
    let total = 0;
    if (low <= current.val && current.val <= high){
      total += current.val;
    }
    let leftTotal = dfs(current.left, low, high);
    let rightTotal = dfs(current.right, low, high);
    return total + leftTotal + rightTotal;
  }

  return dfs(root, low, high);
};