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
var minDepth = function(root) {
  function dfs(current, depth){
    if (current == undefined){
      return depth - 1;
    }
    else if (current.left == undefined && current.right == undefined){
      return depth;
    }
    else if (current.left != undefined && current.right == undefined){
      return dfs(current.left, depth + 1);
    }
    else if (current.left == undefined && current.right != undefined){
      return dfs(current.right, depth + 1);
    }

    let leftDepth = dfs(current.left, depth + 1);
    let rightDepth = dfs(current.right, depth + 1);
    if (leftDepth < rightDepth){
      return leftDepth;
    }
    return rightDepth;
  }
  
  return dfs(root, 1);
};