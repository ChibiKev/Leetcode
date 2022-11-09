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
 * @param {number} k
 * @return {boolean}
 */
 var findTarget = function(root, k) {
  let queue = [root];
  let mySet = new Set();

  while (queue.length > 0){
    let current = queue.pop();

    if (mySet.has(k - current.val)){
      return true;
    }

    mySet.add(current.val);

    if (current.left){
      queue.push(current.left);
    }

    if (current.right){
      queue.push(current.right);
    }
  }
  
  return false;
};