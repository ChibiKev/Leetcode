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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
  function dfs(current, subCurrent){
    if (current == undefined){
      return false;
    }
    else if (isIdenticalDFS(current, subCurrent)){
      return true;
    }

    return dfs(current.left, subCurrent) || dfs(current.right, subCurrent);
  }
  
  function isIdenticalDFS(current, subCurrent){
    if (current == undefined || subCurrent == undefined){
      return current == undefined && subCurrent == undefined;
    }
    return current.val == subCurrent.val && isIdenticalDFS(current.left, subCurrent.left) && isIdenticalDFS(current.right, subCurrent.right);
  }

  return dfs(root, subRoot);
};