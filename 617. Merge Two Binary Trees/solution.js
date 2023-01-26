/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
  function dfs(current, current2){
    if (current != null && current2 != null){
      current.val += current2.val;
      current.left = dfs(current.left, current2.left);
      current.right = dfs(current.right, current2.right);
      return current;
    }
    else{
      if (current != null){
        return current;
      }
      return current2;
    }
  }
  
  return dfs(root1, root2);
};