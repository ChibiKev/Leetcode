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
var minDiffInBST = function(root) {
  let minimumDifference = Infinity;
  let value = undefined;

  function dfs(current){
    if (current == undefined){
      return;
    }
    dfs(current.left);
    if (value != undefined){
      difference = Math.abs(current.val - value);
      if (difference < minimumDifference){
        minimumDifference = difference;
      }
    }
    value = current.val;
    dfs(current.right);
  }
  
  dfs(root);
  return minimumDifference;
};