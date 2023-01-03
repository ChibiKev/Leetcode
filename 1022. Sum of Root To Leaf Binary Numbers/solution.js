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
var sumRootToLeaf = function(root) {
  function dfs(current, amount, binary){
    if (current.left == undefined && current.right == undefined){
      amount += parseInt(binary + current.val.toString(), 2);
    }
    if (current.left != undefined){
      amount = dfs(current.left, amount, binary + current.val.toString());
    }
    if (current.right != undefined){
      amount = dfs(current.right, amount, binary + current.val.toString());
    }
    return amount;
  }
  
  return dfs(root, 0, "");
};