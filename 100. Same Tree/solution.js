/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  function dfs(current, subCurrent){
    if (current == undefined || subCurrent == undefined){
      return current == undefined && subCurrent == undefined;
    }
    return current.val == subCurrent.val && dfs(current.left, subCurrent.left) && dfs(current.right, subCurrent.right);
  }

  return dfs(p, q);
};