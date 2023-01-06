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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  let xDepth = -1;
  let yDepth = -1;
  let xParent = undefined;
  let yParent = undefined;
  
  function dfs(current, parent, x, y, depth){
    if (current == undefined){
      return;
    }
    if (current.val == x){
      xDepth = depth;
      xParent = parent;
    }
    else if (current.val == y){
      yDepth = depth;
      yParent = parent;
    }
    dfs(current.left, current, x, y, depth + 1);
    dfs(current.right, current, x, y, depth + 1);
  }

  dfs(root, undefined, x, y, 0);
  return xDepth == yDepth && xParent != yParent;
};