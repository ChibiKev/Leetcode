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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root){
    return true;
  }
  
  function isSame(leftRoot, rightRoot){
    if (leftRoot == undefined && rightRoot == undefined){
      return true;
    }
    if (leftRoot == undefined || rightRoot == undefined){
      return false;
    }
    if (leftRoot.val != rightRoot.val){
      return false;
    }
    return isSame(leftRoot.left, rightRoot.right) && isSame(rightRoot.left, leftRoot.right);
  }
  
  return isSame(root.left, root.right);
};