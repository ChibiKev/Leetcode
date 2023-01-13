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
var averageOfLevels = function(root) {
  function bfs(start){
    let myQueue = [start];
    let result = [];
    while (myQueue.length != 0){
      let total = 0;
      let count = 0;
      let newQueue = [];
      for (let index = 0; index < myQueue.length; index++){
        let current = myQueue[index];
        if (current != undefined){
          total += current.val;
          count += 1;
        }
        if (current.left != undefined){
          newQueue.push(current.left);
        }
        if (current.right != undefined){
          newQueue.push(current.right);
        }
      }
      let average = total / count;
      result.push(average);
      myQueue = newQueue;
    }
    return result;
  }
  
  return bfs(root);
};