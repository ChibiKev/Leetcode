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
var maxDepth = function(root) {
  function dfs(current){
    if (current == undefined){
      return 0;
    }
    let leftDepth = dfs(current.left);
    let rightDepth = dfs(current.right);
    let maxDepth = leftDepth;
    if (rightDepth > maxDepth){
      maxDepth = rightDepth;
    }
    return maxDepth + 1;
  }

  return dfs(root);
};