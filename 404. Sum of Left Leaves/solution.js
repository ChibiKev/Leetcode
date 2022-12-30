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
var sumOfLeftLeaves = function(root) {
  let total = 0;

  function dfs(current, amount){
    if (current.left != undefined){
      if (current.left.left == undefined && current.left.right == undefined){
        amount += current.left.val;
      }
      else{
        amount = dfs(current.left, amount);
      }
    }
    if (current.right != undefined){
      amount = dfs(current.right, amount);
    }
    return amount;
  }

  return dfs(root, total);
};