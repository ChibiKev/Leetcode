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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  let current = root;
  while (current != null){
    if (current.val == val){
      return current;
    }
    else if (current.val > val){
      current = current.left;
    }
    else if (current.val < val){
      current = current.right;
    }
  }
  return null;
};