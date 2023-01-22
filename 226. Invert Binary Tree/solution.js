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
var invertTree = function(root) {
  function dfs(current){
    if (current == undefined){
      return current;
    }
    let temp = current.left;
    current.left = dfs(current.right);
    current.right = dfs(temp);
    return current;
  }
  
  return dfs(root);
};