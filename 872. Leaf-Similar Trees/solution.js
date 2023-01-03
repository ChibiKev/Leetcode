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
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  function dfs(current, array){
    if (current.left == undefined && current.right == undefined){
      array.push(current.val);
    }
    if (current.left != undefined){
      dfs(current.left, array);
    }
    if (current.right != undefined){
      dfs(current.right, array);
    }
  }
  let root1Leaf = [];
  let root2Leaf = [];
  dfs(root1, root1Leaf);
  dfs(root2, root2Leaf);
  return JSON.stringify(root1Leaf) === JSON.stringify(root2Leaf);
};