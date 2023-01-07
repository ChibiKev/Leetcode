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
 * @return {number[]}
 */
var findMode = function(root) {
  let value = undefined;
  let count = 1;
  let maxCount = 0;
  let result = [];

  function dfs(current, storage){
    if (current == undefined){
      return storage;
    }
    storage = dfs(current.left, storage);
    if (value == current.val){
      count += 1;
    }
    else{
      count = 1;
    }
    value = current.val;
    if (count > maxCount){
      maxCount = count;
      storage = [current.val];
    }
    else if (count == maxCount){
      storage.push(current.val);
    }
    storage = dfs(current.right, storage);
    return storage;
  }
  
  return dfs(root, result);
};