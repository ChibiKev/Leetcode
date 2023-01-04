/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
  function dfs(original, cloned, target){
    if (original == undefined){
      return undefined;
    }
    if (original == target){
      return cloned;
    }
    let left = dfs(original.left, cloned.left, target);
    let right = dfs(original.right, cloned.right, target);
    if (left){
      return left;
    }
    else if (right){
      return right;
    }
  }
  return dfs(original, cloned, target);
};