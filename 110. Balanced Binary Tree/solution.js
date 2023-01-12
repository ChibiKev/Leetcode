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
var isBalanced = function(root) {
  function dfs(current){
    if (current == undefined){
      return 0;
    }
    let leftHeight = dfs(current.left);
    let rightHeight = dfs(current.right);
    let difference = Math.abs(leftHeight - rightHeight);
    if (leftHeight == -1 || rightHeight == -1 || difference > 1){
      return -1;
    }
    let maximum = leftHeight;
    if (rightHeight > maximum){
      maximum = rightHeight;
    }
    return maximum + 1;
  }
  
  return dfs(root) >= 0;
};