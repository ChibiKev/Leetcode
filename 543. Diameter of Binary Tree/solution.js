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
var diameterOfBinaryTree = function(root) {
  let result = 0;
  function dfs(current){
    if (current == undefined){
      return 0;
    }
    let left = dfs(current.left);
    let right = dfs(current.right);
    
    if (left + right > result){
      result = left + right;
    }

    let maximum = left;
    if (right > maximum){
      maximum = right;
    }
    return maximum + 1;
  }
  
  dfs(root);
  return result;
};