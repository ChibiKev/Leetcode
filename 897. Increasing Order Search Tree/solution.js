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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  function dfs(current, last){
    if (current == null){
      return last;
    }
    let result = dfs(current.left, current);
    current.left = null;
    current.right = dfs(current.right, last);
    return result;
  }
  
  return dfs(root, null);
};