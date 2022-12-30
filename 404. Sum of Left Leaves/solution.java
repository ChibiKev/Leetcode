/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {

  int dfs(TreeNode current, int amount){
    if (current.left != null){
      if (current.left.left == null && current.left.right == null){
        amount += current.left.val;
      }
      else{
        amount = dfs(current.left, amount);
      }
    }
    if (current.right != null){
      amount = dfs(current.right, amount);
    }
    return amount;
  }

  public int sumOfLeftLeaves(TreeNode root) {
    int total = 0;
    return dfs(root, total);
  }
}