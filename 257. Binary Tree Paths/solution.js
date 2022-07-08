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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
  let result = [];
  function dfs(root, path){
    if (!root.left && !root.right){
      path += root.val.toString();
      return result.push(path);
    }
    if (root.left){
      dfs(root.left, path + root.val.toString() + "->");      
    }
    if (root.right){
      return dfs(root.right, path + root.val.toString() + "->");      
    }
  }

  dfs(root,"");

  return result;
};