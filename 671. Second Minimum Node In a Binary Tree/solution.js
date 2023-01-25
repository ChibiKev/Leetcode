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
var findSecondMinimumValue = function(root) {
  function dfs(current, lowest){
    if (current == undefined){
      return -1;
    }
    if (lowest < current.val){
      return current.val;
    }
    let left = dfs(current.left, lowest);
    let right = dfs(current.right, lowest);

    if (left > lowest || right > lowest){
      let currentLowest = left;
      if ((right < currentLowest && right != -1) || left == -1){
        currentLowest = right;
      }
      return currentLowest;
    }
    return -1;
  }

  return dfs(root, root.val);
};